import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('setcookie')
  async setCookiTest(@Res() res: Response, @Req() req: Request) {
    try {
      res.cookie('Authorization', 'token', {
        // domain: 'vet-hospital.store',
        domain: 'localhost',
        sameSite: 'strict',
        secure: false,
        httpOnly: true,
      });
      res.send('');
    } catch (err) {
      throw new Error(err);
    }
  }
}
