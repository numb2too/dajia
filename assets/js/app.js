/**
 * @fileoverview App 入口模組：應用程式初始化和資料流程控制。
 * @module app
 */

import { fetchJsonData } from './api.js';
import { renderFoodList } from './render.js';

/**
 * 初始化應用程式，執行資料載入和頁面渲染。
 */
async function initializeApp() {
    // 獲取目標 DOM 容器
    const foodContainer = document.getElementById('food-list-container');
    if (!foodContainer) {
        console.error("找不到目標 DOM 元素 #food-list-container，無法渲染美食清單。");
        return;
    }

    try {
        // 步驟 1: 呼叫 api.js 讀取資料
        // 由於 foods.json 是在本目錄下的資料，路徑使用相對路徑。
        const foodsData = await fetchJsonData('./data/foods.json');

        // 檢查資料結構，確保它是一個包含 'foods' 屬性的物件
        const foodsArray = foodsData && foodsData.foods ? foodsData.foods : [];

        // 步驟 2: 呼叫 render.js 渲染資料
        const renderedHtml = renderFoodList(foodsArray);

        // 步驟 3: 將渲染的 HTML 注入到目標容器
        foodContainer.innerHTML = renderedHtml;

    } catch (error) {
        // 處理任何在資料讀取或渲染過程中的錯誤
        foodContainer.innerHTML = `<div class="error-message">
            <h2 style="color: red;">❌ 載入美食資訊失敗</h2>
            <p>${error.message}</p>
            <p>請檢查資料路徑 ${error.message.includes('foods.json') ? 'data/foods.json' : ''} 和檔案內容。</p>
        </div>`;
        console.error("應用程式初始化失敗：", error);
    }
}

// 網頁加載完成後執行初始化
document.addEventListener('DOMContentLoaded', initializeApp);
