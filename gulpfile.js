var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	gulp.src('./layout/css/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./layout/css'))
	});
gulp.task('sass:watch', function(){
	gulp.watch('./layout/css/*.sass', ['sass']);
	});