const gulp = require('gulp');
// const uglifyJs = require('gulp-uglify');
const connect  = require('gulp-connect');
const rubySass = require('gulp-ruby-sass');
// const concat = require('gulp-concat');
const minify = require("gulp-babel-minify");

// 编译Sass
gulp.task('sass', function () {
    return rubySass('./src/sass/*.scss', {
        sourcemap: false,
        style: 'compressed',
    }).pipe(gulp.dest('./dist/css/'));
});

// 压缩JS
// gulp.task('minifyJs', function () {
//     return gulp.src('./src/js/*.js')
//         .pipe(uglifyJs())
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('./dist/js/'));
// });

gulp.task("minify", () =>{
    gulp.src("./src/js/*.js")
    /*.pipe(minify({
        mangle: {
            keepClassName: true
        }
    }))*/
    .pipe(gulp.dest("./dist/js/"));
});

//把img文件夹下所有的jpg文件复制到发布目录下
gulp.task("copy-jpg",function () {
    gulp.src("./img/*").pipe(gulp.dest("./dist/img/"));
});

//监听php文件
gulp.task("copy-php",function () {
    gulp.src("./php/*.php").pipe(gulp.dest("./dist/php/"));
});

//监听html文件
gulp.task("copy-html",function () {
    gulp.src("./*.html").pipe(gulp.dest("./dist/"));
});

// 自动刷新Html
gulp.task('html', ['sass', 'copy-jpg', 'minify', 'copy-php', 'copy-html'], function () {
    return gulp.src('./*.html').pipe(connect.reload());
});

// 监听
gulp.task('default', ['sass', 'copy-jpg', 'minify', 'copy-php', 'copy-html'], function () {
    // 开启服务器
    // connect.server({
    //     port: 9001,
    //     livereload: true
    // });
    gulp.watch('./img/*', ['html']);
    gulp.watch('./src/sass/*.scss', ['html']);
    gulp.watch('./src/js/*.js', ['html']);
    gulp.watch('./php/*.php', ['html']);
});