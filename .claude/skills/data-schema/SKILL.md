---
name: data-schema
description: foods.json 的資料結構規範，新增欄位或修改資料時使用
---

# Data Schema

## foods.json 結構
{
  "foods": [
    {
      "id": "food-1",
      "name": "蚵仔麵線",
      "tags": ["鹹食", "湯類"],     
      "restaurantId": "rest-1"
    }
  ]
}

## restaurants.json 結構
{
  "restaurants": [
    {
      "id": "rest-1",
      "name": "小美小吃店",
      "lat": 24.322,
      "lng": 120.593,
      "mapLink": "https://maps.app.goo.gl/f68meh8PmsSQnQet8"
    }
  ]
}

## 規則
- food id 格式：food-流水號（如 food-1）, 請從現有最大值 +1，避免重複
- restaurants id 格式：rest-流水號（如 rest-1）, 請從現有最大值 +1，避免重複
- restaurantId 勾稽 restaurants.json 的 id 資料