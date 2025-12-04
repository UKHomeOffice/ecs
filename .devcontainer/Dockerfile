FROM node:24.11.1-alpine3.21@sha256:5579647898d35dbc9ca22010e46c207deb6320f785822a3c5ba3a84b81b57309

USER root

# Update package index and upgrade all installed packages
RUN apk update && apk upgrade --no-cache


# Setup nodejs group & nodejs user
RUN addgroup --system nodejs --gid 998 && \
    adduser --system nodejs --uid 999 --home /app/ && \
    chown -R 999:998 /app/

USER 999

WORKDIR /app
