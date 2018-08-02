var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var pump = require('pump')

gulp.task('imagemin', function (cb) {
    pump([
        gulp.src('src/images/*/*.{png,jpg,gif,ico}'),
        imagemin({
            progressive: true,
            use: [pngquant()]
        }),
        gulp.dest('static/images')
    ],cb)
})

gulp.task('default', ['imagemin']);