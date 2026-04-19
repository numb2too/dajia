/**
 * @fileoverview API 模組：負責讀取本地資料 JSON。
 * @module api
 */

/**
 * 從本地 JSON 檔案讀取資料。
 * @param {string} filePath - 包含資料的 JSON 檔案路徑。
 * @returns {Promise<Object>} 解析後的 JSON 資料物件。
 */
export async function fetchJsonData(filePath) {
    console.log(`[API] 正在載入資料：${filePath}`);
    try {
        // 由於是純靜態網站，我們假設透過 fetch 讀取本地檔案是可行的。
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`無法載入資料：狀態 ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("[API] 載入資料失敗:", error);
        // 為了確保前端不會崩潰，返回空結構或拋出可捕獲的錯誤
        throw new Error("資料載入失敗，請檢查路徑和檔案內容。");
    }
}
