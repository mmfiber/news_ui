#!/bin/bash
ssh -t -v ${USER_NAME}@${HOST_NAME} << EOS
'
cd /home/${USER_NAME}/news_ui
git pull
npm i
npm run build
npm start
'
EOS