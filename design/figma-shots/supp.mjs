// 工具｜補充資源索引（Figma BE 頁 141:576，區塊 147:2）
// 輸出 out/supp-01.png …，依序填進區塊裡的圖框
import { open, shot } from './common.mjs';
const { p, ev, close } = await open();
const W = (ms = 600) => p.waitForTimeout(ms);
const dev = () => p.locator('.dev').first();
await ev(() => { goChapter(2); S.guide = false; S.view = 'teacher'; openBook(); S.t.pop = null; refresh(); });
await W(1000);
// 1 左欄「補充資源」：素樸，不加框、不顯示數量
await shot(p, 'supp-01.png', ['txt=補充資源']);
// 2 這一頁：照課文順序分組，組名是掛的位置
await ev(() => { S.t.pop = 'supp'; S.t.suppScope = 'page'; refresh(); });
await W(800); await shot(p, 'supp-02.png', ['.supp-scope', '.supp-b']);
// 3 聲音直接在列上播放／暫停（第 5 頁）
await ev(() => { S.t.page = 1; S.t.playing = 'vega'; refresh(); });
await W(800); await shot(p, 'supp-03.png', ['.spl.on']);
// 4 範圍下拉：第 N 頁／本章
await ev(() => { S.t.playing = null; S.t.page = 0; refresh(); });
await W(400); await dev().locator('.supp-scope').click(); await W(400);
await shot(p, 'supp-04.png', ['.supp-menu']);
// 5 本章：依類別分頁籤，再依頁分組；目前這頁不能點
await dev().locator('.supp-menu button').first().click(); await W(600);
await shot(p, 'supp-05.png', ['.supp-tabs', '.pglink.here']);
// 6 點一項就打開
await ev(() => { S.t.suppScope = 'page'; openSupp('teacher', suppById('chart')); refresh(); });
await W(1000); await shot(p, 'supp-06.png', ['.supp-view .pop-h']);
await close();
