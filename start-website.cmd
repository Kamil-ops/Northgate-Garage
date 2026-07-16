@echo off
cd /d "%~dp0"
echo Garage Shop website running at http://localhost:8000
echo Keep this window open. Press Ctrl+C to stop the server.
"C:\Program Files\nodejs\node.exe" ".codex-static-server.cjs"
