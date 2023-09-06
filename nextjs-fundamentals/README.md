# NextJS 시작하기
### https://nomadcoders.co/nextjs-fundamentals

2023-09-06 ~ ongoing

## 프로젝트 특이사항
### VSCode의 ESLint 플러그인 문제
* VSCode 작업 영역의 루트 폴더를 NextJS 프로젝트 폴더로 설정하지 않으면 ESLint가 제대로 작동하지 않는 문제가 있다. 작업 시에 주의 할 것.
  + 다른 IDE에서도 이런 문제가 있는지는 모르겠다... VSCode의 ESLint 서버 문제라고 생각 중.

### SSL: Server Side Rendering
* NextJS는 Static Pre Rendering(정적 사전 렌더링)을 통해 SSL을 구현한다. 페이지를 미리 렌더하여 캐싱해두고 요청이 들어오면 캐시된 페이지를 제공하기 때문에 클라이언트 측의 초기 페이지 로딩 속도가 매우 빠르며 클라이언트 측의 사양에도 크게 구애받지 않는다.
  + 물론 정적인 요소를 미리 html로 만들어 두어 첫 페이지의 로딩이 빠른 것이기에 페이지의 동적 요소에 필요한 스크립트가 로드되기 전까지는 동적 요소는 작동하지 않는다.
---
### 