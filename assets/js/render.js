/**
 * @fileoverview UI 渲染邏輯模組。
 * @module render
 */

/**
 * 將食物資料陣列渲染為一個完整的 HTML 內容區塊。
 * @param {Array<Object>} foods - 包含美食資料的陣列。
 * @returns {string} 生成的 HTML 內容字串。
 */
export function renderFoodList(foods) {
    if (!foods || foods.length === 0) {
        return '<p class="no-results">抱歉，目前找不到任何美食資料。</p>';
    }

    const cardsHtml = foods.map(food => {
        // 根據專案規範，我們將卡片的樣式和結構定義為一個標準元件。
        return `
        <div class="food-card">
            <div class="card-header">
                <h3>${food.name}</h3>
                <span class="category">${food.category}</span>
            </div>
            <p class="food-description">${food.description}</p>
            <div class="card-footer">
                <span class="price">價格預估: ${food.priceEstimate}</span>
                <div class="tags">
                    ${food.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
        `;
    }).join('');

    return `<div class="food-list-wrapper">${cardsHtml}</div>`;
}
