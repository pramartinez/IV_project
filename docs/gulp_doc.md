# Herramienta de Construcción GULP

___________________________________

Índice
======
<!--ts-->
- [Herramienta de Construcción GULP](#herramienta-de-construcci%c3%b3n-gulp)
- [Índice](#%c3%8dndice)
  - [Install task](#install-task)
  - [Test task](#test-task)
  - [Start task](#start-task)
  - [Stop task](#stop-task)
  - [Redoc task](#redoc-task)
<!--te-->

__________________________________________

Veamos a continuación las tareas que encontramos en el archivo gulpfile.yml que son las que emplearemos para construir nuestro microservicio, arrancarlo, detenerlo, etc.

## Install task

Esta tarea se encarga de instalar las dependecias del nuestro proyecto, para ello recurre a npm install, que usa el [package.json](https://github.com/pramartinez/IV_project/blob/master/docs/construction_tool.md).

    gulp.task('install', shell.task(['npm install']));

## Test task

Para testear tanto la clase principal como la API Rest, se usa la siguiente tarea, que recurre a jest para llevar a cabo las comprobaciones necesarias:

    gulp.task('test', () => (
        gulp.src('test', {read: false})
            .pipe(jest({reporter:'default'}))
    ));

## Start task

Si lo que queremos es arrancar el microservicio, esta tarea se encarga de ello. Start emplea pm2 para 

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

## Stop task

    gulp.task('stop', shell.task(['pm2 stop VPTournaments']));

## Redoc task

    gulp.task('redoc', function(done) {
      exec('jsdoc ./app/funcionalidades.js -d ./docs/vpt-doc', function(err, stdout, stderr) {
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
