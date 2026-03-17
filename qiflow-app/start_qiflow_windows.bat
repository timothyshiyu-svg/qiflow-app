@echo off
chcp 65001 >nul
setlocal

echo [QiFlow] 启动中...

where node >nul 2>nul
if %errorlevel% neq 0 (
  echo [错误] 未检测到 Node.js，请先安装 Node.js 18+
  pause
  exit /b 1
)

where python >nul 2>nul
if %errorlevel% neq 0 (
  where python3 >nul 2>nul
  if %errorlevel% neq 0 (
    echo [错误] 未检测到 Python，请先安装 Python 3
    pause
    exit /b 1
  )
)

echo [1/3] 检查依赖...
cd backend
if not exist node_modules (
  call npm install
)

echo [2/3] 启动后端 API (http://localhost:8787)
start "QiFlow Backend" cmd /k "cd /d %~dp0backend && npm run dev"

timeout /t 2 >nul

echo [3/3] 启动前端 (http://localhost:5500)
start "QiFlow Frontend" cmd /k "cd /d %~dp0frontend && python -m http.server 5500"

echo.
echo ✅ 启动完成：
echo - API: http://localhost:8787/api/health
echo - Web: http://localhost:5500
echo.
start http://localhost:5500
pause
