// 書櫃｜我的班級（Figma BE 頁 141:576，區塊 145:29）
// 輸出 out/classes-01.png …，依序填進區塊裡的圖框
import { open, shot } from './common.mjs';
const { p, ev, close } = await open();
const W = (ms = 600) => p.waitForTimeout(ms);
const dev = () => p.locator('.dev').first();
await ev(() => { S.guide = false; makeSchool(); makeTeacher(); make501(); S.admin.justMade = false; S.view = 'teacher'; S.t.screen = 'shelf'; S.t.shelfTab = 'classes'; S.t.classView = null; S.t.classes = []; refresh(); });
await W(800);
// 1 班級星艦：還沒有班級
await shot(p, 'classes-01.png', ['.nav button@1', '.empty-state']);
// 2 新增班級
await ev(() => { S.t.modal = 'join'; S.t.joinDraft = { c: '501', subj: '自然' }; refresh(); });
await W(); await shot(p, 'classes-02.png', ['.dialog']);
// 3 班級卡（加一張別科），「⋯ → 退出班級」
await ev(() => { S.t.modal = null; joinClass('501', '自然'); S.t.classView = null; S.t.classes.push({ c: '501', subj: '數學' }); refresh(); });
await W(); await dev().locator('.class-card .dots').nth(1).click(); await W(400);
await shot(p, 'classes-03.png', ['.class-card@0', '.mini-menu']);
// 4 班級頁：學生分頁，列的「⋯」
await ev(() => { S.t.cardMenu = null; openClass('501', '自然'); S.t.classView.menu = 3; refresh(); });
await W(); await shot(p, 'classes-04.png', ['.ctabs', '.mini-menu']);
// 5 學生資料
await ev(() => { S.t.classView.menu = null; const s = STUDENTS[2]; S.t.modal = { edit: s.seat, d: { ...s } }; refresh(); });
await W(); await shot(p, 'classes-05.png', ['.dialog']);
// 6 移出班級
await ev(() => { S.t.modal = { remove: 3 }; refresh(); });
await W(); await shot(p, 'classes-06.png', ['.dialog']);
// 7 帳號小卡
await ev(() => { S.t.modal = { cards: '501' }; refresh(); });
await W(1000); await shot(p, 'classes-07.png', ['.acard@0', '.cards-dlg .dialog-foot']);
// 8 老師分頁
await ev(() => { S.t.modal = null; S.t.classView.tab = 'teachers'; refresh(); });
await W(); await shot(p, 'classes-08.png', ['.tbl']);
await close();
