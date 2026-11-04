// 整體｜主題互動與學生個人化（規劃中）（Figma BE 頁 141:576，區塊 145:61）
// 輸出 out/theme-01.png …，依序填進區塊裡的圖框
import { open, shot } from './common.mjs';
const { p, ev, close } = await open();
const W = (ms = 600) => p.waitForTimeout(ms);
const dev = () => p.locator('.dev').first();
// 夥伴藏在書櫃後面：只圈露出來的那一塊（書櫃上緣以上）
const peek = () => p.evaluate(() => { const d = document.querySelector('.dev').getBoundingClientRect(), b = document.querySelector('.shelf-buddy').getBoundingClientRect(), top = document.querySelector('.shelf-panel').getBoundingClientRect().top; const sayEl = document.querySelector('.shelf-buddy .say:not(.peek)'); let x1 = b.left, x2 = b.right, y1 = b.top, y2 = Math.min(b.bottom, top); if (sayEl) { const r = sayEl.getBoundingClientRect(); x1 = Math.min(x1, r.left); x2 = Math.max(x2, r.right); y1 = Math.min(y1, r.top); } return { x: x1 - d.left, y: y1 - d.top, w: x2 - x1, h: y2 - y1, cx: (b.left + b.right) / 2, cy: (b.top + top) / 2 }; });
await ev(() => { goChapter(2); S.guide = false; S.view = 'student'; S.s.avatar = null; S.s.screen = 'login'; S.s.draft = { shape: null, eye: 'big' }; refresh(); });
await W(1000);
// 1 學生第一次登入
await shot(p, 'theme-01.png', ['.login input@0', '.login input@1', 'txt=進入數位教科書']);
// 2 選形狀
await ev(() => { studentLogin(); S.s.pickStep = 1; S.s.draft = { shape: 'pink', eye: 'big' }; refresh(); });
await W(800); await shot(p, 'theme-02.png', ['.shape-grid', '.persona']);
// 3 選眼睛
await ev(() => { S.s.pickStep = 2; S.s.draft.eye = 'happy'; refresh(); });
await W(800); await shot(p, 'theme-03.png', ['.eye-grid']);
// 4 書櫃：右上角座號圓圈；夥伴藏在書櫃後面探出頭
await ev(() => { finishPick(); S.s.screen = 'shelf'; S.s.rx = null; S.s.shelfMood = null; refresh(); });
await W(4500); await shot(p, 'theme-04.png', ['.who-me .avatar', await peek()]);
// 5 滑過多露出一點，「點我聊聊天」
{ const r = await peek(); await p.mouse.move(r.cx, r.cy); await W(900); const r2 = await peek(); const { ring, OUT } = await import('./common.mjs'); await p.evaluate(() => document.querySelectorAll('.ring-x').forEach((x) => x.remove())); await ring(p, [r2]); await dev().screenshot({ path: OUT + 'theme-05.png' }); console.log('saved theme-05.png'); }
await p.mouse.move(1, 1250);
// 6 點夥伴輪流說話
await ev(() => { pokeShelf(); refresh(); });
await W(900); await shot(p, 'theme-06.png', [await peek()]);
// 7 很久沒來：睡著
await ev(() => { S.s.rx = null; S.s.shelfMood = 'away'; refresh(); });
await W(900); await shot(p, 'theme-07.png', [await peek()]);
// 8 有新書
await ev(() => { S.s.shelfMood = 'new'; say(TALK[S.s.avatar.shape].newBook, 'celebrating', 6000); refresh(); });
await W(900); await shot(p, 'theme-08.png', [await peek()]);
// 9 頭像選單：我的學習夥伴、換學習夥伴
await ev(() => { S.s.rx = null; S.s.shelfMood = null; S.s.menu = true; refresh(); });
await W(800); await shot(p, 'theme-09.png', ['.who-me .menu']);
// 10 下課囉
await ev(() => { S.s.menu = false; ensureLive(); bonus(ME, 1); endClass(); refresh(); });
await W(1500); await shot(p, 'theme-10.png', ['.end-pal', '.end-say']);
// 11 選心情、今天做了什麼
await ev(() => { S.s.mood = 'learned'; refresh(); });
await W(1200); await shot(p, 'theme-11.png', ['.moods', '.end-sum']);
await close();
