# Heroku Continuous Deployment

Como lo que nos interesa es no tener que estar trabajando con dos repositorios a la vez, es decir, el remoto de Heroku y el nuestro propio, vamos a recurrir a la configuración que se ofrece en la web de Heroku para habilitar el despliegue automático con GitHub. A continuación se muestran los pasos seguidos:

#### Accedemos a los ajustes, concretamente al apartado ```Deploy``` 

![]("https://github.com/pramartinez/IV_project/blob/master/docs/images/h1.png"){with=50%}

####  Vamos a ```Deployment method``` y conectamos con GitHub:

![]("https://github.com/pramartinez/IV_project/blob/master/docs/images/h2.png"){with=50%}

#### Autorizamos la aplicación en GitHub:

![]("https://github.com/pramartinez/IV_project/blob/master/docs/images/h3.png"){with=50%}

#### Ahora indicamos la aplicación que queremos conectar en ```App connected to GitHub```:

![]("https://github.com/pramartinez/IV_project/blob/master/docs/images/h4.png"){with=50%}

#### En ```Automatic deploys``` indicamos la rama concreta (master) y marcamos que se tengan que pasar los tests de integración continua antes del despliegue:

![]("https://github.com/pramartinez/IV_project/blob/master/docs/images/h7.png"){with=50%}

