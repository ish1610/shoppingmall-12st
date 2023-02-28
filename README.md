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
> typeScript
> next
> react-query
> axios
> react-redux
> redux-tookit
> @emotion/styled
> @emotion-react
> emotion-reset
```

<br/><br/>

## 사용 데이터베이스

```plaintext
FireBase Realtime DataBase (상품 데이터 관리)
```

<br/><br/>

## 🖥️ <span id="function">통합 쇼핑 플랫폼 12st 기능</span>

<br/><br/>

## <span id="folder">📂 디렉토리 구조</span>

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
- features : 기능별 코드 관리
- pages : 라우트 별 최종 렌더링 될 페이지
- routes : 라우트 관련 코드 관리

features 폴더의 경우 만들어야 되나 고민을 했지만, features 폴더가 없을 경우 10개가 넘는 폴더에서 common, page, routes 폴더가 각 기능 별 폴더와 뒤 섞일 경우를 생각하니 만드는 것이 좋을 것 같다는 생각을 했습니다.
<br/><br/>

![image](https://user-images.githubusercontent.com/85052351/221127840-2f556dbe-9426-4c5c-9b2a-2463b1bacd77.png)
<br/><br/>
pages 폴더의 경우 기존에 존재하지 않던 폴더입니다. 기존에는 각 페이지 별 최상위 컴포넌트를 route의 element로 연결해 줬지만, 최종 레이아웃 컴포넌트만 레이아웃으로 연결해 주는 역할을 해주기 위해 사용됩니다.
<br/><br/>
![image](https://user-images.githubusercontent.com/85052351/221127793-109abfd7-f59e-4d52-a8cf-9df38c856716.png)<br/><br/>
기존 프로젝트에서는 route 관력 로직은 app.js에서 작성되었지만, 해당 로직은 routes 폴더 내부에서 관리하여 app.js 파일을 최대한 가볍게 유지합니다. 이렇게 features, pages, routes 폴더는 각각의 관심사인 특정 기능 제공, 페이지 최종 레이아웃 제공, route 기능 제공을 기준으로 분리해 주었습니다.
<br/><br/>
