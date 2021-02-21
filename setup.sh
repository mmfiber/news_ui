#!/bin/bash
ssh -t -v ${USER_NAME}@${HOST_NAME} << EOS
sudo cd /home/${USER_NAME}/news_ui
sudo ls -a
sudo git pull
sudo npm i
sudo npm run build
sudo npm start
EOS