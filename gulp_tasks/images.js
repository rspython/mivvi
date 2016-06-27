/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Images - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

// Images
//--------------------------------

gulp.task('images', function () {
    return gulp.src([
            config.paths.assets.images + '/**/*'
        ])
        .pipe(gulp.dest(config.paths.dist + '/images'));

});