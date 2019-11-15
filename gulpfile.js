const gulp = require('gulp');
var jest = require('gulp-jest').default;
const pm2 = require('pm2');
const shell = require('gulp-shell');
var apidoc = require('gulp-apidoc');
var exec = require('child_process').exec;

// Tarea para instalación de dependencias
gulp.task('install', shell.task(['npm install']));

// Tarea para ejecución de tests
gulp.task('test', () => (
    gulp.src('test', {read: false})
        .pipe(jest({reporter:'default'}))
));

// Tarea para arrancar el microservicio
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

// Tarea para parar el microservicio
gulp.task('stop', shell.task(['pm2 stop VPTournaments']));

// Tarea para generar la documentación del proyecto
gulp.task('redoc', function(done) {
  exec('jsdoc ./app/mainClass.js -d ./docs/vpt-doc', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
  apidoc({
    src: "./routes",
    dest: "./docs/api-doc",
    config: "./"}, 
    done);
});

// Tarea para desplegar el microservicio
gulp.task('build', function (done) {
  exec('npm start', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});