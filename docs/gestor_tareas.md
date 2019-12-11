# Usando gulp para levantamiento y provisión de MVs

Una vez tenemos Ansible configurado. Lo siguiente sería configurar nuestro gestor de tareas (Gulp) para poder provisionar la máquina virtual. Simplemente tenemos que indicar la siguiente tarea nueva tarea:

```javascript
// Tarea para provisionar la MV
gulp.task('provision', function(done) {
  exec( 'vagrant provision', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});
```
