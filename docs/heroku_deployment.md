# Heroku deployment

___________________________________

> Índice

<!--ts-->
- [Heroku deployment](#heroku-deployment)
- [Continuous deployment: GitHub](#continuous-deployment-github)
<!--te-->

__________________________________________

A continuación se muestran los pasos seguidos para el despliegue con Heroku.

En primer lugar instalamos Heroku:

```shell
$ sudo snap install heroku --classic
```

Y hacemos login y creamos aplicación en Heroku, así preparamos Heroku para que la reciba:

```shell
$ heroku login

$ heroku create
```

Creamos un Procfile que contenga el comando que queremos que se ejecute para iniciar la aplicación, es decir, indicamos:

```shell
web: gulp start
```

Y hacemos push al remoto de Heroku para desplegar nuestro código:

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

# Continuous deployment: GitHub

Aquí se encuentra el procedimiento seguido para habilitar el despliegue continuo: [Heroku Continuous Deployment](https://github.com/pramartinez/IV_project/blob/master/docs/heroku_continuous_deployment.md)