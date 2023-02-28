# 🛒 통합 쇼핑 플랫폼 - 12st

![image](https://user-images.githubusercontent.com/85052351/221122573-e3dda24c-71e0-411f-908a-a9ac71a3772d.png)
<br/>
[프로젝트 관련 글](https://nicehyun12.tistory.com/search/12st) | [데모]()

## 프로젝트 소개

- 통합 쇼핑 플랫폼 12st은 상품 구매와 관리자에 의한 상품 관련, 고객 관련 정보 수정이 가능합니다.
- 현재 플랫폼은 사용자, 관리자의 기능으로 구분되어 구성되어 있습니다.
- 기존 팀프로젝트를 리팩토링한 프로젝트입니다.

<br/><br/>

- [통합 쇼핑 플랫폼 12st 기능](#function)
- [폴더 구조](#folder)
- [라우트](#route)

<br/><br/>

## <span id="localEnvironment">로컬 실행 환경</span>

```bash
> npm i
> npm start
```

<br/><br/>

### 환경 변수 설정

```bash
REACT_APP_FIREBASE_AUTH_API_KEY = "파이어베이스 Authentication API key"
REACT_APP_FIREBASE_DB_URL = "파이어베이스 리얼타임 데이터베이스 URL"
```

<br/>
로컬 환경에서 실행시 위와 같이 루트 경로에 FireBase RealTime DataBase URL, FireBase Authentication API KEY 설정해야 합니다.

<br/><br/>

## 사용 라이브러리

```plaintext
    > @emotion/react : 11.10.6,
    > @emotion/styled : 11.10.6
    > axios : 1.3.4
    > emotion-reset : 3.0.1
    > eslint : 8.35.0
    > eslint-config-next : 13.2.1
    > next : 13.2.1
    > react-query : 3.39.3
    > react-redux : 8.0.5
    > typescript : 4.9.5
```

<br/><br/>

## 사용 데이터베이스

```plaintext
FireBase Realtime DataBase (상품 데이터 관리)
```

<br/><br/>

## 🖥️ <span id="function">통합 쇼핑 플랫폼 12st 기능</span>

<br/><br/>

## <span id="folder">📂 디렉토리 구조</span><br/>

[디렉토리 관련 게시글](https://nicehyun12.tistory.com/153)

### 💩 기존 디렉토리 구조

```plaintext
├── 📁 components
│   ├── 📁 UI // 공통 컴포넌트
│   ├── 📁 layout // 애플리케이션 레이아웃
│   ├── 📁 pages
│   │   ├── 📁 admin // 관리자 페이지
│   │   ├── 📁 home // 페인 페이지
│   │   ├── 📁 loading // 로딩 페이지
│   │   ├── 📁 login // 로그인 페이지
│   │   ├── 📁 myPage // 마이페이지
│   │   ├── 📁 nonPage // 404 페이지
│   │   ├── 📁 order // 주문 페이지
│   │   ├── 📁 productBest // 베스트 상품 페이지
│   │   ├── 📁 productCart // 장바구니 페이지
│   │   ├── 📁 productDetail // 상품 상세 페이지
│   │   ├── 📁 productsCategory // 상품 카테고리
│   │   ├── 📁 regist // 회원가입 페이지
│   │   └── 📁 search // 검색
├── 📁 hooks
└── util
    ├── 📁 authCheck.js
    ├── ...
    └── 📁 payment.js
```

<br/>
기존 디렉토리 구조는 지역성을 전혀고려하지 않고 모두 코드 기능을 기준으로 분리되어 있었습니다. 이 경우 특정 기능 수정 작업 시 캐시 미스가 보다 자주 발생할 것입니다. 실제로 주문 페이지에서 사용하는 유틸리티 함수를 수정했을 때 컴포넌트 폴더에서 주문 컴포넌트를 찾을 때 적지 않은 시간이 소요됐습니다.

<br/><br/>

### 👨🏻‍🔧 변경 된 디렉토리 구조

```plaintext
├── 📁 app
│   ├── 📁 [productId]
│   │   ├── 📁 components
│   │   │   └── 📁 views
│   │   ├── 📁 hooks
│   │   ├── page.tsx
│   │   ├── 📁 types
│   │   └── 📁 utils
│   ├── 📁 admin
│   │   ├── 📁 components
│   │   │   └── 📁 views
│   │   ├── 📁 hooks
│   │   ├── page.tsx
│   │   ├── 📁 types
│   │   └── 📁 utils
│   ├── 📁 api
│   ├── 📁 bestProduct
│   │   ├── 📁 components
│   │   │   └── 📁 views
│   │   ├── 📁 hooks
│   │   ├── page.tsx
│   │   ├── 📁 types
│   │   └── 📁 utils
│   ├── 📁 cart
│   │   ├── 📁 components
│   │   │   └── 📁 views
│   │   ├── 📁 hooks
│   │   ├── page.tsx
│   │   ├── 📁 types
│   │   └── 📁 utils
│   ├── 📁 home
│   │   ├── 📁 components
│   │   │   └── 📁 views
│   │   ├── 📁 hooks
│   │   ├── page.tsx
│   │   ├── 📁 types
│   │   └── 📁 utils
│   ├── 📁 login
│   │   ├── 📁 components
│   │   │   └── 📁 views
│   │   ├── 📁 hooks
│   │   ├── page.tsx
│   │   ├── 📁 types
│   │   └── 📁 utils
│   ├── 📁 myPage
│   │   ├── 📁 components
│   │   │   └── 📁 views
│   │   ├── 📁 hooks
│   │   ├── page.tsx
│   │   ├── 📁 types
│   │   └── 📁 utils
│   ├── 📁 order
│   │   ├── 📁 components
│   │   │   └── 📁 views
│   │   ├── 📁 hooks
│   │   ├── page.tsx
│   │   ├── 📁 types
│   │   └── 📁 utils
│   ├── 📁 page.tsx
│   ├── 📁 productCatrgory
│   │   ├── 📁 components
│   │   │   └── 📁 views
│   │   ├── 📁 hooks
│   │   ├── page.tsx
│   │   ├── 📁 types
│   │   └── 📁 utils
│   ├── 📁 search
│   │   ├── 📁 components
│   │   │   └── 📁 views
│   │   ├── 📁 hooks
│   │   ├── page.tsx
│   │   ├── 📁 types
│   │   └── 📁 utils
│   └── 📁 signup
│       ├── 📁 components
│       │   └── 📁 views
│       ├── 📁 hooks
│       ├── page.tsx
│       ├── 📁 types
│       └── 📁 utils
└── 📁 common
```

<br/>

변경된 디렉토리 구조는 크게 다음과 같이 분리했습니다.<br/>

- common : 공통으로 사용되는 컴포넌트, 타입, 유틸리티 함수 등 관리
- app : 페이지 별 관리
  <br/><br/>

app 폴더 내부는 다음과 같이 분리했습니다.<br/>

- components : 기능별 컴포넌트 관리
- hooks : 페이지 별 관리
- types : 기능별 타입 관리
- utils : 기능별 유틸리티 함수 관리
  <br/><br/>

components 폴더 내부는 다음과 같이 분리했습니다.<br/>

- view : 컴포넌트 view 관리
- view rendering logic 관리
  <br/><br/>
