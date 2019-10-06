# VPTournaments
## *Microservicio de gestión de torneos de voley playa*

*Proyecto de la asignatura Infraestructura Virtual*

[![license](https://img.shields.io/badge/license-GPLv3-brightgreen)](https://www.gnu.org/licenses/gpl-3.0.html)   [![version](https://img.shields.io/badge/version-v0.3-blue)](https://github.com/pramartinez/IV_project) [![build](https://travis-ci.org/pramartinez/IV_project.svg?branch=master)](https://travis-ci.org/pramartinez/IV_project/builds)

___________________________________

Índice
======
<!--ts-->
  - [¿Cuál es el objetivo de este proyecto?](#%c2%bfcu%c3%a1l-es-el-objetivo-de-este-proyecto)
  - [Descripción general y motivación](#descripci%c3%b3n-general-y-motivaci%c3%b3n)
  - [Funcionalidades a desarrollar](#funcionalidades-a-desarrollar)
  - [Implementación: herramientas y servicios](#implementaci%c3%b3n-herramientas-y-servicios)
  - [Descripción de la clase del proyecto](#descripcion-clase-proyecto)
    - [Métodos para incluir información sobre las parejas](#metodos-post) 
    - [Métodos para cancelar la inscripción de una pareja](#metodos-delete) 
    - [Métodos para consultar información de la competición](#metodos-get) 
    - [Métodos para modificar la información de una pareja](#metodos-put) 
  - [¿Cómo instalamos la clase del proyecto?](#instalacion-clase-proyecto)
  - [¿Cómo testeamos la clase?](#testear-clase-proyecto)
  - [Uso de la clase dentro del servicio](#uso-clase-servicio)
  - [Documentación adicional del proyecto](#doc-adicional)
<!--te-->

__________________________________________


## ¿Cuál es el objetivo de este proyecto?
VPTournaments consistirá en un microservicio de gestión de torneos de voley playa, donde se diferenciará en distintas categorías de juego.

## Descripción general y motivación
Un torneo de voley playa se constituye de una serie de parejas de integrantes, ya sean mixtas, femeninas o masculinas. El objetivo es que aquellas personas que quieran inscribirse al torneo, puedan hacerlo gracias a ***VPTournaments*** y que, además, luego puedan consultar cualquier información referente a la competición. Por tanto, el microservicio a construir se encargará de gestionar este tipo de recursos para poder facilitar la organización de la competición.

## Funcionalidades a desarrollar
-   Inscribirse en la liga en una categoría concreta: mixta, femenina, masculina.
-   Consultar información varia de cada categoría, pareja o de la competición.
-   Modificar parejas en caso de error en los datos o por cambio de jugador.
-   Cancelar inscripción de una pareja.

## Implementación: herramientas y servicios
El lenguaje de programación a emplear para el proyecto será *Node.js*:
- Lenguaje de programación: 
  - [Node.js](https://nodejs.org/es/about/).
- Web application frameworks: 
  - [Adonis](https://adonisjs.com/).
  - [Express](https://expressjs.com/es/).

Y para la realización de tests unitarios usamos el framework de testeo:
- [Jest](https://jestjs.io/).
  
Nuestro gestor de paquetes será:
- [Npm](https://www.npmjs.com/).

Por otro lado, aunque esté por concretar, se tratará de usar una base de datos para almacenar la información sobre los participantes que se vayan uniendo a la competición. Por ejemplo:
- [PostgreSQL](https://www.postgresql.org/).

Respecto a la integración continua, se podrá emplear Travis-CI:
- [Travis-CI](https://travis-ci.org/). 
 
Y como herramienta adicional podríamos probar:  
- [Shippable](https://app.shippable.com/).

Por otro lado, sería interesante emplear un servicio de log con el fin de llevar un rastro del flujo de nuestra aplicación, lo cual podría ayudar durante el desenvolvimiento de la misma:
- [Winston](https://github.com/winstonjs/winston).

Una vez llegado el momento de realizar el despliegue en la nube, se elegirá el servicio para ello y que, por ejemplo, podría ser: 
- [Heroku](https://www.heroku.com/home).
- [Microsoft Azure](https://azure.microsoft.com/es-es/free/search/?&ef_id=EAIaIQobChMIp7Gn16_z5AIVCLDtCh3jUA2cEAAYASAAEgJ_cfD_BwE:G:s&OCID=AID2000115_SEM_VAab2G2A&MarinID=VAab2G2A_325772882790_azure_e_c__68954907492_kwd-49508422&lnkd=Google_Azure_Brand&dclid=CJbPsNiv8-QCFRDV1QodhagCXw).


<a name="descripcion-clase-proyecto"></a>  
## Descripción real de la clase del proyecto   

La clase real del proyecto se compone de una serie de métodos que nos permitirán gestionar las parejas de una competición de voleibol. Para ello, distinguiremos entre tres tipos de métodos: los que añaden información (POST), los que eliminan información (DELETE), los que consultan información (GET) y los que modifican información (PUT). En un principio, la información de la que hablamos se irá almacenando en un archivo *json*.

<a name="metodos-post"></a>  
#### Métodos para incluir información sobre las parejas

Como método de este tipo tenemos el que se encarga de incribir a las parejas de la competición: toma los datos personales proporcionados, los procesa comprobando si son correctos, consulta las parejas que ya hay inscritas para asegurar que no se encuentren dos veces en el evento y, si no es así, finaliza incluyendo a la nueva pareja. 

<a name="metodos-delete"></a>  
#### Métodos para cancelar la inscripción de una pareja

En este caso nos encontramos con un método que toma unos datos personales de entrada (concretamente el DNI de los dos integrantes) y busca la información de la pareja correspondiente con el fin de eliminarla de la competición.

<a name="metodos-get"></a>  
#### Métodos para consultar información de la competición

Para consulta de datos, existen muchos métodos distintos en la clase que simplemente se centran en tomar qué se les pide y mostrar la información adecuada al respecto. Por ejemplo: podemos preguntar por la pareja de un integrante, por las las parejas de un categoría, por las parejas de la competición al completo, por la categoría de una pareja, por la pareja de un integrante en una categoría concreta (ya que pueden inscribirse en más de una distinta)...

<a name="metodos-put"></a>  
#### Métodos para modificar la información de una pareja

Como es normal, pueden producirse errores a la hora de introducir los datos personales de una pareja o, simplemente, uno de los integrantes se lesiona y los delegados de la competición le conceden (al no lesionado) la oportunidad de encontrar a un sustituto si lo desea. Por lo cual, se hará uso de un método para la modificación de los datos de las parejas del evento.

<a name="instalar-clase-proyecto"></a>  
## ¿Cómo instalamos la clase del proyecto?

Para comenzar, debemos de instalar la herramienta **npm**:

    $ apt install npm

Luego instalamos las dependencias con:

    $ npm install

<a name="testear-clase-proyecto"></a>  
## ¿Cómo testeamos la clase?
Para testear la clase simplemente tenemos que ejecutar:

    $ npm run test

<a name="uso-clase-servicio"></a>  
## Uso de la clase dentro del servicio

La idea es que esta clase sea la principal del proyecto, lo que implica que todas las acciones habrán de recaer sobre ella. Será la que se comunique entonces con la base de datos (si finalmente se decide añadir), se encargará de mediar con la información proporcionada por los usuarios, la gestionará, la procesará, la tratará...

<a name="doc-adicional"></a>  
## Documentación adicional del proyecto

¿Por qué he elegido las herramientas indicadas en [Implementación: herramientas y servicios](#implementaci%c3%b3n-herramientas-y-servicios)? Aquí se concretan algunos de los motivos:

- [Documentación adicional](https://github.com/pramartinez/IV_project/blob/master/documentation.md).