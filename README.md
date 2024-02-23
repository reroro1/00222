해당 폴더 git bash
git init
git remote add origin "레포지토리 주소"
git branch -M main
git add .
git commit -m "init" --> 깃허브 이메일 닉네임 요청나옴
git config user.email "깃허브 이메일"
git config user.name "깃허브 닉네임"

git commit -m"init"
git push -u origin main

깃허브에서 내려받기
git clone "주소"

변경사항 적용하기
git add .
git commit -m "남길 메세지"
git push origin 브렌치명

git pull origin "브렌치명"
