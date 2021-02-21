#!/bin/bash
ssh -v ${USER_NAME}@${HOST_NAME} << EOS
sudo cd ~/news_ui
sudo git pull
sudo npm i
sudo npm run build
sudo npm start
EOS