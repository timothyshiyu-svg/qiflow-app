# QiFlow 五音通脉疗愈 App（V4 收官版）

## V4 完成项
- ✅ 全局风格统一（header/layout 组件化）
- ✅ 仪表盘 7天/30天趋势切换
- ✅ 体质测评结果写入“我的档案”
- ✅ PDF导出（浏览器打印）
- ✅ 演示讲稿（中英）：`docs/DEMO_SCRIPT.md`

## 启动
```bash
cd backend && npm install && npm run dev
cd ../frontend && python3 -m http.server 5500
```
访问 `http://localhost:5500`

## 关键演示路径
首页 → 体质测评V2 → 四大场景V2 → 仪表盘(7/30天) → 我的档案
