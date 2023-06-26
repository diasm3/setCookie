import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

import { DateTime } from 'luxon';

const dateNow = DateTime.now().setZone('Asia/Seoul');

export async function swaggerSetting(app) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('COOKIE TEST API')
    .setDescription(
      `
        set-cookie 때문에 미쳐버릴거 같았다.
        테스트를 위해 만들었다.

        행운이 가득하길.... 

        back : nestjs
        

        cors 설정
        app.enableCors({
          origin: [
            'http://localhost:3002',
            'http://localhost:3001',
            'http://localhost:3000',
          ],
          methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
          exposedHeaders: ['Set-Cookie'],
          credentials: true,
        });


        테스트 URL :  https://vet-hospital.store/swagger

        마지막 업데이트 : ${dateNow.toFormat('yyyy-MM-dd HH:mm:ss')}
            `,
    )
    .setContact('Steve', 'https://diasm3.github.com', 'diasm2@gmail.com')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Set Get cookie test API',
  };
  SwaggerModule.setup('/swagger', app, document, customOptions);
}
