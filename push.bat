@echo off
cls
rem copy /y gitignore\gitignore.github .gitignore
rem copy /y appjson\app.github app.json
echo Pushing changes to GitHub..
echo.
git add .
git commit -m "More Changes"
git push
echo.
echo Done!