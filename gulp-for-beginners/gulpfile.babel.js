import gulp from "gulp";
import gulp_pug from "gulp-pug";
import del from "del";
import gulp_webServer from "gulp-webserver";
import gulp_image from "gulp-image";

const routes = {
    pug: {
        watch: "src/**/*.pug",
        src: "src/*.pug",
        dest: "build",
    },
    img: {
        src: "src/img/*",
        dest: "build/img",
    },
};

const pug = () =>
    gulp.src(routes.pug.src).pipe(gulp_pug()).pipe(gulp.dest(routes.pug.dest));

const clean = () => del([routes.pug.dest]);

const webserver = () =>
    gulp.src("build").pipe(gulp_webServer({ livereload: true, open: true }));

const watch = () => {
    gulp.watch(routes.pug.watch, pug);
};

const img = () =>
    gulp
        .src(routes.img.src)
        .pipe(gulp_image())
        .pipe(gulp.dest(routes.img.dest));

// 준비: build 폴더를 삭제한 다음 이미지 최적화를 진행
const prepare = gulp.series([clean, img]);

// 에셋 컴파일: pug로 작성된 코드를 html로 변환
const assets = gulp.series([pug]);

// 웹서버: 빌드된 코드로 웹서버 구동과 파일 변경 체커를 병렬 실행
const postDev = gulp.parallel([webserver, watch]);

// `npm run dev` 커맨드에 준비, 에셋 컴파일, 웹서버의 순차 진행을 등록
export const dev = gulp.series([prepare, assets, postDev]);
