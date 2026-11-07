@echo off
setlocal
title Compilar APK - Cavern

set "PROY=C:\Users\ASUS\Desktop\pruebas temporales"
set "PATH=%PATH%;C:\Gradle\gradle-8.14.6\bin"

if not exist "%PROY%\www" goto :nowww
cd /d "%PROY%"

echo.
echo [1/4] Corrigiendo nombres con tildes en config.xml y en el juego...
powershell -NoProfile -Command "foreach($f in 'config.xml','www\data.js','www\index.html'){ if(Test-Path $f){ $t=[IO.File]::ReadAllText($f,[Text.Encoding]::UTF8); $n=$t -replace 'Robot en la caverna ne.n\.png','robot_caverna_neon.png' -replace 'Caverna Cibern.tica de Ne.n\.png','caverna_neon.png'; if($n -ne $t){[IO.File]::WriteAllText($f,$n,(New-Object Text.UTF8Encoding($false)))} } }; Get-ChildItem www -Filter 'Robot en la caverna*' | Rename-Item -NewName 'robot_caverna_neon.png'; Get-ChildItem www -Filter 'Caverna Cibern*' | Rename-Item -NewName 'caverna_neon.png'"

echo.
echo [2/4] Buscando otros nombres con caracteres especiales...
powershell -NoProfile -Command "$m=Get-ChildItem www -Recurse | Where-Object { $_.Name -cmatch '[^\x00-\x7F]' }; if($m){ Write-Host 'AVISO: estos archivos tienen tildes o enie y pueden dar error:'; $m | ForEach-Object { Write-Host ('  ' + $_.Name) } } else { Write-Host 'Todo limpio.' }"

echo.
echo [3/4] Verificando plataforma Android...
if not exist "platforms\android" call cordova platform add android

echo.
echo [4/4] Compilando (la primera vez tarda varios minutos)...
call cordova build android
if errorlevel 1 goto :fallo

set "APK=platforms\android\app\build\outputs\apk\debug\app-debug.apk"
if not exist "%APK%" goto :fallo
copy /y "%APK%" "%USERPROFILE%\Desktop\cavern-debug.apk" >nul

echo.
echo ================================================
echo  LISTO: APK copiado al Escritorio como
echo  cavern-debug.apk
echo ================================================
pause
exit /b 0

:nowww
echo.
echo No se encontro la carpeta www en:
echo %PROY%
echo Exporta primero desde GDevelop a esa carpeta.
pause
exit /b 1

:fallo
echo.
echo ================================================
echo  ERROR en la compilacion. Copia el mensaje de
echo  arriba y pegalo en el chat.
echo ================================================
pause
exit /b 1
