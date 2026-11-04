// 閱讀｜工具樣式更新（Figma BE 頁 141:576，區塊 145:202）
// 輸出 out/tools-01.png …，依序填進區塊裡的圖框
import { open, shot } from './common.mjs';
const { p, ev, close } = await open();
const W = (ms = 600) => p.waitForTimeout(ms);
await ev(() => { goChapter(4); S.guide = false; S.view = 'teacher'; ensureLive(); S.t.pop = null; S.t.barOpen = false; refresh(); });
await W(1000);
// 1 畫筆：直式小窗（顏色、粗細）
await ev(() => { S.t.tool = 'pen'; S.t.inkPop = true; S.t.brush.pen.c = PEN_C[1]; S.t.brush.pen.w = 6; S.t.ink[PAGES[S.t.page].id].push({ c: PEN_C[1], w: 6, pts: [[120, 300], [180, 296], [260, 302], [330, 298]] }); refresh(); });
await W(); await shot(p, 'tools-01.png', ['.ink-pop']);
// 2 螢光筆
await ev(() => { S.t.ink[PAGES[S.t.page].id] = []; S.t.tool = 'highlighter'; S.t.inkPop = true; refresh(); });
await W(); await shot(p, 'tools-02.png', ['.ink-pop']);
// 3 雷射筆
await ev(() => { S.t.tool = 'laser'; S.t.inkPop = true; refresh(); });
await W(); await shot(p, 'tools-03.png', ['.ink-pop']);
// 4 便利貼
await ev(() => { S.t.tool = null; S.t.inkPop = false; S.t.ink[PAGES[S.t.page].id] = []; addNote(S.t, S.t.page); const ns = S.t.notes[PAGES[S.t.page].id]; ns[ns.length - 1].text = '下課前提醒大家看北斗七星'; refresh(); });
await W(); await shot(p, 'tools-04.png', ['.note']);
// 5 貼紙
await ev(() => { S.t.editNote = null; S.t.stickerPop = true; S.t.tool = 'sticker'; S.t.stickers[PAGES[S.t.page].id].push({ id: uid(), x: 720, y: 120, e: 'star' }); refresh(); });
await W(); await shot(p, 'tools-05.png', ['.pop']);
// 6 電子白板：英文四線格
await ev(() => { S.t.stickerPop = false; S.t.tool = null; S.t.notes[PAGES[S.t.page].id] = []; S.t.stickers[PAGES[S.t.page].id] = []; openBoard(S.t); S.t.board.bg = 'en'; refresh(); });
await W(); await shot(p, 'tools-06.png', ['.bd-bgs']);
// 7 分組
await ev(() => { S.t.board.open = false; S.t.tool = null; S.t.inkPop = false; S.t.pop = 'group'; S.t.grp = { total: String(S.cls.joined.length), by: 'groups', n: '5', busy: false, res: null }; makeGroups(S.t.grp); refresh(); });
await W(1800); await shot(p, 'tools-07.png', ['.gcards']);
// 8 目次
await ev(() => { S.t.pop = 'toc'; refresh(); });
await W(); await shot(p, 'tools-08.png', ['.toc-tabs']);
// 9 工具箱四組；左欄可以拿掉的工具出現 ×
await ev(() => { S.t.pop = 'toolbox'; refresh(); });
await W(); await shot(p, 'tools-09.png', ['.tb-pop', '.rail']);
// 10 學生的工具箱：學習工具只有電子白板
await ev(() => { S.t.pop = null; S.view = 'student'; S.s.pop = 'toolbox'; refresh(); });
await W(); await shot(p, 'tools-10.png', ['.tb-pop']);
await close();
