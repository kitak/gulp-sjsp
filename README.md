# [gulp-sjsp](https://npmjs.org/package/gulp-sjsp)

## install

Install via [npm](https://npmjs.org/package/gulp-sjsp):

```
npm install gulp-sjsp --save-dev
```

## Usage

This is `gulpfile.js` sample.

```js
var gulp = require('gulp');
var sjsp = require('gulp-sjsp');

gulp.task('sjsp', function () {
  gulp.src('./alpha.js')
      .pipe(sjsp())
      .pipe(gulp.dest('./dist'));
});
```

Configure output interval.

```js
var gulp = require('gulp');
var sjsp = require('gulp-sjsp');

gulp.task('sjsp', function () {
  gulp.src('./alpha.js')
      .pipe(sjsp({interval: 5}))
      .pipe(gulp.dest('./dist'));
});
```

### License
MIT: http://kitak.mit-license.org
