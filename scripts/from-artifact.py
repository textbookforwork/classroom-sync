# 把課堂模式 demo（Artifact 那份 classroom-demo.html）轉成網站版的 src/app.js、src/style.css、index.html。
# 乙練的做法（2026-11-03）：畫面一律先在 Artifact 改好、確認，再跑這支轉成網站上線；網站版不直接改。
# 轉的時候自動加上：模組 import、假資料（repo 是公開的）、三個入口（#/admin #/teacher #/student）、
# 同一台電腦的視窗同步、Agentation（網址加 ?feedback）。
# 用法：python3 scripts/from-artifact.py && npm run deploy -- "這次改了什麼"
import pathlib
import re
import sys

SITE = pathlib.Path(__file__).resolve().parent.parent
SRC = SITE.parent / '課堂模式demo' / 'classroom-demo.html'


def rep(s, a, b, n=None):
    c = s.count(a)
    if c == 0 or (n is not None and c != n):
        sys.exit(f'找不到要替換的字（{c} 處）：{a[:60]}')
    return s.replace(a, b)


page = SRC.read_text()
head, rest = page.split('<div id="app"></div>', 1)

# ── 樣式 ──
css = '\n'.join(re.findall(r'<style>(.*?)</style>', head, re.S)).replace('url(assets/', 'url(/assets/')
css += """
/* 單一角色視窗：整個畫面給那一端 */
.solo { height: 100vh; display: flex; padding: 12px 16px; background: var(--shell); }
.solo .dev-slot { flex: 1; }
"""

# ── 程式 ──
i, j = rest.rfind('<script>'), rest.rfind('</script>')
js = rest[i + 8:j]
js = rep(js, "const { h, render } = preact;\nconst { useState, useEffect, useRef, useLayoutEffect } = preactHooks;\n", '')
js = """import { h, render } from 'preact';
import { useState, useEffect, useRef, useLayoutEffect } from 'preact/hooks';
import htm from 'htm';
import qrcode from 'qrcode-generator';
import './style.css';
window.qrcode = qrcode;
""" + js

# 假資料：學校、信箱、帳號前綴、出版社都換掉；預設只留兩組，其他讓測試的人自己新建
a = js.index("      schools: [\n"); b = js.index("      others: [],", a)
js = js[:a] + """      schools: [
        { name: '月光示範國中', stage: '國中', type: '學校', students: 0, teachers: 1 },
        { name: '出版社測試帳號', stage: '不限', type: '測試推廣', students: 0, teachers: 1 },
      ],
      teachers: [
        { name: '林志明', email: 'lin@moon.example', school: '月光示範國中', classes: ['701 · 數學'] },
        { name: '測試老師 A', email: 'test-a@test.example', school: '出版社測試帳號', classes: ['501 · 自然'] },
      ],
""" + js[b:]
js = re.sub(r"const SCHOOL = '[^']*';", "const SCHOOL = '星光示範國小';", js)
js = re.sub(r"(\w+)@wengzi\.edu\.tw", r"\1@star.example", js)
js = js.replace('admin@textbook.tw', 'admin@textbook.example')
js = re.sub(r"\bwz(?=[0-9x$])", 'xg', js)
js = re.sub(r"edition: '(\d+) (?:南一|翰林|康軒) ", r"edition: '\1 ", js)
for bad in ['南一', '翰林', '康軒', '翁子', 'wengzi', 'edu.tw']:
    if bad in js:
        sys.exit(f'還有真實資料沒換掉：{bad}')

# 三個入口＋同一台電腦的視窗同步
js = rep(js, "function App() {\n  const [, force] = useState(0);\n  refresh = () => force((x) => x + 1);", """/* 網站版：#/admin、#/teacher、#/student 各開一個角色；其他網址是三端並排的展示版。
   同一台電腦開好幾個視窗時，用 BroadcastChannel 互傳整份狀態（跨裝置要等正式後端） */
const ROLE = (location.hash.match(/^#\\/(admin|teacher|student)\\b/) || [])[1] || null;
window.addEventListener('hashchange', () => location.reload());
const chan = 'BroadcastChannel' in window ? new BroadcastChannel('classroom-sync') : null;
let REMOTE = false;
const post = (msg) => { try { chan.postMessage(msg); } catch { chan.postMessage(JSON.parse(JSON.stringify(msg))); } };
if (chan) {
  chan.onmessage = (e) => {
    if (e.data && e.data.type === 'hello') return post({ type: 'state', S });
    if (e.data && e.data.type === 'state') { S = e.data.S; REMOTE = true; refresh(); }
  };
  post({ type: 'hello' });
}
window.demo = { get S() { return S; }, refresh: () => refresh() }; // 測試同步用
const openRole = (r) => window.open(location.pathname + location.search + '#/' + r, 'classroom-' + r);
function App() {
  const [, force] = useState(0);
  refresh = () => force((x) => x + 1);
  useEffect(() => { if (!chan) return; if (REMOTE) { REMOTE = false; return; } post({ type: 'state', S }); });""", 1)
js = rep(js, "  return html`<div class=\"shell\">\n    <header class=\"bar\">", "  if (ROLE) return html`<div class=\"solo\"><${Device} side=${ROLE} /></div>`;\n  return html`<div class=\"shell\">\n    <header class=\"bar\">", 1)
js = rep(js, """      <button class="ghost" onClick=${act(() => { S.guide = !S.guide; })}>""", """      <div class="seg" role="group" aria-label="開新視窗">${[['teacher', '老師'], ['student', '學生'], ['admin', '管理員']].map(([r, l]) => html`<button onClick=${() => openRole(r)}><${Icon} n="arrow-up-right" s=${14} />${l}</button>`)}</div>
      <button class="ghost" onClick=${act(() => { S.guide = !S.guide; })}>""", 1)
js = rep(js, "render(html`<${App} />`, document.getElementById('app'));", """render(html`<${App} />`, document.getElementById('app'));
// Agentation：網址加 ?feedback 才出現（本機開發一律出現），點畫面寫意見、複製給 Claude
if (import.meta.env.DEV || new URLSearchParams(location.search).has('feedback')) {
  import('agentation').then(({ Agentation }) => { const host = document.createElement('div'); document.body.appendChild(host); render(h(Agentation, {}), host); });
}""", 1)

# ── 頁面 ──
links = '\n'.join(re.findall(r'<link[^>]+>', head))
title = re.search(r'<title>(.*?)</title>', head).group(1)
(SITE / 'index.html').write_text(f'''<!doctype html>
<html lang="zh-Hant"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
{links}
</head><body><div id="app"></div><script type="module" src="/src/app.js"></script></body></html>
''')
(SITE / 'src' / 'style.css').write_text(css)
(SITE / 'src' / 'app.js').write_text(js)
print('已從 Artifact 轉成網站版')
