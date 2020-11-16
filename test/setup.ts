import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { grpcClientOptions } from '../src/grpc-client.options';
import { GrpcOptions } from '@nestjs/microservices';
import { extendedGrpcOptions } from 'grpc-health/dist/health/health-grpc-client.options';

module.exports = async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  const app = moduleFixture.createNestMicroservice(
    extendedGrpcOptions(grpcClientOptions as GrpcOptions),
  );
  await app.listenAsync();
  console.log('started module testing');
};
