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
  'up')
    docker-compose -f "${COMPOSE_FILE}" up -d
    ;;
  'down')
    docker-compose -f "${COMPOSE_FILE}" down
    ;;
  *)
        echo "Invalid command"
        ;;
esac

