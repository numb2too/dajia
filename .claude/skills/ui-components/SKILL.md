---
name: ui-components
description: 建立或修改頁面元件時使用，確保風格一致
---

# UI Components

## 食物卡片（food-card）
- 顯示：名稱、分類 badge
- 點擊展開顯示各餐廳詳細價格
- class 命名：.food-card, .food-card_title, .food-card_price

## 搜尋列
- 即時過濾（不需按送出），監聽 input 事件
- 同時比對 name 和 tags 欄位
- 無結果時顯示「找不到相關美食，試試其他關鍵字？」

## 套餐推薦卡（meal-card）
- 顯示套餐名稱、組合食物清單、總價範圍
- 有「重新推薦」按鈕

## 命名規範
- CSS：BEM 命名（.block__element--modifier）
- JS 函式：camelCase，動詞開頭（getFood, renderCard, calcAvgPrice）
- HTML id：kebab-case（food-list, search-bar）