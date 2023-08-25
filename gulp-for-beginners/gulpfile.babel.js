import gulp from "gulp";
import gulp_pug from "gulp-pug";
import del from "del";

const routes = {
    pug: {
        src: "src/*.pug",
        dest: "build",
    },
};

const pug = () =>
    gulp.src(routes.pug.src).pipe(gulp_pug()).pipe(gulp.dest(routes.pug.dest));

const clean = () => del([routes.pug.dest]);

const prepare = gulp.series([clean]);

const assets = gulp.series([pug]);

export const dev = gulp.series([prepare, assets]);
