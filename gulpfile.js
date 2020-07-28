const gulp = require('gulp');

let config = {
    paths: {
        src: {
            html: [
                './src/*.html'
            ],
            css: [
                './src/*.css'
            ]
        },
        dist: './dist'
    }
};

// const concat = require('gulp-concat');


gulp.task('html', function() {
    return gulp.src(config.paths.src.html)
        .pipe(gulp.dest(config.paths.dist));
});


gulp.task('css', function () {
  const postcss = require('gulp-postcss')

  return gulp.src(config.paths.src.css)
    // ...
    .pipe(postcss([
      // ...
      require('tailwindcss'),
      require('autoprefixer'),
      // ...
    ]))
    // ...
    .pipe(gulp.dest(config.paths.dist))
})
