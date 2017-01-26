const gulp = require('gulp');
const eslint = require('gulp-eslint');
const flow = require('gulp-flowtype');
const config = require('./config');

const sourcePath = config.path.src+'/client/**/*.*';

gulp.task('lint', () =>
  gulp.src([sourcePath,'!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.failAfterError())
);

gulp.task('flow', () =>
  gulp.src(sourcePath)
    .pipe(flow({
      all: false,
      weak: false,
      killFlow: false,
      beep: false,
      abort: false
    }))
);

gulp.task('check', ['lint', 'flow']);

gulp.task('check-watch', ['check'], () => {
  gulp.watch(sourcePath, ['check']);
});

