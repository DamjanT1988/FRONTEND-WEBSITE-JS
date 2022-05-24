//PROGRAMMER: DAMJAN TOSIC
//get src, dest from gulp 
const { src, dest, parallel, series, watch } = require('gulp');
//concat, merge files - npm i gulp-concat --save-dev
const concat = require('gulp-concat');
//install browser-sync - npm install browser-sync gulp --save-dev 
var browserSync = require('browser-sync').create();
//install node-sass & gulp-sass - npm install node-sass gulp-sass --save-dev
const sass = require('gulp-sass')(require('sass'));
//install gulp-transcript - npm install gulp-typescript typescript
//Babel 7: npm install --save-dev gulp-babel @babel/core @babel/preset-env
//fix: npm install --save-dev "babel-core@^7.0.0-bridge.0"
const babel = require('gulp-babel');

//search path
const files = {
    htmlPath: "src/*.html",
    jsPath: "src/JS/*.js",
    jsPathClasses: "src/JS/CLASSES/*.js",
    imagePath: "src/IMAGES/*",
    sassPath: "src/**/*.scss",
    tsPath: "src/**/*.ts",
}


//HTML-task, copy HTML
function htmlCopy() {
    return src(files.htmlPath)
        .pipe(dest('pub'))

}

//JS-task
function jsCopy() {
    return src(files.jsPath)
        .pipe(babel({

        }))
        .pipe(concat('main.js'))

        .pipe(dest('pub/JS'))

}


//JS-task CLASSES
function jsCopyClasses() {
    return src(files.jsPathClasses)
        .pipe(babel({

        }))

        .pipe(dest('pub/JS/CLASSES'))

}


//image-task
function imageCopy() {
    return src(files.imagePath)

        .pipe(dest('pub/IMAGES'));
}

function sassCopy() {
    return src(files.sassPath)

        .pipe(sass().on("error", sass.logError))
        .pipe(dest("pub"))

}


//watch-task, LISTEN to changes
function watchTask() {
    browserSync.init({
        server: "./pub"
    });
    watch([, files.htmlPath, files.jsPath, files.imagePath, files.sassPath, files.jsPathClasses], parallel(htmlCopy, jsCopy, imageCopy, sassCopy, jsCopyClasses)).on('change', browserSync.stream);
}


//export function as functions are private
exports.default = series(
    parallel(htmlCopy, jsCopy, imageCopy, sassCopy),
    watchTask
);