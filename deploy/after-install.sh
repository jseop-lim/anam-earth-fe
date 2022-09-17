#!/bin/bash

cd ~/anam-earth/deploy

if [ "$(docker ps -aq -f name=nginx)" ]; then
    docker compose start nginx
else
    docker compose up -d
fi  