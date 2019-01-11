var gulp = require('gulp');

//Imported tasks
gulp.task('lint', require('./gulp/eslint'));

//Task
gulp.task('analyze', ['lint']);
gulp.task('pre-push', ['lint']);