# Next.js 시작하기
### https://nomadcoders.co/Next.js-fundamentals

2023-09-06 ~ ongoing

## 프로젝트 특이사항
### VSCode의 ESLint 플러그인 문제
* VSCode 작업 영역의 루트 폴더를 Next.js 프로젝트 폴더로 설정하지 않으면 ESLint가 제대로 작동하지 않는 문제가 있다. 작업 시에 주의 할 것.
  + 다른 IDE에서도 이런 문제가 있는지는 모르겠다... VSCode의 ESLint 서버 문제라고 생각 중.

## 메모
### SSL: Server Side Rendering
* Next.js는 Static Pre Rendering(정적 사전 렌더링)을 통해 SSL을 구현한다. 페이지를 미리 렌더하여 캐싱해두고 요청이 들어오면 캐시된 페이지를 제공하기 때문에 클라이언트 측의 초기 페이지 로딩 속도가 매우 빠르며 클라이언트 측의 사양에도 크게 구애받지 않는다.
  + 물론 정적인 요소를 미리 html로 만들어 두어 첫 페이지의 로딩이 빠른 것이기에 페이지의 동적 요소에 필요한 스크립트가 로드되기 전까지는 동적 요소는 작동하지 않는다.

### Next.js 13 이후의 JSX Link 컴포넌트
* ReactJS에서 SPA(Single Page Application) 구현을 위해 `a` 태그 대신 페이지 이동 용으로 사용하는 `Link` 컴포넌트를 Next.js에서도 사용한다. 하지만 그 사용법이 약간 다르며 특히 Next.js 13버전부터 사용법이 변경되어 12버전인 강의와의 사용 방법 차이가 발생하고 있다.
* `Link` 컴포넌트에 `legacyBehavior` 속성을 사용하면 12버전까지의 사용법으로 사용 가능하다. 하지만 현재 버전은 13인 만큼 강의와 다르게 13버전의 사용법을 알아내서 같은 방식으로 구현해보겠다.
  + 이후 이와 같은 버전 차이로 인한 이슈 발생 시에 최신 버전의 방법대로 작성하겠다.

### style-jsx
* Next.js에서도 ReactJS와 같이 `module.css` 확장자를 사용한 CSS 파일을 js 파일에서 import하여 여러 CSS 파일에서 서로 겹치는 이름의 클래스에 CSS를 적용하더라도 파일 별로 랜덤 생성된 고유 클래스 명을 갖도록 만드는 `CSS Module`의 사용이 가능하다. 하지만 Next.js는 컴포넌트 안에서 CSS처럼 스타일을 정의하면서 `CSS Module`의 기능까지 제공하는 `style-jsx` 라이브러리를 제공한다.
* 사용법은 아래와 같다.
  ```html
  <style jsx>
    {` color: white; `}
  </style>
  ```
  + 추가로 `global` 속성을 줌으로써 현재 컴포넌트가 아닌 페이지 전체에 CSS 속성을 적용 하는 것도 가능하다.
* **이슈:** `Link` 컴포넌트로 인해 생성된 `a` 태그에는 선택자를 태그로 하던 클래스로 하던 `style-jsx`를 통한 스타일이 전혀 먹질 않는다.
  + `global` 속성을 주면 잘 먹는걸 보면 `style-jsx`의 CSS는 Next.js의 태그 생성과 CSS 적용에 어떤 순서 문제가 있는 걸로 보이는데 원인은 모르겠다...
  + `global` 속성 여부에 따른 클래스명의 변동도 없다.

### _app.js
* 각 라우팅 폴더에 `_app.js` 파일을 추가하면 해당 폴더 하위의 주소에 대해 적용되는 기본 레이아웃을 만들 수 있다.
* export하는 함수엔 Next.js가 첫번째 매개변수로 컴포넌트와 해당 컴포넌트에 적용될 매개변수를 보내주며 `{ Component, pageProps }` 와 같이 파라미터로 받아서 사용해주면 된다.

### public 폴더
* Next.js 프로젝트 루트에 있는 public 폴더는 주로 어디서든 접근 가능해야하는 이미지인 favicon 등의 리소스를 보관하는데 사용한다.
* 이 public 폴더에 보관된 리소스는 어디서든 `/{리소스 파일명}` 와 같이 루트 주소로 접근 가능하다.

### IIFE(Immediately Invoked Function Expression: 즉시 호출 함수 표현)
* IIFE는 Next.js의 기능이 아니라 JavaScript의 문법이며 `()();` 와 같이 사용하는 즉시 호출 익명 함수다. 아래는 IIFE의 주요 특징이다.
  + **즉시 실행:** IIFE는 선언과 동시에 즉시 실행되기 때문에 별도의 호출이 필요하지 않으며 선언된 자리에 함수를 남기는 익명 함수와 달리 실행 결과인 반환 값을 남긴다.
  + **스코프 격리:** IIFE는 여타 함수와 같이 내부의 변수와 함수를 격리하여 외부 스코프와의 충돌을 피할 수 있다. 또한 IIFE는 내부의 함수를 반환해 외부에 노출시키지 않는 이상은 재사용도 불가능 하기에 확실하게 변수 이름의 중복을 피할 수 있다.
  + **클로저 생성:** 외부 스코프의 변수를 IIFE 내부에서 사용하는 걸로 클로저가 생성되며 이를 이용해 비동기 작업의 처리를 보장하는데 사용할 수 있다. 이 프로젝트에서는 #2.1 강의에서 `/pages/index.js` 파일의 `useEffect()` 함수 내부에서 비동기 처리의 보장을 위해 IIFE가 사용되었다.

### redirects와 rewrites
* Next.js에서의 리다이렉트는 `next.config.js` 파일에서 이루어지며 `module.exports`에 들어가는 객체에 `redirects()` 함수나 `rewrites()` 함수를 담는 식으로 사용한다.
  + 두 함수는 `NextConfig` 인터페이스의 함수이며 두 함수 모두 `Promise` 객체를 반환하도록 되어있지만 구현에서 비동기 작업을 수행하지 않는다면 따로 `async`를 붙일 필요는 없다.
* `redirects()`와 `rewrites()`는 둘 다 리다이렉션을 구현하는 함수지만 두 함수에는 한가지 큰 차이점이 존재한다. 이는 URL의 변경이 어디서 이루어지는지에 대한 차이인데, `redirects()`의 경우 서버 측에서, `rewrites()`의 경우 클라이언트 측에서 URL의 변경이 이루어지게 된다. 이러한 차이점으로 인해 발생하는 사용 상의 차이점은 아래와 같다.
  + **`redirects()`:** `rewrites()`에 비해 서버가 더 많은 제어권을 가지고 있기에 복잡한 리다이렉션 규칙을 적용하기 좋으며 `permanent` 속성을 통해 영구 리다이렉션 여부를 지정해 검색 엔진에게 이전 URL에 대한 정보를 무시하도록 만들 수도 있다.
  + **`rewrites()`:** 단순한 페이지 이동이나 SEO(Search Engine Optimization)를 위한 URL의 재작성 시에 주로 사용된다.
* `redirects()` 함수는 구현 시 반환 타입인 `Promise<Redirect[]>`을 지키기 위해 `Redirect[]` 타입을 반환해야 한다. 때문에 반환되는 값은 배열 안의 `Redirect` 객체가 되는데 주로 사용되는 객체의 필드는 다음과 같다.
  + **source(string):** 리다이렉션이 발생하는 엔드포인트를 지정한다.
  + **destination(string):** `source`로부터 리다이렉션 될 엔드포인트를 지정한다.
  + **permanent(boolean):** 발생할 리다이렉션의 유형을 나타내며 `true`인 경우 영구 리다이렉션으로, `false`인 경우 일시적 리다이렉션으로 취급한다.
* `rewrites()` 함수의 경우 반환 타입이 `Promise<Rewrite[]>`로 `Rewrite[]` 타입을 반환해야 한다. `Rewrite` 객체는 `Redirect` 객체와 크게 다르지 않으며 주로 사용되는 필드는 `source`와 `destination`이 있다. (특징은 `Redirect` 객체와 같다.)

### .env
* `.env` 파일은 Next.js의 기능이 아니지만 새롭게 알아낸 기능의 파일이기에 여기 정리한다.
* `.env` 파일은 