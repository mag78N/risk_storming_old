#!/bin/sh

export DOCKER_HOST="ssh://ben@praxio.be"

docker-compose pull
docker-compose up -d
