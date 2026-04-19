/**
 * @fileoverview App 入口模組：應用程式初始化和資料流程控制。
 * @module app
 */

import { fetchJsonData } from './api.js';
import { renderFoodList } from './render.js';
import { API_ENDPOINTS } from './config.js';

/**
 * 初始化應用程式，執行資料載入和頁面渲染。
 *
 * @returns {Promise<void>}
 */
async function initializeApp() {
    // 獲取目標 DOM 容器
    const foodContainer = document.getElementById('food-list-container');
    if (!foodContainer) {
        console.error("找不到目標 DOM 元素 #food-list-container，無法渲染美食清單。");
        return;
    }

    try {
        // 步驟 1: 呼叫 api.js 讀取資料，並使用 config.js 提供的路徑。
        const foodsData = await fetchJsonData(API_ENDPOINTS.foods);

        // 檢查資料結構，確保它是一個包含 'foods' 屬性的物件
        const foodsArray = foodsData?.foods || [];

        // 步驟 2: 呼叫 render.js 渲染資料
        const renderedHtml = renderFoodList(foodsArray);

        // 步驟 3: 將渲染的 HTML 注入到目標容器
        // ⚠️ 安全注意: 該環節仍為潛在的 XSS 點。
        // 為了加強健壯性，我們在錯誤處理階段新增了 DOM 元素管理。
        foodContainer.innerHTML = renderedHtml;

    } catch (error) {
        // 處理錯誤：只顯示使用者友善的訊息，不暴露技術細節，防止資訊洩漏。

        // 確保一個錯誤提示容器的存在，避免直接修改內容結構。
        let errorContainer = document.querySelector('.error-message');
        if (!errorContainer) {
            errorContainer = document.createElement('div');
            errorContainer.className = 'error-message';
            foodContainer.parentNode.insertBefore(errorContainer, foodContainer);
        }

        errorContainer.innerHTML = `
            <h2 style="color: red;">❌ 載入美食資訊失敗</h2>
            <p>請檢查網頁的控制台 (Console) 以獲取更多錯誤資訊，或聯繫管理員。</p>
        `;

        console.error("應用程式初始化失敗：", error);
    }
}

// 網頁加載完成後執行初始化
document.addEventListener('DOMContentLoaded', initializeApp);