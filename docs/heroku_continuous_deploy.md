# Heroku Continuous Deployment

Como lo que nos interesa es no tener que estar trabajando con dos repositorios a la vez, es decir, el remoto de Heroku y el nuestro propio, vamos a recurrir a la configuración que se ofrece en la web de Heroku para habilitar el despliegue automático con GitHub. Además, vamos a indicar que se tengan que pasar los tests de Integración Continua pues es importante que el proyecto que vayamos a desplegar se encuentre correctamente construido siempre. A continuación se muestran los pasos seguidos:

#### Accedemos a los ajustes, concretamente al apartado ```Deploy``` 

Tenemos que acceder a la web de Heroku para ello porque por línea de comandos no es posible, por tanto, nos logueamos y entramos a los ajustes, al apartado ```Deploy```.

<img src="images/h1.png" width="500" height="550" />

####  Vamos a ```Deployment method``` y conectamos con GitHub:

Lo que queremos es modificar el método de despliegue, pues queremos que sea automático y con git, ya que cada vez que hagamos ```git push``` queremos evitar hacer ```git push heroku master```.

<img src="images/h2.png" width="500" height="550" />

#### Autorizamos la aplicación en GitHub:

Como es de esperar, este despliegue automático no es posible si no autorizamos el acceso de la aplicación a nuestro perfil.

<img src="images/h3.png" width="400" height="450" />

#### Ahora indicamos la aplicación que queremos conectar en ```App connected to GitHub```:

Volviendo a los ajustes de Heroku, indicamos el repositorio con el que queremos conectar. 

<img src="images/h4.png" width="500" height="550" />

#### En ```Automatic deploys``` indicamos la rama concreta (master) y marcamos que se tengan que pasar los tests de **integración continua** antes del despliegue:

Es importante que el código que se despliegue no contenga errores pues no tendría sentido tener corriendo una aplicación incorrecta. Es por esto que resulta de gran interés incluir tests de Integración Continua en el despliegue.

<img src="images/h7.png" width="500" height="550" />

