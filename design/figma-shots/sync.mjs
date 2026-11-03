// 師生連動｜開始上課與師生同步（Figma BE 頁 141:576，區塊 145:76）
// 輸出 out/sync-01.png … 依序填進區塊裡的圖框（be-5-1 … be-5-10 沿用原節點，之後加的圖框接在後面）
// 用法：node sync.mjs
import { open, shot } from './common.mjs';
const { p, ev, close } = await open();
const W = (ms = 600) => p.waitForTimeout(ms);

// 先把第一章的帳號、班級建好，老師打開課本（還沒上課）
await ev(() => { goChapter(2); S.guide = false; S.view = 'teacher'; S.t.shelfTab = 'hall'; S.t.classView = null; openBook(); if (S.s.screen === 'login') studentLogin(); if (S.s.screen === 'pick') finishPick(); S.s.screen = 'shelf'; refresh(); });
await W(1200);
// 1 老師端：左欄最下面「開始上課」
await shot(p, 'sync-01.png', ['.sync-tile']);
// 2 開始上課視窗
await ev(() => { S.t.modal = 'start'; S.t.draft = { ci: Math.max(0, S.t.classes.findIndex((x) => x.c === '501')), mode: 'free' }; refresh(); });
await W();
await shot(p, 'sync-02.png', ['.dialog']);
// 3 開課後：上課膠囊＋名單，學生陸續加入（拍在還沒全部加入的時候）
await ev(() => { S.t.modal = null; startClass({ cid: '501', subj: '自然', mode: 'free' }); S.t.pop = 'roster'; refresh(); });
await W(1300);
await shot(p, 'sync-03.png', ['.class-bar', '.score-pop .att-line']);
// 4 學生端：老師開始上課了
await ev(() => { S.view = 'student'; S.s.invite = true; refresh(); });
await W(800);
await shot(p, 'sync-04.png', ['.invite-dlg']);
// 5 學生加入、跟隨老師：左欄最下面藍色頁數
await ev(() => { joinStudent(); refresh(); });
await W(800);
await shot(p, 'sync-05.png', ['.spill']);
// 6 老師按「鎖定」
await ev(() => { S.view = 'teacher'; S.t.pop = null; setMode('lock'); refresh(); });
await W(800);
await shot(p, 'sync-06.png', ['.class-bar .cb-lock@1']);
// 7 學生被鎖定：頁數變鎖頭、點課本跳提示
await ev(() => { S.view = 'student'; refresh(); });
await W(600);
await ev(() => { toast('student', '老師鎖定了螢幕', 'lock'); refresh(); });
await W(300);
await shot(p, 'sync-07.png', ['.spill', '.toasts .toast'], { keepToasts: true });
// 8 老師（鎖定中）打開補充資源 → 9 學生同步打開同一張
await ev(() => { S.view = 'teacher'; S.t.page = 0; S.t.pop = 'supp'; S.t.suppScope = 'page'; refresh(); });
await W(1000);
await shot(p, 'sync-08.png', ['txt=把星星連起來：獵戶座']);
await ev(() => { openSupp('teacher', suppById('orion')); S.view = 'student'; refresh(); });
await W(800);
await shot(p, 'sync-09.png', ['.supp-view .pop-h']);
// 10 老師點一段聚焦 → 11 再點一句 → 12 學生同步
await ev(() => { closeSupp('teacher'); S.t.pop = null; setMode('free'); S.view = 'teacher'; S.t.tool = null; S.focus = { page: S.t.page, blk: 'p1', sn: null, mark: false }; S.flags.focusSent = true; refresh(); });
await W(800);
await shot(p, 'sync-10.png', ['p.fb.on']);
await ev(() => { S.focus = { ...S.focus, sn: 1, mark: true }; refresh(); });
await W(800);
await shot(p, 'sync-11.png', ['.sn.on']);
await ev(() => { S.view = 'student'; if (!S.s.follow) setFollow(true); refresh(); });
await W(800);
await shot(p, 'sync-12.png', ['.sn.on']);
// 13 學生字調大，老師點最下面那段 → 學生畫面自動捲過去
await ev(() => { S.s.rs = { ...(S.s.rs || DEFAULT_RS), fs: 32, lh: 2 }; S.focus = { page: 0, blk: 'p2', sn: null, mark: false }; refresh(); });
await W(1800);
await shot(p, 'sync-13.png', ['[data-blk=p2]']);
// 14 學生取消跟隨：自己翻頁，頁數上方多一顆老師頭像
await ev(() => { S.s.rs = null; S.focus = null; setFollow(false); refresh(); });
await W(800);
await shot(p, 'sync-14.png', ['.sfollow']);
// 15 老師上課中按回首頁：要下課嗎？
await ev(() => { S.view = 'teacher'; S.t.modal = 'leave'; refresh(); });
await W(800);
await shot(p, 'sync-15.png', ['.dialog']);
// 16 老師按「下課」 → 17 學生整頁換成下課畫面
await ev(() => { S.t.modal = null; refresh(); });
await W(500);
await shot(p, 'sync-16.png', ['.class-bar .btn.sec']);
await ev(() => { endClass(); S.view = 'student'; refresh(); });
await W(1500);
await shot(p, 'sync-17.png', []);
await close();
