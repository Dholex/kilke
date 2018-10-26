#!/bin/bash

CURRENT_PATH=$(pwd)

echo $CURRENT_PATH

if ! [ -x "$(command -v nvm)" ]; then
  echo 'node not installed, installing...'
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

  . ~/.nvm/nvm.sh

  nvm install 11.0.0
  nvm alias default 11.0.0
fi

if ! [ -x "$(command -v yarn)" ]; then
  echo 'yarn not installed, installing...'
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  sudo apt-get update && sudo apt-get install --no-install-recommends yarn
fi

yarn install

touch db.sqlite

yarn knex migrate:latest

cd ./packages/sensor-reader && yarn install &&
cd $CURRENT_PATH
cd ./packages/api && yarn install &&
cd $CURRENT_PATH
cd ./packages/client && yarn install &&
cd $CURRENT_PATH

bash ./build.sh
