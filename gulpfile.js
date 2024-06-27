const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
const cleanCSS = require('gulp-clean-css');

function buildStyles() {
	return src('ninja/**/*.scss')
		.pipe(sass())
		// .pipe(purgecss({ content: ['*.html'] }))
		// .pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(dest('css'))
}

function watchTask() {
	watch(['ninja/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
