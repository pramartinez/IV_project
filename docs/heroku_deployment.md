# Heroku deployment

___________________________________

> Índice

<!--ts-->
- [Heroku deployment](#heroku-deployment)
  - [¿Por qué Heroku?](#%c2%bfpor-qu%c3%a9-heroku)
  - [Pasos seguidos para construcción, configuración y despliegue:](#pasos-seguidos-para-construcci%c3%b3n-configuraci%c3%b3n-y-despliegue)
- [Continuous deployment: GitHub](#continuous-deployment-github)
<!--te-->

__________________________________________

## ¿Por qué Heroku?

He elegido Heroku como PaaS alternativo por su simplicidad a la hora de configurarlo y su facil uso. Además, como Microsoft Azure, tiene una documentación muy útil que te guía durante casi todo el procedimiento. Por otro lado, Heroku es muy sencillo de escalar inicialmente (Dynos) y goza de un gran soporte de plugins.

## Pasos seguidos para construcción, configuración y despliegue:

A continuación se muestran los pasos seguidos para el despliegue con Heroku.

En primer lugar instalamos Heroku:

```shell
$ sudo snap install heroku --classic
```

Hacemos login y creamos la aplicación en Heroku, así lo preparamos para que la reciba:

```shell
$ heroku login

$ heroku create
```

Creamos un ***Procfile*** que contenga el comando que queremos que se ejecute para iniciar la aplicación, es decir, indicamos:

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

Aquí se encuentra el procedimiento seguido para habilitar el despliegue continuo y la integración continua con Heroku: [Heroku Continuous Deployment and Continuous Integration](https://pramartinez.github.io/IV_project/heroku_continuous_deploy)