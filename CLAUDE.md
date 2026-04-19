# Project: 大甲美食查詢網站

## Stack
- 純靜態網站：HTML + CSS + JavaScript (ES Modules)
- 資料來源：JSON 檔案（本地載入，無後端）
- 部署：GitHub Pages

## Package Management
- 無套件管理器，不要引入 npm / node_modules
- 外部 library 只透過 CDN 引入（如需要）
- 不要使用任何需要 build step 的框架（React、Vue、Vite 等）

## Commands
- 本地預覽：用 VS Code Live Server 或 `python -m http.server 8080`
- 部署：push 到 main branch，GitHub Pages 自動更新
- 資料更新：直接編輯 data/*.json
- 使用 READ 工具讀取 並使用 write 工具修改檔案

## Project Structure
/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── app.js          # 入口初始化
│   │   ├── api.js         # 資料讀取 / fetch
│   │   ├── render.js      # UI 渲染邏輯（建議拆出來）
│   │   └── utils.js       # 共用工具函式
│   └── images/            # 靜態圖片資源
│
├── data/
│   ├── foods.json
│   ├── restaurants.json
│
├── components/            # ❗建議新增（原本你寫的「HTML片段」應該在這）
│   ├── card.html
│   ├── modal.html
│
└── README.md

## DO NOT
- 不要使用 localStorage 儲存資料（用 JSON 作為唯一資料來源）
- 不要引入需要編譯的框架
- 不要用 document.write()
- 不要在 JS 裡寫 inline CSS，樣式統一在 css/ 管理
- 不要把多個功能塞進同一個 .js 檔