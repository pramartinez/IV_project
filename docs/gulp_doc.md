# Herramienta de Construcción GULP

___________________________________

Índice
======
<!--ts-->
  - [Install task](#install-task)
  - [Test task](#test-task)
  - [Start task](#start-task)
  - [Stop task](#stop-task)
  - [Redoc task](#redoc-task)
<!--te-->

__________________________________________

Veamos a continuación las tareas que encontramos en el archivo gulpfile.yml. Estas son las que emplearemos para construir nuestro microservicio, arrancarlo, detenerlo, etc.

## Install task

Esta tarea se encarga de instalar las dependecias del proyecto, para ello recurre a ```npm install```, que usa el [package.json](https://github.com/pramartinez/IV_project/blob/master/docs/construction_tool.md) para saber qué dependencias ha de instalar:

    gulp.task('install', shell.task(['npm install']));

## Test task

Para testear tanto la clase principal como la API Rest, se usa la siguiente tarea, que recurre a jest para llevar a cabo las comprobaciones necesarias:

    gulp.task('test', () => (
        gulp.src('test', {read: false})
            .pipe(jest({reporter:'default'}))
    ));

## Start task

Si lo que queremos es arrancar el microservicio, esta tarea se encarga de ello. Start emplea **pm2** para realizar el despliegue local: lanza ```bin/www``` y se indica el nombre del microservicio (```VPTournaments```), el modo de ejecución (```cluster```) y el número de instancias (cuatro). Además, imprime todos los logs que pueda generar *pm2* e imprime un mensaje informativo para indicar que se ha desplegado localmente: 

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

Lo recomendable es usar la tarea de la siguiente forma:

    $ gulp start &

para poder seguir trabajando aunque el arranque se haya llevado a cabo. 

## Stop task

Detiene el microservicio que ha debido de ser arrancado previamente. Para esto se recurre a *shell.task* que se encarga de ejecutar el comando de *pm2* desde recurriendo al shell:

    gulp.task('stop', shell.task(['pm2 stop VPTournaments']));

## Redoc task

Esta tarea adicional la uso para generar o actualizar la documentación del proyecto:

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

Así, cada vez que la modifique algún archivo simplemente uso

    $ gulp redoc

y se crea automáticamente la documentación tanto la de la clase principal como la de la API Rest.

