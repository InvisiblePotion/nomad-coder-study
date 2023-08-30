import gulp from "./node_modules/gulp";
import gulp_pug from "./node_modules/gulp-pug";
import del from "./node_modules/del";
import gulp_webServer from "./node_modules/gulp-webserver";
import gulp_image from "./node_modules/gulp-image";
import gulp_sass from "./node_modules/gulp-sass";
import node_sass from "./node_modules/node-sass";
import gulp_autoprefixer from "./node_modules/gulp-autoprefixer";
import gulp_csso from "./node_modules/gulp-csso";
import gulp_bro from "./node_modules/gulp-bro";
import babelify from "./node_modules/babelify";
import gulpGhPages from "./node_modules/gulp-gh-pages";

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
    js: {
        watch: "src/js/**/*.js",
        src: "src/js/main.js",
        dest: "build/js",
    },
};

const pug = () =>
    gulp.src(routes.pug.src).pipe(gulp_pug()).pipe(gulp.dest(routes.pug.dest));

const clean = () => del(["build/", ".publish"]);

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

const js = () =>
    gulp.src(routes.js.src).pipe(
        gulp_bro({
            transform: [
                babelify.configure({ presets: ["@babel/preset-env"] }),
                ["uglifyify", { global: true }],
            ],
        })
    ).pipe(gulp.dest(routes.js.dest));

const gh = () => gulp.src("build/**/*").pipe(gulpGhPages());

const watch = () => {
    gulp.watch(routes.pug.watch, pug);
    gulp.watch(routes.img.src, img);
    gulp.watch(routes.scss.watch, styles);
    gulp.watch(routes.js.watch, js);
};

// 준비: build 폴더를 삭제한 다음 이미지 최적화를 진행
const prepare = gulp.series([clean, img]);

// 에셋 컴파일: pug로 작성된 코드를 html로 변환
const assets = gulp.series([pug, styles, js]);

// 웹서버: 빌드된 코드로 웹서버 구동과 파일 변경 체커를 병렬 실행
const live = gulp.parallel([webserver, watch]);

// `npm run {script}`로 실행 가능하도록 export
export const build = gulp.series([prepare, assets]);
export const dev = gulp.series([build, live]);
export const deploy = gulp.series([build, gh, clean]);
