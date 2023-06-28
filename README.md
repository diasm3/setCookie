# SetCookie 테스터기
## Description
- set cookie 설정에 어려움이 많고 기억하기 어려워서 만든 테스터기 입니다.
- 그냥 테스트용이라 쿠키를 어떻게 설정하느냐에 따라 변경이 가능한가만 체크해보시길 권장합니다.

## Test URL
- https://api.vet-hospital.store/swagger


## Test 결과
```javascript 
1. 조건은 http - https , https - https로 셋팅했다.
{
  domain : 'vet-hospital.store',
  sameSite : 'none',
  secure: 'true',
  httpOnly: 'false'
}
```
- 위와 같이 셋팅하면 req.headers.cookie 안에 Authorization=token이 들어있는것을 확인 할 수 있다.
- 단 웹브라우져에서 개발자 모드에서 application탭에서는 쿠키에 내용을 볼 수 없다.
- 이참에 다들 하는 vercel 프론트엔드도 배포해서 체크해봤다. https://vet-react-diasm3.vercel.app/

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

