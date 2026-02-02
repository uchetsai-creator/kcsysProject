冠全資訊官方網站(Bootstrap ->React)

使用 React + Vite + Tailwind CSS + JSON API 架構


```
mini-website/
├── public/
│   └── api/                    JSON API 資料
│       ├── products.json       12項產品資料
│       ├── news.json          最新消息
│       ├── partners.json       合作夥伴
│       ├── portfolio.json      建置實績
│       └── company.json        公司資訊
│
├── src/
│   ├── services/
│   │   └── api.js             API 服務層
│   │
│   ├── components/
│   │   ├── Navbar.jsx         導航列
│   │   ├── Footer.jsx         頁尾
│   │   ├── HeroBanner.jsx     首頁橫幅
│   │   ├── Breadcrumbs.jsx    麵包屑
│   │   └── ProductCard.jsx    產品卡片
│   │
│   ├── pages/
│   │   ├── Home.jsx           首頁
│   │   ├── News.jsx           最新消息
│   │   ├── About.jsx          公司簡介
│   │   ├── Products.jsx       產品總覽
│   │   ├── ProductDetail.jsx  產品詳細
│   │   ├── Partners.jsx       合作夥伴
│   │   ├── Portfolio.jsx      建置實績
│   │   └── Contact.jsx        聯絡我們
│   │
│   ├── App.jsx                路由配置
│   ├── main.jsx               程式進入點
│   └── index.css              全域樣式
│
├── tailwind.config.js         Tailwind 配置
├── vite.config.js             Vite 配置
├── package.json               相依套件
└── README.md                  說明文件
```

頁面說明

| 路由 | 頁面 | 說明 |
|------|------|------|
| `/` | 首頁 | Hero Banner + 核心價值 + 產品展示 |
| `/news` | 最新消息 | 公司動態與產品更新 |
| `/about` | 公司簡介 | 公司介紹、核心價值、團隊 |
| `/products` | 產品總覽 | 12項產品展示 |
| `/products/:id` | 產品詳細 | 單一產品完整資訊 |
| `/partners` | 合作夥伴 | 合作企業、成功案例、客戶評價 |
| `/portfolio` | 建置實績 | 專案案例與實施成果 |
| `/contact` | 聯絡我們 | 聯絡表單與公司資訊 |
