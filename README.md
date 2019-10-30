# VPTournaments
## *Microservicio de gestión de torneos de voley playa*

*Proyecto de la asignatura Infraestructura Virtual*

[![license](https://img.shields.io/badge/license-GPLv3-brightgreen)](https://www.gnu.org/licenses/gpl-3.0.html)   [![version](https://img.shields.io/badge/version-v4.0.0-blue)](https://github.com/pramartinez/IV_project) [![Build Status](https://travis-ci.org/pramartinez/IV_project.svg?branch=master)](https://travis-ci.org/pramartinez/IV_project) [![Run Status](https://api.shippable.com/projects/5d9a289f029be100073e11e9/badge?branch=master)]()

___________________________________

Índice
======
<!--ts-->
  - [¿Cuál es el objetivo de este proyecto?](#objetivo-de-este-proyecto)
  - [¿Por qué VPTournaments?](#vptournaments)
  - [¿Cuáles son las funcionalidades principales?](#funcionalidades-principales)
  - [¿Qué herramientas y servicios se usarán?](#herramientas-y-servicios)
  - [¿Cómo funciona la clase principal del proyecto?](#clase-principal-del-proyecto)
  - [¿Cómo funciona la API del proyecto?](#API-proyecto)
  - [¿Cómo instalamos las dependencias del proyecto?](#instalamos-la-clase-del-proyecto)
  - [¿Cómo testeamos el microservicio?](#testeamos-la-clase)
  - [¿Cómo desplegamos localmente el microservicio?](#desplegamos-microservicio)
<!--te-->

__________________________________________


<a name="objetivo-de-este-proyecto"></a>

## ¿Cuál es el objetivo de este proyecto?

VPTournaments consistirá en un microservicio de gestión de torneos de voley playa, donde se diferenciará en distintas categorías de juego.

Aquí se puede encontrar una descripción más detallada del objetivo, la motivación y el funcionamiento de la clase principal del proyecto: [VPTournaments Project](https://github.com/pramartinez/IV_project/blob/master/docs/descripcion_clase.md).



<a name="herramientas-y-servicios"></a>

## ¿Qué herramientas y servicios se usarán?

buildtool: gulpfile.yml

- El lenguaje de programación del proyecto es [Node.js](https://nodejs.org/es/about/).

- Para la realización de tests unitarios usamos el framework de testeo [Jest](https://jestjs.io/).
- Para la realización de los tests funcionales se ha empleado [Supertest](https://github.com/visionmedia/supertest).
  
- **En esta versión del proyecto se ha decido usar otra herramienta de construcción, concretamente [Gulp](https://gulpjs.com/). Para saber cómo se ha configurado esta herramienta de construcción puede consultar el siguiente enlace: [Configuración de Gulp](https://github.com/pramartinez/IV_project/blob/master/docs/gulp_doc.md).**


- **Respecto a la integración continua, se emplea [Travis-CI](https://travis-ci.org/) y [Shippable](https://app.shippable.com/). En esta versión del proyecto se ha decidido repartir las tareas entre ambos sistemas de integración continua. Travis se encarga de pasar los tests de la clase principal y de la API Rest, y Shippable se encarga de comprobar que el despliegue local del microservicio se lleva a cabo con éxito.**  
  - Para saber **cómo se ha configurado Travis-CI** pulse aquí: [¿Cómo se ha configurado *Travis-CI*?](https://github.com/pramartinez/IV_project/blob/master/docs/travis_doc.md).
  
  - Para saber **cómo se ha configurado Shippable** pulse aquí: [¿Cómo se ha configurado *Shippable*?](https://github.com/pramartinez/IV_project/blob/master/docs/shippable_doc.md).

- Para saber qué contiene *package.json* o cómo se configuró la herramienta de construcción (npm) puede consultar el siguiente enlace: [¿Qué encontramos en *package.json*?](https://github.com/pramartinez/IV_project/blob/master/docs/construction_tool.md).

Puedes ver el resto de herramientas y servicios aquí: [Herramientas y servicios](https://github.com/pramartinez/IV_project/blob/master/docs/tools_services.md). 


<a name="clase-principal-del-proyecto"></a>

## ¿Cómo funciona la clase principal del proyecto?

Antes de continuar, tal vez, le intesaría tener una **visión más global de la funcionalidad** de la clase principal del proyecto, si es así, puede indagar un poco más en esta documentación adicional: [Descripción de la Clase Principal](https://github.com/pramartinez/IV_project/blob/master/docs/descripcion_clase.md). 

Si, en cambio, desea explorar más a fondo dicha clase, aquí se proporciona la **documentación del código** de la misma: [Class Documentation](https://pramartinez.github.io/IV_project/vpt-doc/Funcionalidades.html).

<a name="API-proyecto"></a>

## ¿Cómo funciona la API Rest del proyecto?

**Si desea explorar el funcionamiento de esta, aquí se proporciona la documentación del código de la misma: [API Rest Documentation](https://pramartinez.github.io/IV_project/api-doc/index.html).**

**También puede arrancar el microservicio como se explica en el apartado [¿Cómo desplegamos localmente el microservicio?](#desplegamos-microservicio) y consultar la documentación generada con [Swagger](https://swagger.io/), que permite además hacer pruebas del funcionamiento. Para ello, una vez realizado el arranque, accedemos a ```localhost:3000/docs```.**


<a name="instalamos-la-clase-del-proyecto"></a>  

## ¿Cómo instalamos las dependencias del proyecto?

Instalamos las dependencias con:

    $ gulp teamos-la-clase"></a>

## ¿Cómo testeamos el microservicio?

Para ejecutar los tests tanto funcionales como unitarios tenemos que ejecutar:

    $ gulp test

**Puede consultar la documentación de los tests funcionales en el siguiente enlace: [Documentación de los tests de la API Rest](https://github.com/pramartinez/IV_project/blob/master/docs/tests_funcionales_doc.md).**

<a name="desplegamos-microservicio"></a>

## ¿Cómo desplegamos localmente el microservicio?

Para arrancarlo usamos el siguiente comando:

    $ gulp start &

y para detenerlo:

    $ gulp stop
