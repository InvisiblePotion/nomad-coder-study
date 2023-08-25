# Gulp 90분 마스터하기
### https://nomadcoders.co/gulp-for-beginners

2023-08-26 ~ ongoing

## 프로젝트 특이사항
### 설치된 패키지
* dependencies
    + `@babel/core: 7.22.11`
    + `@babel/preset-env: 7.22.10`
    + `@babel/register": 7.22.5`
    + `gulp: 4.0.2`
* devDependencies
    + `del: 4.1.1`
    + `gulp-pug: 5.0.0`

## 메모
### gulpfile
* `gulpfile`에는 변수에 명령을 집어넣고 해당 변수를 태스크 실행 함수로 실행 시키는 것으로 태스크를 실행 시킨다.
* 태스크 실행 변수는 원하는 이름의 변수에 할당한 후 해당 변수를 export 한 뒤 `package.json`의 `script` 요소에 `gulp {export한 변수 이름}` 와 같이 스크립트를 넣어 사용 할 수 있다.
* 태스크 실행 변수에는 4가지 종류가 있다.
    + `gulp.task()`: 
    + `gulp.series()`: 순차 실행
    + `gulp.parallel()`: 병렬 실행
    + `gulp.watch()`: 파일 변경을 감지하여 실행