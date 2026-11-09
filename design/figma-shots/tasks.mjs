// 派任務｜文字題、手寫題、聲音題（Figma BE 頁 141:576，區塊 145:168）
// 輸出 out/tasks-01.png …，依序填進區塊裡的圖框
import { open, shot } from './common.mjs';
const { p, ev, close } = await open();
const W = (ms = 600) => p.waitForTimeout(ms);
const dev = () => p.locator('.dev').first();
await ev(() => { goChapter(5); S.guide = false; S.view = 'teacher'; ensureLive(); S.t.pop = null; refresh(); });
await W(1000);
// 文字題 1 設定
await ev(() => { S.t.pop = 'task'; S.task = null; S.compose = 'text'; S.draft = { q: '', showQ: true, showOpt: false, n: 4, opts: ['', '', '', '', '', ''], bg: 'page' }; refresh(); });
await W(); await dev().locator('#task-q').fill('怎麼找到北極星？'); await W(300);
await shot(p, 'tasks-01.png', ['.compose .pop-b']);
// 2 學生打字回答
await ev(() => { sendTask('text', { q: '怎麼找到北極星？' }); S.view = 'student'; refresh(); });
await W(800); await dev().locator('.dialog textarea, .dialog .text-big').first().fill('先找到北斗七星，把勺口兩顆星連起來，往外延長五倍就是北極星。'); await W(300);
await shot(p, 'tasks-02.png', ['.dialog']);
// 3 結束作答後檢討：一人一張卡
await ev(() => { submitText('先找到北斗七星，把勺口兩顆星連起來，往外延長五倍就是北極星。'); S.s.modal = null; const t = S.task; present().map((x) => x.seat).filter((x) => S.cls.joined.includes(x) && !NO_SUBMIT.includes(x) && x !== ME).forEach((x, i) => { t.texts[x] = TEXT_POOL[i % TEXT_POOL.length]; }); stopTask(); S.view = 'teacher'; S.t.pop = 'task'; refresh(); });
await W(1000); await shot(p, 'tasks-03.png', ['.rv-head', '.tcard@0']);
// 4 放大看單份：下方一列
await ev(() => { S.task.view = ME; refresh(); });
await W(800); await shot(p, 'tasks-04.png', ['.detail-top']);
// 5 分享畫面：學生端整個蓋上這份作品
await ev(() => { share(ME); S.view = 'student'; refresh(); });
await W(1000); await shot(p, 'tasks-05.png', ['.shared-view .h']);
// 手寫題 6 設定：寫在課本或紙上
await ev(() => { unshare(); S.task.view = null; endTask(); S.view = 'teacher'; S.compose = 'shot'; S.draft = { q: '', showQ: false, showOpt: false, n: 4, opts: ['', '', '', '', '', ''], bg: 'page' }; S.t.pop = 'task'; refresh(); });
await W(800); await shot(p, 'tasks-06.png', ['.paper-seg']);
// 7 學生直接在課本上畫（原本這頁已有自己的畫記）
await ev(() => { S.s.ink[PAGES[S.t.page].id].push({ c: '#F0FF62', w: 18, hl: true, pts: [[40, 175], [520, 175]] }); sendTask('shot', {}); S.view = 'student'; autoAnswer(); refresh(); });
await W(1000); await shot(p, 'tasks-07.png', ['.taskbar']);
// 8 送出畫面 → 預覽：交出的是整頁截圖（含原本的畫記）
await ev(() => { S.s.modal = 'submit'; S.s.tool = null; refresh(); });
await W(800); await shot(p, 'tasks-08.png', ['.dialog']);
// 9 檢討：座號圈＋名字＋「看作品」膠囊（跟聲音題同一套）
await ev(() => { submit(); const t = S.task; present().map((x) => x.seat).filter((x) => S.cls.joined.includes(x) && !NO_SUBMIT.includes(x) && x !== ME).forEach((x) => { t.subs[x] = { ink: genInk(x, t.page), notes: [], at: Date.now() }; }); stopTask(); S.view = 'teacher'; S.t.pop = 'task'; refresh(); });
await W(1000); await shot(p, 'tasks-09.png', ['.rv-body']);
// 10 放大看單份：批註工具在右下角，下方一列
await ev(() => { openDetail(ME); S.task.subs[ME].notes.push({ c: COLORS.note, w: 4, pts: [[600, 60], [700, 40], [790, 70]] }); refresh(); });
await W(1000); await shot(p, 'tasks-10.png', ['.dt-tools', '.detail-top']);
// 11 學生收到回饋
await ev(() => { S.task.view = null; S.view = 'student'; S.s.modal = 'feedback'; refresh(); });
await W(900); await shot(p, 'tasks-11.png', ['.dialog']);
// 12 手寫題寫在紙上：紙蓋住課本，左上「看課本 p.N」
await ev(() => { S.s.modal = null; endTask(); sendTask('shot', { bg: 'grid', withPage: true }); S.view = 'student'; refresh(); });
await W(1000); await shot(p, 'tasks-12.png', ['txt=看課本']);
// 聲音題 13 學生錄音
await ev(() => { endTask(); sendTask('voice', {}); S.view = 'student'; refresh(); });
await W(1000); await shot(p, 'tasks-13.png', ['.dialog']);
// 14 檢討：一格一位，點播放鍵聽；拍「有一位正在播放」（2026-11-05 D 版：播放中那一格框起來、膠囊裡跑進度）。對應 be-8-14(321:35)
await ev(() => { submitVoice(9); const t = S.task; present().map((x) => x.seat).filter((x) => S.cls.joined.includes(x) && !NO_SUBMIT.includes(x) && x !== ME).forEach((x) => { t.voices[x] = { sec: 4 + (x % 13), at: Date.now() }; }); stopTask(); S.view = 'teacher'; S.t.pop = 'task'; refresh(); });
await W(1000); await dev().locator('.vs[data-seat="2"] .vs-pl').click(); await W(1800);
// 播放中那一格自己有橄欖綠框，橘框往外多留一點，不要壓在綠框上
const onBox = await ev(() => { const dev = document.querySelector('.dev'); const d = dev.getBoundingClientRect(); const k = d.width / 1440; const b = dev.querySelector('.vs.on').getBoundingClientRect(); const g = 6; /* 綠框是 ::before，inset: -10px 6px -13px */ return { x: (b.left - d.left) / k + 6 - g, y: (b.top - d.top) / k - 10 - g, w: b.width / k - 12 + g * 2, h: b.height / k + 23 + g * 2 }; });
await shot(p, 'tasks-14.png', [onBox]);
await ev(() => { if (S.playingVoice) playVoice(S.playingVoice); refresh(); }); // 停掉播放，免得影響下一張
// 15 沒作答：名字膠囊，整組 −1
await ev(() => { S.task.tab = 'none'; refresh(); });
await W(800); await shot(p, 'tasks-15.png', ['.rv-head']);
await close();
