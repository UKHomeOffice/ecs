#!/bin/bash

docker build -t test-repo-image:latest . || docker build -t test-repo-image:latest ..
snyk config set api=$SNYK_TOKEN
snyk container test test-repo-image