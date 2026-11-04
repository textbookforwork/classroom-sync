// 後台｜帳號管理：學校、老師、學生（Figma BE 頁 141:576，區塊 145:4）
// 輸出 out/admin-01.png …，依序填進區塊裡的圖框
import { open, shot } from './common.mjs';
const { p, ev, close } = await open();
const W = (ms = 600) => p.waitForTimeout(ms);
const dev = () => p.locator('.dev').first();
await ev(() => { S.view = 'admin'; S.guide = false; S.admin.shelfTab = 'accounts'; S.admin.tab = 'schools'; refresh(); });
await W(800);
// 1 新增學校：類型放第一個
await ev(() => { S.admin.modal = { school: { name: SCHOOL, type: '學校', stage: '國小' } }; refresh(); });
await W(); await shot(p, 'admin-01.png', ['.dialog']);
// 2 類型選測試推廣：標題和名稱欄跟著變、沒有學制
await ev(() => { S.admin.modal = { school: { name: '', type: '測試推廣', stage: '不限' } }; refresh(); });
await W(); await shot(p, 'admin-02.png', ['.dialog']);
// 3 學校表＋列的「⋯」
await ev(() => { S.admin.modal = null; makeSchool(); refresh(); });
await W(); await dev().locator('.tbl .dots').first().click(); await W(300); await ev(() => { S.admin.rowUp = false; refresh(); }); await p.addStyleTag({ content: '.acc-list,.acc-list .sa-in,.acc-list > *{overflow:visible!important}' }); await W(300); // demo 的表格容器會把選單切掉（表格短時），拍照時放開
await shot(p, 'admin-03.png', ['.mini-menu']);
// 4 還有帳號時不能刪
await ev(() => { S.admin.rowMenu = null; const sc = S.admin.schools.find((x) => x.teachers > 0); S.admin.modal = { notice: { title: `還不能刪除 ${sc.name}`, body: `還有 ${sc.teachers} 位老師、${sc.students} 位學生。先刪除或轉走帳號，或改用「停用」。` } }; refresh(); });
await W(); await shot(p, 'admin-04.png', ['.dialog']);
// 5 新增老師
await ev(() => { S.admin.modal = null; S.admin.tab = 'teachers'; S.admin.modal = { teacher: { school: SCHOOL, email: 'fang@star.example', pw: genPw(), last: '方', first: '小明' } }; refresh(); });
await W(); await shot(p, 'admin-05.png', ['.dialog']);
// 6 編輯老師：任教班級膠囊
await ev(() => { S.admin.modal = null; makeTeacher(); make501(); S.admin.justMade = false; if (!S.t.classes.some((x) => x.c === '501')) S.t.classes.push({ c: '501', subj: '自然' }); const A = S.admin; const t = A.teachers.find((x) => x.me) || A.teachers[0]; A.modal = { editTeacher: t, d: { name: t.name, email: t.email, school: t.school, classes: teacherClasses(t), pw: null } }; refresh(); });
await W(); await shot(p, 'admin-06.png', ['.dialog']);
// 7 學生：新增學生 單筆
await ev(() => { const A = S.admin; A.modal = null; A.tab = 'students'; A.mode = 'single'; A.modal = { student: true }; A.justMade = false; refresh(); });
await W(); await shot(p, 'admin-07.png', ['.dialog .seg', '.dialog .form-grid']);
// 8 多筆：預覽帳號與密碼規則
await ev(() => { const A = S.admin; A.mode = 'multi'; A.draft.pw = 'star501'; refresh(); });
await W(); await shot(p, 'admin-08.png', ['.preview-line']);
// 9 建好後：已建立＋下載帳密清單，「建立 N 個帳號」變灰
await ev(() => { S.admin.justMade = true; refresh(); });
await W(); await shot(p, 'admin-09.png', ['.done-card', 'txt=建立 30 個帳號']);
// 10 Excel 匯入
await ev(() => { S.admin.justMade = false; S.admin.mode = 'excel'; refresh(); });
await W(); await shot(p, 'admin-10.png', ['.drop', 'txt=下載範本']);
// 11 學生表格的搜尋：比對學校、班級（或「未分班」）、姓名、帳號，打一部分也找得到，英文不分大小寫
await ev(() => { S.admin.modal = null; S.removed = [7]; S.admin.filter = '全部'; S.admin.q.students = 'XG5011'; refresh(); });
await W(); await shot(p, 'admin-11.png', ['.acc-bar .search']);
// 12 搜尋「未分班」：被老師移出班級的學生
await ev(() => { S.admin.q.students = '未分班'; refresh(); });
await W(); await shot(p, 'admin-12.png', ['.acc .tbl tbody tr@0']);
// 13 搜尋找不到
await ev(() => { S.admin.q.students = '王小美'; refresh(); });
await W(); await shot(p, 'admin-13.png', ['.acc-list']);
await close();
