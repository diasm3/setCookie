import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { SocketOptionsDto } from './cookie.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('setcookie')
  async setCookiTest(@Query() info: SocketOptionsDto, @Res() res: Response) {
    try {
      res.cookie('Authorization', 'token', {
        // domain: 'vet-hospital.store',
        domain: info.domain || 'localhost',
        // expires: info.expires || new Date(Date.now() + 86400000), // default to 24 hours
        // maxAge: info.maxAge || 86400000, // default to 24 hours in milliseconds
        sameSite: info.sameSite || 'strict',
        secure: info.secure || false,
        httpOnly: info.httpOnly || true,
      });
      console.log(info);
      res.send(info);
    } catch (err) {
      throw new Error(err);
    }
  }

  // @Get('setcookie')
  // async setCookiTest(@Query() info: SocketOptionsDto, @Res() res: Response) {
  //   try {
  //     res.cookie('Authorization', 'token', {
  //       // domain: 'vet-hospital.store',
  //       domain: info.domain || 'localhost',
  //       // expires: info.expires || new Date(Date.now() + 86400000), // default to 24 hours
  //       // maxAge: info.maxAge || 86400000, // default to 24 hours in milliseconds
  //       sameSite: info.sameSite || 'strict',
  //       secure:  'false',
  //       httpOnly:'true',
  //     });
  //     console.log(info)
  //     res.send(info);
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // }

  @Get('getcookie')
  async getCookiTest(@Res() res: Response, @Req() req) {
    try {
      let token = req.cookie;

      console.log(req)
      console.log(req.cookie);
      console.log(token);
      return res.send(token);
    } catch (err) {
      throw new Error(err);
    }
  }
}
