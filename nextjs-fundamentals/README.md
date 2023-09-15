# Next.js 시작하기
### https://nomadcoders.co/Next.js-fundamentals

2023-09-06 ~ ongoing

## 프로젝트 특이사항
### VSCode의 ESLint 플러그인 문제
* VSCode 작업 영역의 루트 폴더를 Next.js 프로젝트 폴더로 설정하지 않으면 ESLint가 제대로 작동하지 않는 문제가 있다. 작업 시에 주의 할 것.
  + 다른 IDE에서도 이런 문제가 있는지는 모르겠다... VSCode의 ESLint 서버 문제라고 생각 중.

### SSL: Server Side Rendering
* Next.js는 Static Pre Rendering(정적 사전 렌더링)을 통해 SSL을 구현한다. 페이지를 미리 렌더하여 캐싱해두고 요청이 들어오면 캐시된 페이지를 제공하기 때문에 클라이언트 측의 초기 페이지 로딩 속도가 매우 빠르며 클라이언트 측의 사양에도 크게 구애받지 않는다.
  + 물론 정적인 요소를 미리 html로 만들어 두어 첫 페이지의 로딩이 빠른 것이기에 페이지의 동적 요소에 필요한 스크립트가 로드되기 전까지는 동적 요소는 작동하지 않는다.
---
### Next.js 13 이후의 JSX Link 컴포넌트
* ReactJS에서 SPA(Single Page Application) 구현을 위해 `a` 태그 대신 페이지 이동 용으로 사용하는 `Link` 컴포넌트를 Next.js에서도 사용한다. 하지만 그 사용법이 약간 다르며 특히 Next.js 13버전부터 사용법이 변경되어 12버전인 강의와의 사용 방법 차이가 발생하고 있다.
* `Link` 컴포넌트에 `legacyBehavior` 속성을 사용하면 12버전까지의 사용법으로 사용 가능하다. 하지만 현재 버전은 13인 만큼 강의와 다르게 13버전의 사용법을 알아내서 같은 방식으로 구현해보겠다.
  + 이후 이와 같은 버전 차이로 인한 이슈 발생 시에 최신 버전의 방법대로 작성하겠다.
---
### style-jsx
* Next.js에서도 ReactJS와 같이 `module.css` 확장자를 사용한 CSS 파일을 js 파일에서 import하여 여러 CSS 파일에서 서로 겹치는 이름의 클래스에 CSS를 적용하더라도 파일 별로 랜덤 생성된 고유 클래스 명을 갖도록 만드는 `CSS Module`의 사용이 가능하다. 하지만 Next.js는 컴포넌트 안에서 CSS처럼 스타일을 정의하면서 `CSS Module`의 기능까지 제공하는 `style-jsx` 라이브러리를 제공한다.
* 아래와 같이 사용하며 `global` 속성을 줌으로써 현재 컴포넌트가 아닌 페이지 전체에 CSS 속성을 적용 하는 것도 가능하다.
  ```html
  <style jsx>
    {` color: white; `}
  </style>
  ```
---
### _app.js
* 각 라우팅 폴더에 `_app.js` 파일을 추가하면 해당 폴더 하위의 주소에 대해 적용되는 기본 레이아웃을 만들 수 있다.
* export하는 함수엔 Next.js가 첫번째 매개변수로 컴포넌트와 해당 컴포넌트에 적용될 매개변수를 보내주며 `{ Component, pageProps }` 와 같이 파라미터로 받아서 사용해주면 된다.