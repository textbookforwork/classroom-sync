// 閱讀｜計時器（師生連動）（Figma BE 頁 141:576，本輪新開的區塊）
// 輸出 out/timer-01.png …，依序填進區塊裡的圖框
// 2026-11-04 重排：圖框依序放 01,02,03,04,05,08,06,07（timer-08＝最後 10 秒變紅，新圖框 be-12-8）
import { open, shot } from './common.mjs';
const { p, ev, close } = await open();
const W = (ms = 600) => p.waitForTimeout(ms);
await ev(() => { goChapter(2); S.guide = false; S.view = 'teacher'; openBook(); S.t.pop = 'toolbox'; refresh(); });
await W(1000);
// 1 工具箱 → 計時器（不必先開始上課）
await shot(p, 'timer-01.png', ['txt=計時器']);
// 2 計時器彈窗
await ev(() => { S.t.pop = 'timer'; S.t.timerSec = 300; refresh(); });
await W(); await shot(p, 'timer-02.png', ['.timer-pop']);
// 3 開始後釘在左上角
await ev(() => { startTimer(300); S.t.pop = null; refresh(); });
await W(1500); await shot(p, 'timer-03.png', ['.timer-pop.pinned']);
// 4 學生端（上課中）圓環小卡同步倒數
await ev(() => { ensureLive(); S.t.pop = null; S.view = 'student'; refresh(); });
await W(1200); await shot(p, 'timer-04.png', ['.timer-card']);
// 5 老師暫停 → 學生寫「暫停中」
await ev(() => { pauseTimer(); refresh(); });
await W(800); await shot(p, 'timer-05.png', ['.timer-card']);
// 8 最後 10 秒：老師數字和圓圈變紅（另存 timer-08）
await ev(() => { pauseTimer(); S.timer.endAt = Date.now() + 8500; S.view = 'teacher'; S.t.pop = null; refresh(); });
await W(700); await shot(p, 'timer-08.png', ['.timer-pop.pinned']);
// 6 時間到（老師）
await ev(() => { S.timer.endAt = Date.now() + 1200; S.view = 'teacher'; S.t.pop = null; refresh(); });
await W(2200); await shot(p, 'timer-06.png', ['.timer-pop.pinned']);
// 7 時間到（學生）
await ev(() => { S.view = 'student'; refresh(); });
await W(500); await shot(p, 'timer-07.png', ['.timer-card']);
await close();
