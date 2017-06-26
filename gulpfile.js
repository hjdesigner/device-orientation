var gulp          = require('gulp'),
    browserSync   = require('browser-sync');    

gulp.task('server', function(){
  browserSync.init({
    server: {
      baseDir: 'exemple-02'
    }
  });
  
  gulp.watch('exemple-02/**/*').on('change', browserSync.reload);

});