@echo off
set /p str1= Please enter the file (folder) name string to be replaced (spaces can be replaced)：
set /p str2= Please enter the replaced file (folder) name string (if deleted just enter):
echo.
echo In progress, please wait ......
for /f "delims=" %%a in ('dir /s /b ^|sort /+65535') do (
if "%%~nxa" neq "%~nx0" (
set "file=%%a"
set "name=%%~na"
set "extension=%%~xa"
call set "name=%%name:%str1%=%str2%%%"
setlocal enabledelayedexpansion
ren "!file!" "!name!!extension!" 2>nul
endlocal
)
)
exit