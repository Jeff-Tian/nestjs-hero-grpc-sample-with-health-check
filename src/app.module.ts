import { Module } from "@nestjs/common";
import { HeroModule } from "./hero/hero.module";
import { HealthModule } from "grpc-health/dist/health/health.module";
import { grpcClientOptions } from "./grpc-client.options";
import { GrpcOptions } from "@nestjs/microservices";

@Module({
  imports: [HealthModule.register(grpcClientOptions as GrpcOptions), HeroModule]
})
export class AppModule {}
