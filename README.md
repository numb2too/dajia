# 大甲美食查詢網站 (Dajia Gourmet Finder)

這是一個基於前端網頁的餐點展示系統，用於從本地 JSON 資料源讀取並展示美食資訊。

## 🚀 專案概覽

本專案採用純靜態網站架構 (HTML + CSS + JavaScript)，並利用本地的 `data/*.json` 檔案作為唯一的資料來源。

### 📂 專案資料結構

```
.
├── index.html           # 應用程式主頁面
├── assets/
│   ├── css/
│   │   └── style.css    # 核心樣式表
│   └── images/          # 靜態圖片資源
├── js/
│   ├── main.js          # 應用程式入口與主要邏輯
│   └── components/      # 可重複使用的組件邏輯
├── data/
│   ├── foods.json       # 食物資料來源 (JSON)
│   └── restaurants.json # 餐廳資料來源 (JSON)
└── README.md            # 專案說明文件
```

## ✨ 主要功能點

1.  **資料展示層**: 負責從 `js/main.js` 讀取並結構化渲染來自 `data/*.json` 的美食資料到 `index.html` 指定的區域。
2.  **樣式控制**: 所有頁面介面美化統一透過 `assets/css/style.css` 管理。
3.  **核心邏輯**: `js/main.js` 負責整個應用程式的數據初始化、組件載入與狀態管理。

## 🛠️ 開發與修改指南

*   **新增功能**: 請在 `js/components/` 目錄下建立新的組件文件。
*   **修改資料**: 請直接編輯 `data/*.json` 中的 JSON 檔案，作為唯一的資料來源。
*   **樣式調整**: 所有樣式調整請修改 `assets/css/style.css`。

## 🚦 運行與部署

### 本地預覽

1.  確保所有檔案和資料結構正確。
2.  在終端機中導航到專案根目錄。
3.  運行本地開發伺服器：
    ```bash
    live-server
    # 或
    python -m http.server 8080
    ```
4.  在瀏覽器中打開 `index.html` 即可查看運行結果。

### 部署流程

*   將程式碼提交到 `main` 分支並推送到 GitHub。
*   GitHub Pages 將自動偵測並更新網站內容。