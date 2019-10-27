const gulp = require('gulp');
var jest = require('gulp-jest').default;
const pm2 = require('pm2');
const shell = require('gulp-shell');


gulp.task('test', () => (
    gulp.src('test', {read: false})
        .pipe(jest({reporter:'default'}))
));

gulp.task('start', function () {
  pm2.connect(true, function () {
    pm2.start({
      name: 'VPTournaments',
      script: 'bin/www',
      exec_mode: 'cluster',
      instances: 4
    }, function () {
         console.log('Arrancando VPTournaments.');
         pm2.streamLogs('all', 0);
       });
  });
});

gulp.task('stop', shell.task(['pm2 stop VPTournaments' ]));