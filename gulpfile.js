const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const gulp = require('gulp');
const babel = require('gulp-babel');

function buildJavascript()  {
  return src('js/index.js')   //man kan også skrive ("js/**/*.js") tager alle underlæggende mapper med samt alle filer der slutter på .js
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(dest('dist'));
}


// når der står require, så skal det installeres via npm install ( eksempel gulp-uglify)

function buildStyles() {
  return src('index.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  watch(['index.scss', 'js/index.js', '*.html' ], series (buildStyles, buildJavascript));
}

exports.default = series(buildStyles, buildJavascript, watchTask);