//get src, dest from gulp 
const {src, dest, parallel, series, watch} = require('gulp');
//concat, merge files - npm i gulp-concat --save-dev
const concat = require('gulp-concat');
//terser, minify files - npm i gulp-terser -dev
const terser = require('gulp-terser');
//CSSNANO, minify files - npm i gulp-cssnano --save-dev
//const cssnano = require('gulp-cssnano');
//minify pictures CHANGE COMPRESSION I DOC.- npm i --save-dev gulp-imagemin
const imagemin = require('gulp-imagemin');
//install browser-sync - npm install browser-sync gulp --save-dev 
var browserSync = require('browser-sync').create();
//install node-sass & gulp-sass - npm install node-sass gulp-sass --save-dev
const sass = require('gulp-sass')(require('sass'));
//install gulp-transcript - npm install gulp-typescript typescript
var ts  = require('gulp-typescript');
//install babel with gulp - 
//Babel 6: npm install --save-dev gulp-babel@7 babel-core babel-preset-env
//Babel 7: npm install --save-dev gulp-babel @babel/core @babel/preset-env
//fix: npm install --save-dev "babel-core@^7.0.0-bridge.0"
const babel = require('gulp-babel');

//search path
const files = {
    htmlPath: "src/*.html",
//    cssPath: "src/**/*.css",
    jsPath: "src/JS/MAIN/*.js",
    jsPathClasses: "src/JS/CLASSES/*.js",
    jsPathUtilities: "src/JS/UTILITIES/*.js",
    imagePath: "src/IMAGES/*",
    sassPath: "src/**/*.scss",
    tsPath: "src/**/*.ts",
}


//HTML-task, copy HTML
function htmlCopy () {
    return src(files.htmlPath)
    .pipe(dest('pub'))
//    .pipe(browserSync.stream());
}

/*CSS-task 
function cssCopy () {
    return src(files.cssPath)
    .pipe(concat('main.css'))
    .pipe(cssnano())
    .pipe(dest('pub/css'))
    .pipe(browserSync.stream());
}*/

/*
//TS function    
function tsCopy() {
    return src(files.tsPath)
    .pipe(ts({
        noImplicitAny: true,
        outFile: 'transcript.js'
    }))
    .pipe(dest("src/JS"));
}*/

//JS-task
function jsCopy () {
    return src(files.jsPath)
    .pipe(babel({
//        presets: ['@babel/env']
    }))
    .pipe(concat('main.js'))
//   .pipe(terser())
    .pipe(dest('pub/JS/MAIN'))
//    .pipe(browserSync.stream());
}

/*
//JS-task CLASSES
function jsCopyClasses () {
    return src(files.jsPathClasses)
    .pipe(babel({
//        presets: ['@babel/env']
    }))
//    .pipe(terser())
    .pipe(dest('pub/JS/CLASSES'))
//    .pipe(browserSync.stream());
}
*/

/*
//JS-task UTILITIES
function jsCopyUtilities () {
    return src(files.jsPathUtilities)
   .pipe(babel({
//    presets: ['@babel/preset-env']
    }))
//    .pipe(terser())
    .pipe(dest('pub/JS/UTILITIES'))
//    .pipe(browserSync.stream());
}
*/

//image-task
function imageCopy () {
    return src(files.imagePath)
//    .pipe(imagemin())
    .pipe(dest('pub/IMAGES'));
}

function sassCopy() {
    return src(files.sassPath)
//        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("pub"))
//        .pipe(browserSync.stream());
}


//watch-task, LISTEN to changes
function watchTask () {
    browserSync.init({
        server: "./pub"});
    watch([/*files.tsPath*/, files.htmlPath, files.jsPath, files.imagePath, files.sassPath/*, files.jsPathClasses, files.jsPathUtilities*/], parallel(/*tsCopy,*/ htmlCopy, jsCopy, imageCopy, sassCopy/*, jsCopyClasses, jsCopyUtilities*/)).on('change', browserSync.stream);
}


//export function as functions are private
exports.default = series (
    parallel(/*tsCopy,*/ htmlCopy, jsCopy/*, jsCopyClasses, jsCopyUtilities*/, imageCopy, sassCopy),
    watchTask
);