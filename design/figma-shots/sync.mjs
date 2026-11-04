// 師生連動｜開始上課與師生同步（Figma BE 頁 141:576，區塊 145:76）
// 2026-11-04 重排成四段小流程：開始上課 → 跟隨老師 → 鎖定螢幕 → 下課；老師做的事和學生看到的結果相鄰成一組
// 輸出 out/sync-01.png … sync-19.png，依序對應區塊裡 ①…⑲ 的圖框（圖框沿用原節點 be-5-x，多的接在後面）
// 2026-11-04 跟隨老師後面插入「點課文打開補充資源」（resource.mjs，畫面步驟 13–16），這支的 13–19 在 Figma 上顯示成 17–23；圖框 be-5-13…19 不變
// 用法：node sync.mjs
import { open, shot } from './common.mjs';
const { p, ev, close } = await open();
const W = (ms = 600) => p.waitForTimeout(ms);

// 先把第一章的帳號、班級建好，老師打開課本（還沒上課）
await ev(() => { goChapter(2); S.guide = false; S.view = 'teacher'; S.t.shelfTab = 'hall'; S.t.classView = null; openBook(); if (S.s.screen === 'login') studentLogin(); if (S.s.screen === 'pick') finishPick(); S.s.screen = 'shelf'; refresh(); });
await W(1200);
// ── 開始上課
// 1 老師：左欄最下面「開始上課」
await shot(p, 'sync-01.png', ['.sync-tile']);
// 2 老師：開始上課視窗
await ev(() => { S.t.modal = 'start'; S.t.draft = { ci: Math.max(0, S.t.classes.findIndex((x) => x.c === '501')), mode: 'free' }; refresh(); });
await W();
await shot(p, 'sync-02.png', ['.dialog']);
// 4 老師：開課後名單，學生陸續加入（先拍，還沒全部加入）
await ev(() => { S.t.modal = null; startClass({ cid: '501', subj: '自然', mode: 'free' }); S.t.pop = 'roster'; refresh(); });
await W(1300);
await shot(p, 'sync-04.png', ['.score-pop .att-line', '.class-bar .cb-cls']);
// 3 學生：老師開始上課了
await ev(() => { S.view = 'student'; S.s.invite = true; refresh(); });
await W(800);
await shot(p, 'sync-03.png', ['.invite-dlg']);
await ev(() => { joinStudent(); S.view = 'teacher'; S.t.pop = null; refresh(); });
await W(800);
// ── 跟隨老師
// 5 老師翻到第 5 頁 → 6 跟隨中的學生自動翻到第 5 頁
await ev(() => { S.t.page = 1; refresh(); });
await W(800);
await shot(p, 'sync-05.png', ['.sync-zone .pager']);
await ev(() => { S.view = 'student'; if (!S.s.follow) setFollow(true); refresh(); });
await W(800);
await shot(p, 'sync-06.png', ['.spill']);
// 7 老師點一段 → 8 學生同一段跟著亮起來
await ev(() => { S.view = 'teacher'; S.t.tool = null; S.focus = { page: 1, blk: 'p1', sn: null, mark: false }; S.flags.focusSent = true; refresh(); });
await W(800);
await shot(p, 'sync-07.png', ['p.fb.on']);
await ev(() => { S.view = 'student'; refresh(); });
await W(800);
await shot(p, 'sync-08.png', ['p.fb.on']);
// 9 老師在第 2 頁點最下面那段 → 10 字調大的學生畫面自動捲過去
await ev(() => { S.view = 'teacher'; S.t.page = 0; S.focus = { page: 0, blk: 'p2', sn: null, mark: false }; refresh(); });
await W(800);
await shot(p, 'sync-09.png', ['[data-blk=p2]']);
await ev(() => { S.view = 'student'; S.s.rs = { ...(S.s.rs || DEFAULT_RS), fs: 32, lh: 2 }; refresh(); });
await W(1800);
await shot(p, 'sync-10.png', ['[data-blk=p2]']);
// 11 學生自己翻頁 → 不跟隨，上方多一顆老師頭像
await ev(() => { S.s.rs = null; S.focus = null; setFollow(false); S.s.page = 1; refresh(); });
await W(800);
await shot(p, 'sync-11.png', ['.sfollow']);
// 12 學生按老師頭像 → 跟回老師這一頁
await ev(() => { setFollow(true); refresh(); });
await W(800);
await shot(p, 'sync-12.png', ['.spill']);
// ── 鎖定螢幕
// 13 老師按「鎖定」 → 14 學生被鎖定
await ev(() => { S.view = 'teacher'; setMode('lock'); refresh(); });
await W(800);
await shot(p, 'sync-13.png', ['.class-bar .cb-lock@1']);
await ev(() => { S.view = 'student'; refresh(); });
await W(600);
await ev(() => { toast('student', '老師鎖定了螢幕', 'lock'); refresh(); });
await W(300);
await shot(p, 'sync-14.png', ['.spill', '.toasts .toast'], { keepToasts: true });
// 15 老師（鎖定中）打開補充資源 → 16 學生同步打開同一則
await ev(() => { S.view = 'teacher'; S.t.page = 0; S.t.pop = 'supp'; S.t.suppScope = 'page'; refresh(); });
await W(1000);
await shot(p, 'sync-15.png', ['txt=把星星連起來：獵戶座']);
await ev(() => { openSupp('teacher', suppById('orion')); S.view = 'student'; refresh(); });
await W(800);
await shot(p, 'sync-16.png', ['.supp-view .pop-h']);
// ── 下課
// 19 老師上課中按回首頁：要下課嗎？（先拍，下課後就沒有了）
await ev(() => { closeSupp('teacher'); S.t.pop = null; setMode('free'); S.view = 'teacher'; S.t.modal = 'leave'; refresh(); });
await W(800);
await shot(p, 'sync-19.png', ['.dialog']);
// 17 老師按「下課」 → 18 學生整頁換成下課畫面
await ev(() => { S.t.modal = null; refresh(); });
await W(500);
await shot(p, 'sync-17.png', ['.class-bar .btn.sec']);
await ev(() => { endClass(); S.view = 'student'; refresh(); });
await W(1500);
await shot(p, 'sync-18.png', []);
await close();
