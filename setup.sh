#!/bin/bash
ssh -t -v ${USER_NAME}@${HOST_NAME} << 'EOS'
cd ~/news_ui
sudo git pull
npm i
npm run build
npm start
EOS