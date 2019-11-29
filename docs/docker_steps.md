# Getting started with Docker

___________________________________

> Índice

<!--ts-->
- [## Pasos seguidos](#pasos)
<!--te-->

__________________________________________

## Pasos seguidos

<a name="pasos"></a>

### Descargamos e instalamos Docker.

### Creamos un Dockerfile y un .dockerignore:

- En dockerfile incluimos:

- Ahora creamos un .dockerignore file. This will prevent your local modules and debug logs from being copied onto your Docker image and possibly overwriting modules installed within your image: 

node_modules
npm-debug.log

### Ahora vamos a desplegar nuestra imagen en Docker Hub:

- En primer lugar tenemos que tener una cuenta de Docker Hub.

- A continuación, tenemos que crear un repositorio de Docker Hub:  

Tenemos que ir a la web, al apartado de Repositorios y elegimos Crear Repositorio:

![](images/docker1.png)
![](images/docker2.png)
![](images/docker3.png)
![](images/docker4.png)
![](images/docker5.png)


Ahora lo que queremos es que se pasen los tests cuando hagamos push:
https://docs.travis-ci.com/user/docker/

https://techsquad.rocks/blog/go_continuous_integration_with_travis_ci_and_docker/



