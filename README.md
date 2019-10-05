# VPTournaments
## *Microservicio de gestión de torneos de voley playa*

*Proyecto de la asignatura Infraestructura Virtual*

[![license](https://img.shields.io/badge/license-GPLv3-brightgreen)](https://www.gnu.org/licenses/gpl-3.0.html)   [![version](https://img.shields.io/badge/version-v0.3-blue)](https://github.com/pramartinez/IV_project) ![build](https://travis-ci.org/pramartinez/IV_project.svg?branch=master)

___________________________________

Índice
======
<!--ts-->
  - [¿Cuál es el objetivo de este proyecto?](#%c2%bfcu%c3%a1l-es-el-objetivo-de-este-proyecto)
  - [Descripción general y motivación](#descripci%c3%b3n-general-y-motivaci%c3%b3n)
  - [Funcionalidades a desarrollar](#funcionalidades-a-desarrollar)
  - [Implementación: herramientas y servicios](#implementaci%c3%b3n-herramientas-y-servicios)
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
  - [Express](https://expressjs.com/es/).
  - [Adonis](https://adonisjs.com/).

Por otro lado, aunque esté por concretar, se tratará de usar una base de datos para almacenar la información sobre los participantes que se vayan uniendo a la competición. Por ejemplo:
- [PostgreSQL](https://www.postgresql.org/).
- [MariaDB](https://mariadb.org/).
- [MongoDB](https://www.mongodb.com/es).

Respecto a la integración continua, se podrá emplear Travis-CI:
- [Travis-CI](https://travis-ci.org/).
Y como herramienta adicional:
- [Jekins](https://jenkins.io/).

Y para la realización de tests unitarios usamos el framework de testeo:
- [Jest](https://jestjs.io/).

Como herramienta de construcción podemos usar, por ejemplo:
- [Grunt](https://gruntjs.com/).
- [Brunch](https://brunch.io/).
- [Gulp](https://gulpjs.com/).

Por otro lado, sería interesante emplear un servicio de log con el fin de llevar un rastro del flujo de nuestra aplicación, lo cual podría ayudar durante el desenvolvimiento de la misma:
- [Winston](https://github.com/winstonjs/winston).

Una vez llegado el momento de realizar el despliegue en la nube, se elegirá el servicio para ello y que, por ejemplo, podría ser: 
- [Heroku](https://www.heroku.com/home).
- [Microsoft Azure](https://azure.microsoft.com/es-es/free/search/?&ef_id=EAIaIQobChMIp7Gn16_z5AIVCLDtCh3jUA2cEAAYASAAEgJ_cfD_BwE:G:s&OCID=AID2000115_SEM_VAab2G2A&MarinID=VAab2G2A_325772882790_azure_e_c__68954907492_kwd-49508422&lnkd=Google_Azure_Brand&dclid=CJbPsNiv8-QCFRDV1QodhagCXw).

