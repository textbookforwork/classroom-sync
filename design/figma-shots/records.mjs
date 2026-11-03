// 我的班級｜學習紀錄（Figma BE 頁 141:576，區塊 145:216）
// 輸出 out/records-01.png …，依序填進區塊裡的圖框
import { open, shot } from './common.mjs';
const { p, ev, close } = await open();
const W = (ms = 600) => p.waitForTimeout(ms);
await ev(() => { S.guide = false; S.view = 'teacher'; ensureTeacher(); S.t.screen = 'shelf'; S.t.shelfTab = 'classes'; openClass('501', '自然', 'records'); refresh(); });
await W(1000);
// 1 學習紀錄：兩張卡
await shot(p, 'records-01.png', ['.rec-cards']);
// 2 加分紀錄列表
await ev(() => { S.t.classView.rec = { view: 'sessions' }; refresh(); });
await W(); await shot(p, 'records-02.png', ['.rec-row.total']);
// 3 改名
await ev(() => { S.t.classView.rec = { view: 'sessions', edit: S.sessions[1].id }; refresh(); });
await W(); await shot(p, 'records-03.png', ['.rec-row@2']);
// 4 一堂課
await ev(() => { S.t.classView.rec = { view: 'session', id: S.sessions[0].id, sort: 'seat' }; refresh(); });
await W(); await shot(p, 'records-04.png', ['.rec-sum', '.rec-h .seg']);
// 5 累計總分，點一位學生，右邊滑出每次上課的分數
await ev(() => { S.t.classView.rec = { view: 'total', person: 12 }; refresh(); });
await W(800); await shot(p, 'records-05.png', ['.rec-sum', '.side-panel']);
// 6 任務紀錄
await ev(() => { S.t.classView.rec = { view: 'tasks' }; refresh(); });
await W(); await shot(p, 'records-06.png', ['.tbl']);
// 7 一題結果（選擇題），不能再加分
await ev(() => { S.t.classView.rec = { view: 'task', id: S.taskLog.find((t) => t.type === 'choice' && !t.q).id }; refresh(); });
await W(800); await shot(p, 'records-07.png', ['txt=補上題目']);
// 8 補題目
await ev(() => { S.t.classView.rec.editQ = true; refresh(); });
await W(); await shot(p, 'records-08.png', ['.q-edit']);
// 9 手寫題結果：回傳人數、沒交名單、每一份作答
await ev(() => { S.t.classView.rec = { view: 'task', id: S.taskLog.find((t) => t.type === 'shot').id }; refresh(); });
await W(800); await shot(p, 'records-09.png', ['.rec-sum', '.miss-line']);
await close();
