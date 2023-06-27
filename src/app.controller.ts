import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { SocketOptionsDto } from './cookie.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('setcookie')
  async setCookiTest(@Query() info: SocketOptionsDto, @Res() res: Response) {
    try {
      res.cookie('Authorization', 'token', {
        domain: info.domain || 'localhost',
        sameSite: info.sameSite || 'strict',
        secure: info.secure || false,
        httpOnly: info.httpOnly || true,
      });
      res.send(info);
    } catch (err) {
      throw new Error(err);
    }
  }

  @Get('getcookie')
  async getCookiTest(@Res() res: Response, @Req() req: Request) {
    try {
      let token = req.headers.cookie;

      return res.send(token);
    } catch (err) {
      throw new Error(err);
    }
  }
}
