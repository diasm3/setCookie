# SetCookie 테스터기
## Description
- 내가 setCookie 설정하는데 ***같아서 테스트 용도로 만들었음

## Test URL
- https://vet-hospital.store/swagger


## Test 결과
```javascript 
{
  domain : 'vet-hospital.store',
  sameSite : 'none',
  secure: 'true',
  httpOnly: 'false'
}
```
- 위와 같이 셋팅하면 req.headers.cookie 안에 Authorization=token이 들어있는것을 확인 할 수 있다.
- 단 웹브라우져에서 개발자 모드에서 application탭에서는 쿠키에 내용을 볼 수 없다.

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

