#!/bin/bash

cd ~/anam-earth/deploy

if [ "$(docker ps -aq -f name=nginx)" ]; then
    docker compose stop nginx
fi