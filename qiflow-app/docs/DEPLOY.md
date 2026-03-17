# 海外部署（Render + Cloudflare Pages）

## 1) 部署后端到 Render
- New Web Service -> 连接仓库
- Root: `qiflow-app/backend`
- Build: `npm install`
- Start: `npm start`
- 环境变量：`PORT=10000`

## 2) 部署前端到 Cloudflare Pages
- Framework preset: None
- Build command: 空
- Output dir: `qiflow-app/frontend`

## 3) 前端API地址
将 `frontend/js/app.js` 的 `API` 改为 Render 域名，例如：
`https://qiflow-api.onrender.com/api`

## 4) 合规建议
- 增加隐私政策与数据删除入口
- 默认关闭可识别信息上传
- 仅匿名统计用于模型优化
