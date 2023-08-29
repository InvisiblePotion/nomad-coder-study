import gulp from "gulp";
import gulp_pug from "gulp-pug";
import del from "del";
import gulp_webServer from "gulp-webserver";
import gulp_image from "gulp-image";
import gulp_sass from "gulp-sass";
import node_sass from "node-sass";
import gulp_autoprefixer from "gulp-autoprefixer";
import gulp_csso from "gulp-csso";

const sass = gulp_sass(node_sass);

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
    scss: {
        watch: "src/scss/**/*.scss",
        src: "src/scss/styles.scss",
        dest: "build/css",
    },
};

const pug = () =>
    gulp.src(routes.pug.src).pipe(gulp_pug()).pipe(gulp.dest(routes.pug.dest));

const clean = () => del([routes.pug.dest]);

const webserver = () =>
    gulp.src("build").pipe(gulp_webServer({ livereload: true, open: true }));

const img = () =>
    gulp
        .src(routes.img.src)
        .pipe(gulp_image())
        .pipe(gulp.dest(routes.img.dest));

const styles = () =>
    gulp
        .src(routes.scss.src)
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp_autoprefixer())
        .pipe(gulp_csso())
        .pipe(gulp.dest(routes.scss.dest));

const watch = () => {
    gulp.watch(routes.pug.watch, pug);
    gulp.watch(routes.img.src, img);
    gulp.watch(routes.scss.watch, styles);
};

// 준비: build 폴더를 삭제한 다음 이미지 최적화를 진행
const prepare = gulp.series([clean, img]);

// 에셋 컴파일: pug로 작성된 코드를 html로 변환
const assets = gulp.series([pug, styles]);

// 웹서버: 빌드된 코드로 웹서버 구동과 파일 변경 체커를 병렬 실행
const postDev = gulp.parallel([webserver, watch]);

// `npm run dev` 커맨드에 준비, 에셋 컴파일, 웹서버의 순차 진행을 등록
export const dev = gulp.series([prepare, assets, postDev]);
