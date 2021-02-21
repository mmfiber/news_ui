#!/bin/bash
ssh -t -v ${USER_NAME}@${HOST_NAME} << EOS
sudo cd ~/news_ui \
  && ls -a \
  && git pull \
  && npm i \
  && npm run build \
  && npm start
EOS