// 師生連動前後端整合裡的 Demo 畫面（Figma BE 頁 141:576，區塊 254:31）
//   integ-follow-teacher / integ-follow-student（①）、integ-shot-1/2/3（②）、integ-scroll-before/after（①）、integ-demo-shot-⑤（⑤）
// 自編器的畫面（integ-31、s10、12、25、mask、ink）不在這支，維持熊熊那邊的圖
import { open, shot } from './common.mjs';
const { p, ev, close } = await open();
const W = (ms = 600) => p.waitForTimeout(ms);
const dev = () => p.locator('.dev').first();
await ev(() => { goChapter(2); S.guide = false; ensureLive(); S.t.pop = null; S.t.barOpen = false; S.view = 'teacher'; refresh(); });
await W(1200);
// ① 老師在第 2 頁
await shot(p, 'integ-follow-teacher.png', ['.sync-zone .pager']);
// ① 學生跟隨老師中 p.2
await ev(() => { S.view = 'student'; if (!S.s.follow) setFollow(true); refresh(); });
await W(800); await shot(p, 'integ-follow-student.png', ['.spill']);
// ① 字調大後，最下面那段在畫面外 → 老師點那段，自動捲過去
await ev(() => { S.s.rs = { ...(S.s.rs || DEFAULT_RS), fs: 36, lh: 2.2 }; S.focus = null; refresh(); });
await W(1200); await shot(p, 'integ-scroll-before.png', ['.spill']);
await ev(() => { S.focus = { page: 0, blk: 'p2', sn: null, mark: false }; refresh(); });
await W(1800); await shot(p, 'integ-scroll-after.png', ['[data-blk=p2]']);
// ② 老師派手寫題：寫在課本目前這一頁 p.2
await ev(() => { S.focus = null; S.s.rs = null; S.view = 'teacher'; S.t.pop = 'task'; S.task = null; S.compose = 'shot'; S.draft = { q: '', showQ: false, showOpt: false, n: 4, opts: ['', '', '', '', '', ''], bg: 'page' }; refresh(); });
await W(800); await shot(p, 'integ-shot-1.png', ['.paper-seg', '.cp-hint']);
// ② 學生自己翻到 p.5（還沒派出）
await ev(() => { S.view = 'student'; setFollow(false); S.s.page = 1; refresh(); });
await W(800); await shot(p, 'integ-shot-2.png', ['.dev .pager, .rail .pager']);
// ② 派出：學生直接被帶到 p.2、拿起畫筆，在課本上作答
await ev(() => { sendTask('shot', {}); S.t.pop = null; autoAnswer(); refresh(); });
await W(1000); await shot(p, 'integ-shot-3.png', ['.taskbar']);
// ⑤ 老師在第 5 頁畫底線（不帶給學生）
await ev(() => { stopTask(); endTask(); S.t.pop = null; S.view = 'teacher'; S.t.page = 1; S.t.tool = null; S.t.ink[PAGES[1].id].push({ c: PEN_C[0], w: 6, pts: [[60, 330], [300, 332], [560, 330]] }); refresh(); });
await W(800);
{ const r = await p.evaluate(() => { const d = document.querySelector('.dev').getBoundingClientRect(); const ps = [...document.querySelectorAll('.pageframe svg.ink path')]; const b = ps[ps.length - 1].getBoundingClientRect(); return { x: b.left - d.left, y: b.top - d.top - 6, w: b.width, h: b.height + 12 }; }); await shot(p, 'integ-demo-shot-5.png', [r]); }
await close();
