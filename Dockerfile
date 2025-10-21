ARG ALPINE_VERSION=3.22
FROM golang:alpine${ALPINE_VERSION} AS base

RUN apk add --no-cache git
RUN apk add --no-cache nodejs

ARG HUGO_VERSION=0.151.0-r1
RUN apk add --no-cache --repository=https://dl-cdn.alpinelinux.org/alpine/edge/community hugo=${HUGO_VERSION}  

WORKDIR /portfolio
COPY . .
