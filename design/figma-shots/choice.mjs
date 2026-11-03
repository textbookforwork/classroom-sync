// 派任務｜選擇題、是非題（Figma BE 頁 141:576，區塊 145:135）
// 輸出 out/choice-01.png …，依序填進區塊裡的圖框（be-7-1 … be-7-9 沿用原節點，之後加的接在後面）
// 用法：node choice.mjs
import { open, shot } from './common.mjs';
const { p, ev, close } = await open();
const W = (ms = 600) => p.waitForTimeout(ms);
const dev = () => p.locator('.dev').first();

// 已在上課中，全班加入
await ev(() => { goChapter(5); S.guide = false; S.view = 'teacher'; ensureLive(); S.t.pop = null; refresh(); });
await W(1200);
// 1 老師按上課膠囊「派任務」→ 選題型
await ev(() => { S.t.pop = 'task'; S.task = null; S.compose = null; refresh(); });
await W();
await shot(p, 'choice-01.png', ['.class-bar .cb-task', '.type-card@0']);
// 2 選擇題設定：選項數、時限，題目和選項文字按了才展開
await ev(() => { S.compose = 'choice'; S.draft = { q: '', showQ: false, showOpt: false, n: 4, opts: ['', '', '', '', '', ''], bg: 'page' }; refresh(); });
await W();
await shot(p, 'choice-02.png', ['.compose .pop-b']);
// 3 派出（沒時限）→ 學生端直接跳出作答視窗
await ev(() => { sendTask('choice', { n: 4 }); S.view = 'student'; refresh(); });
await W(800);
await dev().locator('.abtn').nth(1).click();
await W(300);
await shot(p, 'choice-03.png', ['.abtns', '.ans-dlg .dialog-foot .btn']);
// 4 送出後，結束作答前還能改：選別的，按「改成這個」
await dev().locator('.ans-dlg .dialog-foot .btn').click();
await W(400);
await dev().locator('.abtn').nth(2).click();
await W(300);
await shot(p, 'choice-04.png', ['.ans-dlg .dialog-foot .btn']);
await ev(() => { S.s.modal = null; refresh(); });
// 5 老師作答中（沒時限）：圓環是作答進度、已過時間，下面座號點點
await ev(() => { S.view = 'teacher'; S.t.pop = 'task'; refresh(); });
await W(4000);
await shot(p, 'choice-05.png', ['.col-ring', '.seat-dots']);
// 6 有時限：圓環是剩下的時間，−／＋ 一分鐘；剩 10 秒變紅
await ev(() => { sendTask('choice', { n: 4, limit: 120 }); S.task.answers[12] = 'B'; refresh(); });
await W(2500);
await ev(() => { S.timer.endAt = Date.now() + 9000; refresh(); });
await W(800);
await shot(p, 'choice-06.png', ['.cr-tm']);
// 7 關掉彈窗回到課本：左上角釘著同一個倒數
await ev(() => { S.timer.endAt = Date.now() + 95000; S.t.pop = null; refresh(); });
await W(800);
await shot(p, 'choice-07.png', ['.timer-pop.pinned']);
// 8 結束作答 → 點正確選項就公布
await ev(() => { S.t.pop = 'task'; closeAnswer(); refresh(); });
await W(800);
await shot(p, 'choice-08.png', ['.pick-opts']);
// 9 公布答案：上半長條圖（%），下半答對／答錯／沒作答名單與整組加分
await ev(() => { reveal('B'); refresh(); });
await W(1000);
await shot(p, 'choice-09.png', ['.ch-half .bars', '.rv-head']);
// 10 按「答對 +1」：座號圈換成形狀夥伴，右上角徽章是這一題給的分
await ev(() => { const t = S.task; const seats = present().map((x) => x.seat).filter((x) => t.answers[x] === t.correct); plusGroup(t, 'right', seats, 1); refresh(); });
await W(1500);
await shot(p, 'choice-10.png', ['.who-chose']);
// 11 學生端：答對了（夥伴開心）
await ev(() => { S.view = 'student'; S.s.modal = 'result'; S.task.answers[12] = 'B'; refresh(); });
await W(1200);
await shot(p, 'choice-11.png', ['.result']);
// 12 學生端：答錯了（夥伴安慰，加「你選 C」）
await ev(() => { S.task.answers[12] = 'C'; refresh(); });
await W(1200);
await shot(p, 'choice-12.png', ['.result']);
// 13 是非題：選題型選「是非題」，學生端是 O／X 兩個大按鈕，其餘流程同選擇題
await ev(() => { S.s.modal = null; sendTask('choice', { tf: true }); S.view = 'student'; S.s.modal = 'choice'; refresh(); });
await W(800);
await shot(p, 'choice-13.png', ['.abtns']);
await close();
