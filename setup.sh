#!/bin/bash
ssh -t -v ${USER_NAME}@${HOST_NAME} << 'EOS'
cd ~/news_ui
sudo git pull
sudo npm i
sudo npm run build
sudo pm2 stop all
sudo pm2 start npm --name news_ui -- start
EOS