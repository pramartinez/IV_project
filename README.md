# VPTournaments
## *Microservicio de gestión de torneos de voley playa*

*Proyecto de la asignatura Infraestructura Virtual*

[![license](https://img.shields.io/badge/license-GPLv3-brightgreen)](https://www.gnu.org/licenses/gpl-3.0.html)   [![version](https://img.shields.io/badge/version-v0.1-blue)](https://www.gnu.org/licenses/gpl-3.0.html)

## ¿Cuál es el objetivo de este proyecto?
VPTournaments consistirá en un microservicio de gestión de torneos de voley playa, donde se diferenciará en distintas categorías de juego.

## Descripción general y motivación
Un torneo de voley playa se constituye de una serie de parejas de integrantes, ya sean mixtas, femeninas o masculinas. El objetivo es que aquellas personas que quieran inscribirse al torneo, puedan hacerlo gracias a ***VPTournaments*** y que, además, luego puedan consultar por categorías, qué integrantes las componen. Por tanto, el microservicio a construir se encargará de gestionar este tipo de información para poder facilitar la organización de la competición.

## Funcionalidades a desarrollar
-   Inscribirse en la liga en una categoría concreta: mixta, femenina, masculina.
-   Consultar integrantes de cada categoría.

## Implementación: herramientas y servicios
El lenguaje de programación a emplear para el proyecto será *Python*, por lo que el web framework que se utilizará será *Flask*. Además, se usará el módulo *venv* para la creación del entorno virtual en el que trabajaremos.
- Lenguaje de programación: [Python](https://www.python.org/).
- Web application framework: [Flask](https://palletsprojects.com/p/flask/).
- Para el entorno virtual: [venv](https://docs.python.org/3/library/venv.html).

El porqué de elegir este lenguaje interpretado es que resulta ser muy intuitivo y, además, goza de muchas herramientas y funcionalidades de fácil acceso. Por otro lado, se ha seleccionado *Flask* como *web framework* por la flexibilidad y la simplicidad que parece aportar y porque parece sencillo de aprender.

Por otro lado, aunque esté por concretar, se tratará de usar una base de datos para almacenar la información sobre los participantes que se vayan uniendo a la competición. Por ejemplo:
- [MariaDB](https://mariadb.org/).
- [MongoDB](https://www.mongodb.com/es).

Respecto a la integración continua, se podrá emplear Travis-CI:
- [Travis-CI](https://travis-ci.org/).

Y para la realización de tests podríamos usar el framework de testeo *unittest*:
- [Unittest](https://docs.python.org/3/library/unittest.html).

Por otro lado, sería interesante emplear un sistema de logs con el fin de llevar un rastro del flujo de nuestra aplicación, lo cual podría ayudar durante el desenvolvimiento de la misma. Python tiene un módulo para ello:
- [Loggin Python](https://docs.python.org/3/library/logging.html).

El desarrollo del proyecto se llevará a cabo en el sistema operativo *Linux*, concretamente usando la distribución:
- [Ubuntu 18.04](http://releases.ubuntu.com/18.04/).

Una vez llegado el momento de realizar el despliegue en la nube, se elegirá la plataforma para ello y que, por ejemplo, podría ser: 
- [Heroku](https://www.heroku.com/home).
- [Microsoft Azure](https://azure.microsoft.com/es-es/free/search/?&ef_id=EAIaIQobChMIp7Gn16_z5AIVCLDtCh3jUA2cEAAYASAAEgJ_cfD_BwE:G:s&OCID=AID2000115_SEM_VAab2G2A&MarinID=VAab2G2A_325772882790_azure_e_c__68954907492_kwd-49508422&lnkd=Google_Azure_Brand&dclid=CJbPsNiv8-QCFRDV1QodhagCXw).


