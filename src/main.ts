import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const client = ClientProxyFactory.create({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3001,
    },
  });

  const response = await client.send({ cmd: 'get_time' }, {}).toPromise();
  console.log('🕒 Hora recibida del servicio:', response);

  await app.listen(3000);
}
bootstrap();
