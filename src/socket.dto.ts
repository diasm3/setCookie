import { ApiProperty, PickType, ApiResponseOptions } from '@nestjs/swagger';

export class SocketOptionsDto {
  @ApiProperty({
    name: 'domain',
    type: 'string',
    default: 'localhost',
    description: '도메인을 설정하세요',
  })
  domain: string;

  @ApiProperty({
    name: 'sameSite',
    type: ['strict', 'boolean', 'none', 'lax'],
    default: 'strict',
    description: 'lax none strict',
  })
  sameSite: 'strict' | boolean | 'none' | 'lax';

  @ApiProperty({
    name: 'secure',
    type: 'boolean',
    default: 'false',
    description: 'secure',
  })
  secure: boolean;

  @ApiProperty({
    name: 'httpOnly',
    type: 'boolean',
    default: 'true',
    description: 'httpOnly',
  })
  httpOnly: boolean;
}
