import GrpcClient from 'grpc-man/lib/Client';
import {join} from 'path';

jest.setTimeout(50050);

describe('Hero Spec', () => {
    it('gets hero', async () => {
        const client = new GrpcClient(
            '127.0.0.1:5005',
            join(__dirname, '../src/hero/hero.proto'),
        );

        const res = await client.grpc.hero.HeroService.findOne({
            id: 1,
        });
        expect(res).toStrictEqual({id: 1, name: 'John'});
    });
});

describe('Health Check', () => {
    it('checks app healthy', async () => {
        const client = new GrpcClient(
            '127.0.0.1:5005',
            join(__dirname, '../node_modules/grpc-health/src/health/health.proto'),
        );

        const res = await client.grpc.grpc.health.v1.Health.check({
            service: 'hero',
        });
        expect(res).toStrictEqual({status: 'SERVING'});
    });
});
