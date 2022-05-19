//get src, dest from gulp 
const {src, dest, parallel, series, watch} = require('gulp');
//install browser-sync - npm install browser-sync gulp --save-dev 
var browserSync = require('browser-sync').create();
//install node-sass & gulp-sass - npm install node-sass gulp-sass --save-dev
const sass = require('gulp-sass')(require('sass'));

//search path
const files = {
    sassPath: "*.scss"
}

function sassCopy() {
    return src(files.sassPath)
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("pub"))
        .pipe(browserSync.stream());
}

//watch-task, LISTEN to changes
function watchTask () {
    browserSync.init({
        server: "./pub"});
    watch([files.sassPath], parallel(sassCopy)).on('change', browserSync.reload);
}

//export function as functions are private
exports.default = series (
    parallel(sassCopy),
    watchTask
);