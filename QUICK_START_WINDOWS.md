# QiFlow Windows 一键启动

## 方法A（推荐）
双击：`start_qiflow_windows.bat`

## 方法B（PowerShell）
右键 PowerShell 执行：`start_qiflow_windows.ps1`

## 成功后地址
- 前端：`http://localhost:5500`
- 后端健康检查：`http://localhost:8787/api/health`

## 端口占用处理
如果端口冲突，可先关闭旧进程：
```powershell
netstat -ano | findstr :8787
netstat -ano | findstr :5500
taskkill /PID <PID> /F
```
