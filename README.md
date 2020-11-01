# nestjs-hero-grpc-sample-with-health-check

[![Build Status](https://travis-ci.com/Jeff-Tian/nestjs-hero-grpc-sample-with-health-check.svg?branch=master)](https://travis-ci.com/Jeff-Tian/nestjs-hero-grpc-sample-with-health-check)

> Add standard grpc health check to the nest js hero grpc sample application.

## Why
nest js is lacking of a native way to support the standard gRPC health check of kubernetes cluster, so I created an
 extension
 for it: [grpc-health](https://github.com/Jeff-Tian/grpc-health). This repository demonstrates how to use [grpc-health](https://github.com/Jeff-Tian/grpc-health)

## Run locally

```bash
git clone https://github.com/Jeff-Tian/nestjs-hero-grpc-sample-with-health-check
cd nestjs-hero-grpc-sample-with-health-check
npm i
npm start
```

## Run test

```bash
npm test
```

## Deploy to Kubernetes

```bash
npm run deploy
```

Or 

```shell script
npm run k8s
```
