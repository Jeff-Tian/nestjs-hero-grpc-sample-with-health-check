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
kubectl apply -k k8s
```

Or 

```shell script
npm run k8s
```

## Support me

If you find this repo useful, you can [buy me a coffee](https://jeff-tian.jiwai.win/support-me):

[![Buy me a Coffee!](https://api.urlto.app/v1/screenshoturl/jpg?url=https%3A%2F%2Fjeff-tian.jiwai.win%2Fsupport-me&fullpage=true&viewportwidth=1024&viewportheight=1000&ignorecache=false&region=us
)](https://jeff-tian.jiwai.win/support-me)
