#!/usr/bin/env bash

export COMPOSE_FILE=docker-compose.yml

case $1 in
  'install')
    yarn install
    ;;
  'start_dev')
    yarn start
    ;;
  'test')
    yarn test
    ;;
  'build')
    yarn build
    ;;
  *)
        echo "Invalid command"
        ;;
esac

