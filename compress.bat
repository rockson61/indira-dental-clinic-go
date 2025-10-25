@echo off
REM Indira Dental Clinic - Windows Compression Script
REM Creates ZIP package for deployment

echo.
echo ====================================================
echo   Indira Dental Clinic - Creating Deployment ZIP
echo ====================================================
echo.

REM Set variables
set PROJECT_DIR=%~dp0
set DATE_STR=%date:~-4,4%%date:~-10,2%%date:~-7,2%_%time:~0,2%%time:~3,2%%time:~6,2%
set DATE_STR=%DATE_STR: =0%
set FILENAME=dental-clinic-deploy-%DATE_STR%.zip

echo Project: %PROJECT_DIR%
echo Package: %FILENAME%
echo.

REM Check if 7-Zip is installed
where 7z >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: 7-Zip not found!
    echo.
    echo Please install 7-Zip from: https://www.7-zip.org/
    echo Or use manual compression:
    echo   1. Select project folder
    echo   2. Right-click - Send to - Compressed ZIP folder
    echo   3. Manually exclude: node_modules, .next, .git
    echo.
    pause
    exit /b 1
)

echo Using 7-Zip to create package...
echo.
echo Excluding:
echo   - node_modules\
echo   - .next\
echo   - .git\
echo   - .cache\
echo   - .turbo\
echo   - *.log
echo.

REM Create ZIP excluding heavy folders
7z a -tzip "%FILENAME%" ^
  -x!node_modules\ ^
  -x!.next\ ^
  -x!.git\ ^
  -x!.cache\ ^
  -x!.turbo\ ^
  -x!*.log ^
  -x!.DS_Store ^
  -x!*.zip ^
  -x!*.tar.gz ^
  -x!.env.local ^
  -x!.env.production ^
  *

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ====================================================
    echo   SUCCESS! Package created.
    echo ====================================================
    echo.
    echo Package: %FILENAME%
    echo Location: %PROJECT_DIR%
    echo.
    echo To deploy:
    echo   1. Upload %FILENAME% to your server
    echo   2. Extract the ZIP file
    echo   3. Run: pnpm install
    echo   4. Run: pnpm build
    echo   5. Run: pnpm start
    echo.
    echo Ready for deployment!
    echo.
) else (
    echo.
    echo ERROR: Failed to create package!
    echo Please check 7-Zip installation.
    echo.
)

pause

