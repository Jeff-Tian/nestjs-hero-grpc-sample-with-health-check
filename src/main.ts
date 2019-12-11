import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { grpcClientOptions } from './grpc-client.options';
import { extendedGrpcOptions } from 'grpc-health/dist/health/grpc-client.options';
import {GrpcOptions} from "@nestjs/microservices"

async function bootstrap() {
  /**
   * This example contains a hybrid application (HTTP + gRPC)
   * You can switch to a microservice with NestFactory.createMicroservice() as follows:
   *
   * const app = await NestFactory.createMicroservice(AppModule, {
   *  transport: Transport.GRPC,
   *  options: {
   *    package: 'hero',
   *    protoPath: join(__dirname, './hero/hero.proto'),
   *  }
   * });
   * await app.listenAsync();
   *
   */
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(extendedGrpcOptions(grpcClientOptions as GrpcOptions));

  await app.startAllMicroservicesAsync();
  await app.listen(3001);
}
bootstrap();
