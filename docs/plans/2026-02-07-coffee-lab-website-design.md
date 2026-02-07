# Coffee Lab 官網設計藍圖 (2026-02-07)

## 1. 視覺身份與佈局 (Visual Identity & Layout)

*   **設計風格**：日式極簡 (Kaffe Tech) + 動態 Bento Grid。
*   **配色方案**：
    *   背景：`#F9F9F9` (純淨白)。
    *   分界：`#E0E0E0` (石材灰)。
    *   強調：`#00D1FF` (電路藍) & `#3E2723` (深啡色)。
*   **佈局結構**：
    *   **C 位 (大格)**：實時沖煮 Dashboard。展示豆種名稱、進度條、JSON 格式參數。
    *   **側格 (中格)**：Barista Console。KaffePro 高清照 + CPU/情緒實時狀態。
    *   **底格 (細格)**：GitHub 最新 Commit、今日推薦 SOE、Brew CLI 終端機。

## 2. 技術架構 (Technical Architecture)

*   **框架**：Next.js 15 (App Router)。
*   **樣式**：Tailwind CSS + Framer Motion (提供流暢嘅「綻放」動畫)。
*   **數據流**：
    *   Brew API：接收 Telegram 參數指令更新網頁。
    *   GitHub API：自動同步 Master 的代碼提交紀錄。
*   **部署**：Vercel (利用 Vercel Deploy 技能一鍵發布)。

## 3. 互動細節 (Interactions)

*   **感應動畫**：格仔 Hover 效果，帶出咖啡香氣煙霧動畫。
*   **發光聯動**：Barista 頭像發光條跟隨伺服器負載閃爍。
*   **彩蛋**：`sudo brew espresso` 指令觸發全黑「Black Eagle Mode」。

## 4. 實施清單 (Checklist)

1. [ ] 初始化 `coffee-lab-v2` Repo。
2. [ ] 搭建 Next.js 腳手架。
3. [ ] 注入 UI/UX Pro Max Tailwind 配置。
4. [ ] 整合 KaffePro 形象資產。
5. [ ] 實現實時數據更新 API。
6. [ ] 部署至 Vercel。
