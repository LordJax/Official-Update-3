@ECHO off
IF NOT DEFINED IS_CHILD_PROCESS (CMD /K SET IS_CHILD_PROCESS=1 ^& %0 %*) & EXIT
TITLE OGBot Starting System
CLS
ECHO.

powershell -ExecutionPolicy Bypass .\scripts\powershell\Selection.ps1
