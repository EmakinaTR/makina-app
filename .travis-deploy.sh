#!/bin/bash

VERSION=`node -p -e "require('./package.json').version"`
DOCKER_TAG=develop && [[ $TRAVIS_BRANCH == "master" ]] && DOCKER_TAG=latest
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker pull $DOCKER_IMAGE:$DOCKER_TAG
docker build -t $DOCKER_IMAGE:$VERSION -t $DOCKER_IMAGE:$DOCKER_TAG --cache-from $DOCKER_IMAGE:$DOCKER_TAG .
docker push $DOCKER_IMAGE:$VERSION
docker push $DOCKER_IMAGE:$DOCKER_TAG
