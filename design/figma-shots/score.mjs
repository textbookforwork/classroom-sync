// 師生連動｜到課與加分（Figma BE 頁 141:576，區塊 145:114）
// 輸出 out/score-01.png …，依序填進區塊裡的圖框
import { open, shot } from './common.mjs';
const { p, ev, close } = await open();
const W = (ms = 600) => p.waitForTimeout(ms);
await ev(() => { goChapter(3); S.guide = false; S.view = 'teacher'; ensureLive(); S.cls.joined = S.cls.joined.filter((x) => ![22, 27].includes(x)); S.t.pop = 'roster'; S.t.scoreMode = 'plus'; refresh(); });
await W(1000);
// 1 名單：還沒登入、請假的是虛線座號
await shot(p, 'score-01.png', ['.class-bar .cb-cls', '.score-pop .att-line', '.kid.away@0']);
// 2 點 12 號 +1：變成形狀夥伴，冒出 +1
await ev(() => { [3, 8, 21].forEach((x) => bonus(x, 1)); refresh(); });
await W(1500);
await ev(() => { bonus(ME, 1); refresh(); });
await W(350); await shot(p, 'score-02.png', ['.kid@11']);
// 3 學生端：自己的夥伴從右下角冒出來說一句話
await ev(() => { S.view = 'student'; S.t.pop = null; bonus(ME, 1); refresh(); });
await W(900); await shot(p, 'score-03.png', ['.buddy']);
// 4 全班 +1
await ev(() => { S.view = 'teacher'; S.t.pop = 'roster'; classBonus(1); refresh(); });
await W(1100); await shot(p, 'score-04.png', ['.score-top .class-btn']);
// 5 切到扣分：點誰扣誰一分
await ev(() => { S.cheer = null; S.t.scoreMode = 'minus'; refresh(); });
await W(1500);
await ev(() => { bonus(5, -1); refresh(); });
await W(450); await shot(p, 'score-05.png', ['.score-top .seg, .score-top [role=group]', '.kid@4']);
// 6 全班 −1
await ev(() => { classBonus(-1); refresh(); });
await W(1300); await shot(p, 'score-06.png', ['.score-top .class-btn']);
// 7 上一步
await ev(() => { S.cheer = null; undoScore(); S.t.scoreMode = 'plus'; refresh(); });
await W(1500); await shot(p, 'score-07.png', ['.score-top .x-btn@0']);
// 8 工具箱的隨機抽籤
await ev(() => { S.t.pop = 'lottery'; S.lot = { seat: 17, rolling: false, plus: 0, fx: 0 }; refresh(); });
await W(800); await shot(p, 'score-08.png', ['.lot-pop']);
await close();
