## 師生同步網站

課堂模式 demo 的網站版。**畫面一律先改 `../課堂模式demo/classroom-demo.html`**（Artifact 那份），確認好再用 `scripts/from-artifact.py` 轉過來；`src/` 不要手改，下次轉換會蓋掉。

- 線上：https://textbookforwork.github.io/classroom-sync/
  - `#/teacher`、`#/student`、`#/admin`：單一角色；同一台電腦開多個視窗會互相同步
  - 其他網址：三端並排加流程導覽
  - 網址加 `?feedback`：出現 Agentation 標註工具
- 上線：`python3 scripts/from-artifact.py && npm run deploy -- "這次改了什麼"`，看到「已上線」才算完成
- 轉換時自動做：換假資料、加三個入口、視窗同步、Agentation
- repo 是公開的（GitHub Pages），**資料一律假的**：學校、信箱、出版社都不能用真的
