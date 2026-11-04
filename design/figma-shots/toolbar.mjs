// 我的班級｜老師設定學生：工具列與閱讀載具（Figma BE 頁 141:576，區塊 145:51）
// 輸出 out/toolbar-01.png …，依序填進區塊裡的圖框
import { open, shot } from './common.mjs';
const { p, ev, close } = await open();
const W = (ms = 600) => p.waitForTimeout(ms);
const dev = () => p.locator('.dev').first();
await ev(() => { S.guide = false; S.view = 'teacher'; ensureTeacher(); S.t.classes.push({ c: '502', subj: '自然' }); S.t.screen = 'shelf'; S.t.shelfTab = 'classes'; openClass('501', '自然', 'toolbar'); S.tbDraft = [...S.toolbar['501·自然']]; refresh(); });
await W(1000);
// 1 學生工具列分頁：預覽就是編輯器
await shot(p, 'toolbar-01.png', ['.tb2-note', '.tb2-screen .rail']);
// 2 最後一格＋ → 工具箱面板，點了就放進左欄
await ev(() => { S.tbOpen = true; refresh(); });
await W(); await shot(p, 'toolbar-02.png', ['.slot-box']);
// 3 加滿 6 個：沒有空位
await ev(() => { S.tbOpen = false; S.tbDraft.push('sticky'); refresh(); });
await W(); await shot(p, 'toolbar-03.png', ['.tb2-screen .rail']);
// 4 載具 16:9
await ev(() => { S.ratioDraft.r = '16:9'; refresh(); });
await W(800); await shot(p, 'toolbar-04.png', ['.tb2-h .seg@0']);
// 5 點預覽左下的同步鈕：切成「自己翻頁」的樣子
await ev(() => { S.ratioDraft.r = '4:3'; S.tbFollow = false; refresh(); });
await W(800); await shot(p, 'toolbar-05.png', ['.tb2-screen .sfollow']);
// 6 套用到其他班
await ev(() => { S.tbFollow = true; S.t.modal = 'apply'; refresh(); });
await W(); await shot(p, 'toolbar-06.png', ['.dialog']);
await close();
