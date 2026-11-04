// 師生連動｜開始上課與師生同步 → 小流程「點課文打開補充資源」（Figma BE 頁 141:576，區塊 145:76）
// 2026-11-04 乙練選 A：段落尾巴記號＋聚焦後浮出資源膠囊；有底線的詞直接打開
// 輸出 out/res-01.png … res-04.png，依序對應區塊裡 be-5-res-1…4 的圖框
import { open, shot } from './common.mjs';
const { p, ev, close } = await open();
const W = (ms = 600) => p.waitForTimeout(ms);
await ev(() => { goChapter(2); S.guide = false; S.view = 'teacher'; S.t.shelfTab = 'hall'; S.t.classView = null; openBook(); if (S.s.screen === 'login') studentLogin(); if (S.s.screen === 'pick') finishPick(); S.s.screen = 'shelf'; refresh(); });
await W(1200);
await ev(() => { startClass({ cid: '501', subj: '自然', mode: 'free' }); S.t.pop = null; refresh(); });
await W(1300);
await ev(() => { joinStudent(); if (!S.s.follow) setFollow(true); setMode('lock'); S.view = 'teacher'; S.t.page = 0; S.t.pop = null; refresh(); });
await W(800);
// 1 老師點有記號的圖片 → 聚焦＋圖片的資源膠囊
await p.locator('.dev figure[data-blk=fig] figcaption').first().click();
await W(800);
await shot(p, 'res-01.png', ['figure.fb.on .res-mk', '.blk-cap']);
// 2 老師點圖片那塊膠囊的一項 → 打開圖片
// 改點圖片那塊（fig）的膠囊，打開圖片「把星星連起來：獵戶座」，縮圖才看得出打開了東西
await p.locator('.dev figure[data-blk=fig] .bc-it', { hasText: '獵戶座' }).first().click();
await W(1000);
await shot(p, 'res-02.png', ['.supp-view .pop-h']);
// 3 鎖定中，學生畫面同步打開
await ev(() => { S.view = 'student'; refresh(); });
await W(1000);
await shot(p, 'res-03.png', ['.supp-view .pop-h']);
// 4 老師點有底線的詞 → 直接打開，同時聚焦段落
await ev(() => { S.view = 'teacher'; closeSupp('teacher'); S.focus = null; refresh(); });
await W(800);
await p.locator('.dev .kw-res').first().click();
await W(1000);
await shot(p, 'res-04.png', ['.kw-res', '.supp-view .pop-h']);
await close();
