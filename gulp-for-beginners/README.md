# Gulp 90분 마스터하기
### https://nomadcoders.co/gulp-for-beginners

2023-08-26 ~ ongoing

## 프로젝트 특이사항
### 설치된 패키지
* devDependencies
    + `@babel/core: 7.22.11`
    + `@babel/preset-env: 7.22.10`
    + `@babel/register": 7.22.5`
    + `del: 4.1.1`
    + `gulp: 4.0.2`
    + `gulp-pug: 5.0.0`
    + `gulp-webserver: 0.9.1`
    + `gulp-image: 5.0.0`
    + `node-sass: 9.0.0`
    + `gulp-sass: 6.2.1`
    + `gulp-autoprefixer: 8.0.0`
    + `gulp-csso: 4.0.1`
    + `babelify: 10.0.0`
    + `uglifyify: 5.0.2`

## 메모
### babel
* `gulp`는 기본적으로 CommonJS 모듈 시스템의 문법을 따르는 듯 하다. 하지만 이 강의에서는 더 최신식인 ES6 모듈 시스템의 문법을 사용하기 위해 `babel`이라는 코드 변환 패키지를 사용하였다.
---
### del
* gulp를 이용한 자동화 과정에서 파일의 삭제를 간단히 하기 위해 `del`이라는 로컬 파일 삭제 패키지를 사용하였다.
---
### gulpfile
* `gulpfile`에는 변수에 명령을 집어넣고 해당 변수를 태스크 실행 함수로 실행 시키는 것으로 태스크를 실행 시킨다.
* 태스크 실행 변수는 원하는 이름의 변수에 할당한 후 해당 변수를 export 한 뒤 `package.json`의 `script` 요소에 `gulp {export한 변수 이름}` 와 같이 스크립트를 넣어 사용 할 수 있다.
* 태스크 실행 변수에는 4가지 종류가 있다.
    + `gulp.task()`: 기본적인 태스크 실행 변수
    + `gulp.series()`: 순차 실행
    + `gulp.parallel()`: 병렬 실행
    + `gulp.watch()`: 파일 변경을 감지하여 실행
---
### gulp 플러그인
* `gulp-pug`: `gulp`를 통해 `pug` 코드를 `html`로 변환하는 플러그인
* `gulp-webserver`: `gulp`를 사용하여 로컬 웹서버를 구현해주는 플러그인
* `gulp-image`: `gulp`를 사용하는 이미지 최적화 플러그인
* `gulp-sass`: `gulp`를 사용하여 `sass(scss)`를 컴파일 해주는 플러그인
    + 사용을 위해 `node-sass`의 설치가 필요하다.
* `gulp-autoprefixer`: `gulp`를 사용하여 `css`의 브라우저 호환성 옵션을 더해주는 플러그인
    + `package.json`에 `browserslist` 요소를 추가하여 호환성의 정도에 대한 옵션을 추가할 수 있다.
* `gulp-csso`: `gulp`를 사용하여 `css`를 최적화 해주는 플러그인
* `gulp-bro`: `gulp`를 사용하여 `Browserify` 기능을 사용하게 해주는 플러그인
    + `Browserify`는 브라우저 환경에서 ES6와 같은 Node.js 스타일의 모듈을 사용하기 위한 오픈소스 패키지다.
    + 추가로 `gulp-bro`를 사용하기 위해 `uglifyify` 패키지의 설치가 필요하다.