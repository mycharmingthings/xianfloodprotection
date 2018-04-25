//引用gulp//类似于<script src="gulp.js">
var gulp = require("gulp");
//引入gulp-sass插件（该插件完成sass的编译，编译成CSS）
var sass = require("gulp-sass");
var cleanCss = require('gulp-clean-css');
//引入gulp-concat插件
var concat = require("gulp-concat");
//引入gulp-uglify插件 压缩js
var uglify = require("gulp-uglify");
//引入gulp-rename插件
var rename = require("gulp-rename");
//自动刷新
var connect  = require('gulp-connect');
//sass压缩
var rubySass = require('gulp-ruby-sass');
//兼容ES6
var  minify = require("gulp-babel-minify");

gulp.task("minify", function(){
gulp.src("js/*.js")
/*
  .pipe(minify({
    mangle: {
      keepClassName: true
    }
  }))
  */
  .pipe(gulp.dest("D:\\phpStudy\\WWW\\gulpmiaTest\\dist\\js"));
});

//以下赵老师方法
//压缩css
gulp.task('sass', function () {
    return rubySass('scss/*.scss', {
        sourcemap: false,
        style: 'compressed',
    }).pipe(gulp.dest('D:\\phpStudy\\WWW\\gulpmiaTest\\dist\\dist'));
});

// 压缩JS 不兼容ES6
// gulp.task('uglify', function () {
//     return gulp.src('js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('D:\\phpStudy\\WWW\\gulpmiaTest\\dist'));
// });

//以上赵老师方法

//把根目录下的所有的html文件复制到发布目录下
gulp.task("copy-html",function () {
    //复制文件
    gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\gulpmiaTest\\dist"));
});

//把根目录下的所有的js文件复制到发布目录下
gulp.task("copy-js",function () {
    //复制文件
    gulp.src("js/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\gulpmiaTest\\dist\\js"));
});

//把PHP文件夹下所有的php文件复制到发布目录下
gulp.task("copy-php",function () {
    //复制文件
    gulp.src("php/*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\gulpmiaTest\\dist\\php"));
});
    

//把img文件夹下所有的jpg文件复制到发布目录下
gulp.task("copy-jpg",function () {
    //复制文件
    //gulp.src("img/*.jpg").pipe(gulp.dest("D:\\phpStudy\\WWW\\gulpmiaTest\\dist\\img"));
    gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\gulpmiaTest\\dist\\img")); //将所有文件不管什么格式 png jpg gif都传过去
});

//开发目录是两个文件夹  发布目录是一个文件夹 将开发的两个文件夹合并到一个文件夹中
gulp.task("data",function(){
    gulp.src(["xml/*.xml","json/*.json","!json/test.json"])
    .pipe(gulp.dest("dist/data"));
})


//一次性执行多个任务
gulp.task("bat",["copy-index","copy-jpg"],function () {
    //第二个参数都是上面写的任务数组，给任务统一起的名叫bat(任务名任意起),["copy-index","copy-jpg"]
    //执行一下bat  ["copy-index","copy-jpg"]里的任务全执行了
});
 
//sass编译 定义一个sass编译任务
gulp.task("sassfile",function () {
    //把来源scss/*.scss路径下的文件，经过pipe调用sass函数编译，
    //编译完成之后调用gulp.dest把编译好的文件放入D:\\phpStudy\\WWW\\gulpmiaTest\\dist\\css
    gulp.src("scss/*.scss").pipe(sass()).pipe(gulp.dest("D:\\phpStudy\\WWW\\gulpmiaTest\\dist\\dist"));
});

// //合并文件
//  gulp.task("concatjs",function () {
//      //理解把两个来源的文件"js/index.js","js/goodslist.js" 通过pipe（）调用concat(),
//      //合并为名称为concat.js的一个文件，再通过pipe()调用gulp.gest()放到路径为
//      //D:\\phpStudy\\WWW\\gulpmiaTest\\dist\\js的文件夹中
//      gulp.src(["js/index.js","js/goodlist.js"])
//      .pipe(concat("concat.js"))
//       .pipe(gulp.dest("D:\\phpStudy\\WWW\\gulpmiaTest\\dist\\js"));
//  });

//合并并压缩
//  gulp.task("concatanguglifyjs",function () { 
//        //理解把两个来源的文件"js/index.js","js/goodslist.js" 通过pipe（）调用concat(),
//        //合并为名称为concat.js的一个文件, 再通过pipe()调用uglify() 压缩concat.js文件
//        //再通过pipe()调用gulp.gest()放到路径为
//        //D:\\phpStudy\\WWW\\gulpmiaTest\\dist\\js的文件夹中
//        gulp.src(["js/index.js","js/goodlist.js"])
//        .pipe(concat("concat.js"))
//        .pipe(uglify())
//        .pipe(gulp.dest("D:\\phpStudy\\WWW\\gulpmiaTest\\dist\\js"));
// });

//合并并压缩并重命名  /此函数有问题
// gulp.task("concatanguglifyandrenamejs",function () {
//     gulp.src(["js/2.js","js/3.js"])
//         .pipe(concat("4.js"))
//         .pipe(gulp.dest("D:\\phpStudy\\gulpmiaTest\\dist\\js"))
//         .pipe(uglify())
//         .pipe(rename("concat.min.js"))
//         .pipe(gulp.dest("D:\\phpStudy\\gulpmiaTest\\dist\\js"));
// });


//监听 gulp.watch  总函数有问题 要单独调用  压缩时写的['sass','minify'] 
gulp.task("watchall",['sass','minify'],function () {
    // connect.server({
    //     port: 9001,
    //     livereload: true
    // });gulp自带的服务器，但是不能阅读php文件
    gulp.watch("*.html",["copy-html"]);
    //gulp.watch("img/*.jpg",["copy-jpg"]);
    gulp.watch("img/**/*",["copy-jpg"]);//将所有文件不管什么格式 png jpg gif都传过去
    gulp.watch("js/*.js",["copy-js"]);
    gulp.watch("scss/*.scss",["sassfile"]);
    gulp.watch("php/*.php",["copy-php"]);
    //gulp.watch(["js/index.js","js/goodlist.js"],["concatjs"]);//只要这两个js文件任何一个发生了变化，就执行concatjs
    //gulp.watch(["js/index.js","js/goodlist.js"],["concatanguglifyjs"]);
    //gulp.watch(["js/index.js","js/goodlist.js"],["concatanguglifyandrenamejs"]); //此函数有问题
});
