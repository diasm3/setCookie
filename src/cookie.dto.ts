import { ApiProperty, PickType, ApiResponseOptions } from '@nestjs/swagger';

export class SocketOptionsDto {
  @ApiProperty({
    name: 'domain',
    type: 'string',
    default: 'localhost',
    description: '쿠키가 적용되어야 하는 호스트를 지정. 지정되어 있지 않으면 현재 문서 URI를 기준으로 적용됩니다만, 서브 도메인을 포함하지 않습니다. 이전의 설계와 달리, 도메인의 선두에 위치한 점들은 무시됩니다. 도메인이 지정되면, 서브도메인들은 항상 포함됩니다.',
  })
  domain: string;

  @ApiProperty({
    name: 'sameSite',
    type: ['strict', 'boolean', 'none', 'lax'],
    default: 'strict',
    description: `
    lax none strict 하나만 입력하세요
    Allows servers to assert that a cookie ought not to be sent along with cross-site requests, which provides some protection against cross-site request forgery attacks (CSRF (en-US)).
    `,
  })
  sameSite: 'strict' | boolean | 'none' | 'lax';

  @ApiProperty({
    name: 'secure',
    type: 'boolean',
    default: 'false',
    description: '보안 쿠키들은 서버에서 요청이 SSL을 사용하며, HTTPS 프로토콜을 사용할 때에만 전송됩니다. 그러나 기밀 정보나 민감한 정보들은 HTTP 쿠키에 보관되거나 그걸로 전송되어선 안됩니다. 왜냐하면, 그 전체 메커니즘이 본질적으로 보안이 결여되어 있고, 거기 들어있는 어떤 정보도 암호화되지 않기 때문입니다.',
  })
  secure: boolean;

  @ApiProperty({
    name: 'httpOnly',
    type: 'boolean',
    default: 'true',
    description:`HTTP-only cookies aren't accessible via JavaScript through the property, the XMLHttpRequest and Request APIs to mitigate attacks against cross-site scripting (XSS (en-US)).`,
  })
  httpOnly: boolean;
}
