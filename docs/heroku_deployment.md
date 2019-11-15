# Heroku deployment

A continuación se muestran los pasos seguidos para el despliegue con Heroku.

En primer lugar instalamos heroku:

```shell
$ sudo snap install heroku --classic
```

Y hacemos login y creamos aplicación en heroku, así preparamos heroku para que la reciba:

```shell
$ heroku login

$ heroku create
```

Creamos un Procfile que contenga el comando que queremos que se ejecute para iniciar la aplicación, es decir, indicamos:

```shell
web: gulp start
```

Y hacemos push al remoto de heroku para desplegar nuestro código:

```shell
$ git push heroku master
```

Escalamos nuestra Dyno:

```shell
$ heroku ps:scale web=1
```

Y ya podemos acceder a la URL de la aplicación:

```shell
$ heroku open
```

Si queremos detener el despliegue reescalamos la Dyno:

```shell
$ heroku ps:scale web=0
```

Luego podemos cambiar el nombre de la aplicación con:

```shell
$ heroku apps:rename vptournaments
```

Si queremos conocer los errores durante el despliegue, podemos recurrir a:

```shell
$ heroku logs --tail
```


https://devcenter.heroku.com/articles/getting-started-with-nodejs#scale-the-app