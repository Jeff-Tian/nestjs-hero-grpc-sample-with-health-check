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

## Usage example

By applying the deployment yaml file to your kubernetes cluster with the wrong port number and correct port number
you'll see from the dashboard that the health check of the first deployment is failing, and the 2nd one is working!

![Usage example](./example.jpeg)

## Support me

If you find this repo useful, you can [buy me a coffee](https://jeff-tian.jiwai.win/support-me):

[![Buy me a Coffee!](https://cachenet-jeff-tian.cloud.okteto.net/http/https%3A%2F%2Fapi.urlto.app%2Fv1%2Fscreenshoturl%2Fjpg%3Furl%3Dhttps%253A%252F%252Fjeff-tian.jiwai.win%252Fsupport-me%26fullpage%3Dtrue%26viewportwidth%3D1024%26viewportheight%3D1000%26ignorecache%3Dfalse%26region%3Dus)](https://jeff-tian.jiwai.win/support-me)
