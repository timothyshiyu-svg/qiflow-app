$ErrorActionPreference = 'Stop'
Write-Host "[QiFlow] 启动中..." -ForegroundColor Cyan

function Test-Port($port) {
  $conn = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
  return $null -ne $conn
}

if (Test-Port 8787) { Write-Host "[提示] 端口 8787 已被占用，后端可能已在运行" -ForegroundColor Yellow }
if (Test-Port 5500) { Write-Host "[提示] 端口 5500 已被占用，前端可能已在运行" -ForegroundColor Yellow }

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host "[错误] 未检测到 Node.js" -ForegroundColor Red
  exit 1
}

if (-not (Get-Command python -ErrorAction SilentlyContinue) -and -not (Get-Command python3 -ErrorAction SilentlyContinue)) {
  Write-Host "[错误] 未检测到 Python" -ForegroundColor Red
  exit 1
}

Set-Location "$PSScriptRoot\backend"
if (-not (Test-Path "node_modules")) {
  Write-Host "[安装] npm install ..." -ForegroundColor Gray
  npm install
}

Start-Process powershell -ArgumentList "-NoExit","-Command","cd '$PSScriptRoot\backend'; npm run dev"
Start-Sleep -Seconds 2
Start-Process powershell -ArgumentList "-NoExit","-Command","cd '$PSScriptRoot\frontend'; python -m http.server 5500"
Start-Process "http://localhost:5500"
Write-Host "✅ 启动完成" -ForegroundColor Green
