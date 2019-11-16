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

Hacemos ```login``` en el Heroku CLI. Este comando abre una ventana del buscador que tengamos por defecto y nos pedirá que iniciemos sesión en la página web de Heroku. Además es necesario para que tanto el comando ```heroku``` como el comando ```git``` funcionen correctamente.

```shell
$ heroku login
```

A continuación, como nuestra aplicación ya se encuentra en git y ya tiene su funcionalidad vigente y testeada, pasamos directamente a crear la aplicación en Heroku, así lo preparamos el PaaS para que la reciba:

```shell
$ heroku create
```

Usando este comando, un git remoto (```heroku```) se crea y se asocia con nuestro repositorio local de git. Heroku crea la aplicación con un nombre aleatorio que luego podemos cambiar.

Creamos un ***Procfile***, que es un archivo de texto simple que contiene el comando que queremos que se ejecute para iniciar la aplicación, es decir:

```shell
web: gulp start
```

De esta forma, se declara un proceso: ```web```, y el comando necesario para correrlo. Es importante usar el nombre ```web```, pues de esta forma se indica que dicho proceso se adjuntará a la pila de enrutamiento de HTTP de Heroku y recibirá el tráfico web cuando se implemente.

Y hacemos push al remoto de Heroku para desplegar nuestro código:

```shell
$ git push heroku master
```

Escalamos nuestra dyno (al menos una instancia):

```shell
$ heroku ps:scale web=1
```

Por defecto, nuestra aplicación se despliega en una dyno gratis. Si se produce una hora de inactividad respecto al tráfico de la red, esta se queda *dormida*, lo que implica añadir un poco de *delay* cuando se haga una próxima petición. Podemos consultar las dynos que están corriendo de la siguiente forma:

```shell
$ heroku ps
```

Y ya podemos acceder a la URL de la aplicación o ejecutar:

```shell
$ heroku open
```

Si queremos detener el despliegue reescalamos la dyno:

```shell
$ heroku ps:scale web=0
```

Podemos cambiar el nombre de la aplicación con:

```shell
$ heroku apps:rename vptournaments
```

Si queremos conocer los errores durante el despliegue, podemos recurrir a:

```shell
$ heroku logs --tail
```

# Continuous deployment: GitHub

Aquí se encuentra el procedimiento seguido para habilitar el despliegue continuo y la integración continua con Heroku: [Heroku Continuous Deployment and Continuous Integration](https://pramartinez.github.io/IV_project/heroku_continuous_deploy)