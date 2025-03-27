# 創意媒體畢業專題展示網站

這是一個為展示創意媒體學生畢業專題作品而設計的網站。網站採用現代web技術，具有吸引人的設計和流暢的用戶體驗。

## 功能特色

- 響應式設計，適配各種螢幕尺寸
- 美觀的動畫效果與轉場
- 專題作品展示（影像、互動裝置等）
- 創作過程文檔展示
- 藝術家自述陳述
- 展覽資訊展示

## 技術堆疊

- [Next.js](https://nextjs.org/) - React框架
- [TailwindCSS](https://tailwindcss.com/) - CSS框架
- [Framer Motion](https://www.framer.com/motion/) - 動畫庫
- [TypeScript](https://www.typescriptlang.org/) - 靜態類型檢查

## 開始使用

### 安裝依賴

```bash
npm install
```

### 運行開發伺服器

```bash
npm run dev
```

打開 [http://localhost:3000](http://localhost:3000) 查看網站。

### 構建生產版本

```bash
npm run build
```

### 運行生產版本

```bash
npm start
```

## 網站結構

- `/` - 首頁，展示全站概覽
- `/project` - 專題作品詳細頁面
- `/process` - 創作過程文檔
- `/statement` - 藝術家自述
- `/exhibition` - 展覽資訊

## 自定義

### 更換圖片

圖片檔案位於 `public/images/` 目錄中。

### 修改內容

頁面內容位於 `src/app/` 目錄的相應頁面中。

### 更改樣式

全局樣式定義在 `src/app/globals.css` 中。

## 授權

MIT
