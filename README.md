# 쿠폰관리를 위한 페이지 구현
## 실행방법
- FE
```shell
yarn install
yarn build
yarn start
```
- BE
```
gradle clean / build 후 spring boot 내장 톰캣 실행
```

## 과제 내용 
### 게임 사전 예약 쿠폰 발급 페이지
- 기능 설명
  - 게임 사전 예약 페이지에서 예약 쿠폰을 발급받는 페이지
  - 이름, 휴대전화 번호 입력
    - 이름, 번호 유효성 체크 (미입력, 번호 형식 에러)
  - 중복되지 않는 쿠폰 번호 발급 (12 자리)
  - 이미 발급된 휴대전화 번호 체크 후 발급 제한, 이미 발급받은 내용에 대해 알림 표기

### 쿠폰 관리 페이지
- 기능 설명
  - 발급받은 전체 사용자의 쿠폰 이력을 테이블로 확인할 수 있는 페이지
  - 열 정보 
  - 이름 // 휴대전화 번호 // 쿠폰 번호 // 발급 일자
  - 페이징 기능 추가
  - 검색 기능 추가
    - 이름 또는 휴대전화 번호를 이용하여 목록 필터

## 사용 기술
- FrontEnd: React(Next.js)
- Backend: Spring boot
- DB: H2

### 구현과정
1. 개발환경
   - front
      - Next.js, typescript, styled-components, react-query, redux
   - back
      - Spring boot, JPA
   - DB
      - H2 Embedded
2. 구현
   1. 쿠폰 발급 페이지
      - front에서 정규식을 이용하여 유효성검사.
      - 휴대폰번호를 api로 전송하여 Back에서 유효성검사.
      - 이미 있는 번호일 경우 alert으로 알림
      - 새로운 데이터일 경우 api로 데이터 전송
      - Back에서 쿠폰 생성 후 함께 데이터 입력.
      - 해당 데이터 리턴 받으면 쿠폰 확인 페이지로 이동.
   2. 쿠폰 관리 페이지
      - 전체 테이블 및 검색창과 pagination 구현.
      - 검색 시 해당 데이터를 back으로 보내어 다시 리스트를 받아 출력.
