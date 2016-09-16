var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  $ = require('gulp-load-plugins')();

gulp.task('js', function () {
  return gulp.src(['src/pf-footer.js'])
    .pipe($.plumber())
    .pipe($.babel(
      {presets: ['es2015']}
    ))
    .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
  return gulp.src('src/pf-footer.html')
    .pipe($.rename('pf-footer.local.html'))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
  return gulp.src(['node_modules/patternfly/less/patternfly.less',
    'node_modules/patternfly/less/patternfly-additions.less'])
    .pipe($.plumber())
    .pipe($.less())
    .pipe($.autoprefixer("last 3 versions", "> 1%"))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('vulcanize', ['html'], function () {
  return gulp.src('dist/pf-footer.local.html')
    .pipe($.vulcanize({dest: 'dist', inlineScripts: true, inlineCss: true}))
    .pipe($.rename('pf-footer.html'))
    .pipe(gulp.dest('dist'));
});

gulp.task('img', function(){
  return gulp.src(['./node_modules/patternfly/dist/img/*.*'])
    .pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', function(){
  return gulp.src(['./node_modules/patternfly/dist/fonts/*.*'])
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('copy', function () {
  return gulp.src([
    'node_modules/webcomponents.js/webcomponents.js'
  ])
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['js', 'html', 'css', 'copy', 'img', 'fonts', 'vulcanize']);

gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('src/*.js', ['build']);
  gulp.watch('src/*.html', ['build']);
  gulp.watch("dist/**/*").on('change', browserSync.reload);
});
