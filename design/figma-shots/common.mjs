// 師生同步 Demo 截圖共用：開本機伺服器讀 課堂模式demo/index.html，拍單一裝置畫面（1440×900，存 2 倍）
// 線上版 classroom-sync 是打包過的模組，拿不到 S、sendTask 這些全域，所以用本機 index.html 拍（兩者同一份原始碼轉出）
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from '/Users/elaine/.claude/skills/gstack/node_modules/playwright/index.mjs';

const DEMO = process.env.DEMO || '/Users/elaine/vault/projects/V1/課堂模式demo';
export const OUT = decodeURIComponent(new URL('./out/', import.meta.url).pathname);
const TYPES = { '.html': 'text/html; charset=utf-8', '.jpg': 'image/jpeg', '.png': 'image/png', '.mp3': 'audio/mpeg', '.svg': 'image/svg+xml' };

export async function open() {
  const server = http.createServer((req, res) => {
    const u = decodeURIComponent(req.url.split('?')[0]);
    const f = path.join(DEMO, u === '/' ? 'index.html' : u);
    fs.readFile(f, (err, buf) => { if (err) { res.writeHead(404); res.end(); return; } res.writeHead(200, { 'content-type': TYPES[path.extname(f)] || 'application/octet-stream' }); res.end(buf); });
  }).listen(0);
  const port = server.address().port;
  const b = await chromium.launch();
  // 裝置畫面剛好 1440×900（縮放 1），存圖 2 倍
  const p = await b.newPage({ viewport: { width: 1472, height: 1300 }, deviceScaleFactor: 2 });
  p.on('pageerror', (e) => console.log('PAGEERR', e.message));
  await p.goto(`http://localhost:${port}/index.html`);
  await p.waitForTimeout(1500);
  // 拿掉導覽高亮、裝置圓角；動畫停在最後一格
  await p.addStyleTag({ content: `.hint::after{display:none!important}.tabs button.hint{outline:none!important;box-shadow:none!important}.dev{border-radius:0!important;box-shadow:none!important}.ring-x{position:absolute;border:5px solid #FF854A;border-radius:12px;pointer-events:none;z-index:99999}` });
  await p.evaluate(() => { S.guide = false; refresh(); });
  const ev = (fn, arg) => p.evaluate(fn, arg);
  const close = async () => { await b.close(); server.close(); };
  return { p, ev, close };
}

// 把要看的地方用橘框圈起來：sels 是 CSS 選擇器（在可見的那台裝置裡找）或 {x,y,w,h}（裝置座標）
export async function ring(p, sels, pad = 6) {
  await p.evaluate(({ sels, pad }) => {
    const dev = document.querySelector('.dev'); const d = dev.getBoundingClientRect();
    const k = d.width / 1440;
    for (const s of sels) {
      let r;
      if (typeof s === 'string') {
        let el;
        if (s.startsWith('txt=')) { // 含這段字、面積最小的元素
          const t = s.slice(4); el = [...dev.querySelectorAll('*')].filter((e) => e.textContent.includes(t) && e.getBoundingClientRect().width > 0).sort((a, b) => { const A = a.getBoundingClientRect(), B = b.getBoundingClientRect(); return A.width * A.height - B.width * B.height; })[0];
        } else { const [sel, idx] = s.split('@'); el = [...dev.querySelectorAll(sel)][+(idx || 0)]; }
        if (el && el.closest('button') && dev.contains(el.closest('button'))) el = el.closest('button');
        if (!el) { window.__noring = (window.__noring || []).concat(s); continue; }
        const b = el.getBoundingClientRect(); r = { x: (b.left - d.left) / k, y: (b.top - d.top) / k, w: b.width / k, h: b.height / k };
      } else r = s;
      const o = document.createElement('div'); o.className = 'ring-x';
      Object.assign(o.style, { left: (r.x - pad) + 'px', top: (r.y - pad) + 'px', width: (r.w + pad * 2) + 'px', height: (r.h + pad * 2) + 'px' });
      dev.style.position = 'absolute'; dev.appendChild(o);
    }
  }, { sels, pad });
}

export async function shot(p, name, rings = [], { keepToasts = false } = {}) {
  if (!keepToasts) await p.evaluate(() => { S.toasts = { teacher: [], student: [], admin: [] }; refresh(); });
  await p.mouse.move(1, 1250); // 滑鼠移出裝置，不留 hover 樣式
  await p.waitForTimeout(500);
  await p.evaluate(() => document.querySelectorAll('.ring-x').forEach((x) => x.remove()));
  if (rings.length) await ring(p, rings);
  const miss = await p.evaluate(() => { const m = window.__noring; window.__noring = null; return m; });
  if (miss) console.log('NO RING', name, miss);
  await p.locator('.dev').first().screenshot({ path: OUT + name });
  const sz = await p.locator('.dev').first().evaluate((e) => [e.offsetWidth, e.offsetHeight]);
  console.log('saved', name, sz.join('x'));
}
