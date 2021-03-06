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
  'backend_up')
    docker-compose -f "${COMPOSE_FILE}" up -d
    ;;
  'backend_down')
    docker-compose -f "${COMPOSE_FILE}" down
    ;;
  'backend_clean_cache')
    docker volume rm $(docker volume ls -q)
    ;;
  *)
        echo "Invalid command"
        ;;
esac

