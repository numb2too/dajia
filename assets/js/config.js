// config.js
/**
 * @fileoverview 應用程式所有硬編碼的靜態配置和 API 端點集合。
 * @module config
 */

/**
 * 儲存所有 API 相關的靜態端點。
 * 建議將此對象擴展以包含其他靜態資源的路徑。
 * @type {Record<string, string>}
 */
export const API_ENDPOINTS = {
  /**
   * 食物資料的 API 路徑。
   * @type {string}
   */
  foods: './data/foods.json',

  /**
   * 餐廳資料的 API 路徑。
   * @type {string}
   */
  restaurants: './data/restaurant.json'
}