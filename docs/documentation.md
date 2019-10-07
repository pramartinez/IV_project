# Motivación

__________________________________________

Índice
======
<!--ts-->
- [Motivación](#motivaci%c3%b3n)
- [Índice](#%c3%8dndice)
  - [¿Por qué Node.js?](#%c2%bfpor-qu%c3%a9-nodejs)
  - [¿Por qué Jest?](#%c2%bfpor-qu%c3%a9-jest)
  - [¿Por qué Travis-CI?](#%c2%bfpor-qu%c3%a9-travis-ci)
<!--te-->

__________________________________________

## ¿Por qué [Node.js](https://nodejs.org/es/about/)?

Para el proyecto he elegido como lenguaje de desarrollo **JavaScript** (en realidad, Node.js). Esto ha sido debido a que me parece genial la idea de aprender un nuevo lenguaje que nunca antes había manejado y, además, palabras textuales de su página web: *"Concebido como un entorno de ejecución de JavaScript orientado a eventos asíncronos, Node.js está diseñado para construir aplicaciones en red escalables"* [¹](https://nodejs.org/es/about/), lo cual me indicó que, para este tipo de proyecto, sería muy útil. También, resulta que HTTP es tratado con agilidad por parte de **Node.js**: consta de una serie de operaciones de streaming y baja latencia, *"Esto hace a Node.js candidato para ser la base de una librería o un framework web"*. Pero, ¿quién no podría *"por lo todo lo alto"* su propio producto? Así pues, consultando otras fuentes de información descubrí que Node.js: tiene un rendimiento altamente notable, permite crear apps altamente escalables y de forma más rápida, es recomendable para apps de tiempo real, su ejecución es en tiempo de ejecución (lo cual implica una mayor optimización)...

## ¿Por qué [Jest](https://jestjs.io/)?

Este ***"JavaScript Testing Framework"*** prima por centrar su foco en la simplicidad y por ser muy rápido y seguro. Además, cuando algún test falla, se proporciona información detallada sobre ello (lo cual es muy importante para mí, sobre todo porque es la primera vez que uso Node.js y que hago un testeo de mi código). Por otro lado, **Jest** es muy sencillo de instalar, pero no solo sobresale este framework únicamente por lo anterior, sino además, porque ofrece **simulaciones de mock** (*se llaman objetos simulados a los objetos que imitan el comportamiento de objetos reales de una forma controlada. Se usan para probar a otros objetos en pruebas unitarias que esperan mensajes de una clase en particular para sus métodos* [²]([Objeto_simulado](https://es.wikipedia.org/wiki/Objeto_simulado))) y **cobertura de código** (para determinar la calidad del test, las partes críticas del código comprobadas o no, para detectar código inalcanzable... [³](https://es.wikipedia.org/wiki/Cobertura_de_c%C3%B3digo)), etc.

## ¿Por qué [Travis-CI](https://travis-ci.org/)?

En primer lugar, es necesario comentar el interés residente en el uso de integración. Usar herramientas como **Travis CI** nos aporta una seguridad mayor a la hora del desarrollo de nuestro proyecto, pues estas se encargan de testear nuestro programa cada vez que realizamos un commit a GitHub. De esta forma, podemos descubrir fácilmente dónde hemos cometido un fallo o por dónde hemos "roto" nuestro código. 

Concretamente empleo Travis-CI, aparte de porque se me ha recomendado, porque es muy sencillo de usar (simplemente accedemos a su página web, habilitamos nuestro repositorio, añadimos un archivo shippeable.yml y ya podemos comenzar a utilizarlo), es claro a la hora de mostrar dónde se han producido los errores, es una herramienta gratuita...

***To be continued...***