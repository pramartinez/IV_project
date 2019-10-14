# VPTournaments
## *Microservicio de gestión de torneos de voley playa*

*Proyecto de la asignatura Infraestructura Virtual*

[![license](https://img.shields.io/badge/license-GPLv3-brightgreen)](https://www.gnu.org/licenses/gpl-3.0.html)   [![version](https://img.shields.io/badge/version-v0.3.1-blue)](https://github.com/pramartinez/IV_project) [![Build Status](https://travis-ci.org/pramartinez/IV_project.svg?branch=master)](https://travis-ci.org/pramartinez/IV_project) [![Run Status](https://api.shippable.com/projects/5d9a289f029be100073e11e9/badge?branch=master)]()

___________________________________

Índice
======
<!--ts-->
  - [¿Cuál es el objetivo de este proyecto?](#objetivo-de-este-proyecto)
  - [¿Por qué VPTournaments?](#vptournaments)
  - [¿Cuáles son las funcionalidades principales?](#funcionalidades-principales)
  - [¿Qué herramientas y servicios se usarán?](#herramientas-y-servicios)
  - [¿Cómo funciona la clase principal del proyecto?](#clase-principal-del-proyecto)
  - [¿Cómo instalamos la clase del proyecto?](#instalamos-la-clase-del-proyecto)
  - [¿Cómo testeamos la clase?](#testeamos-la-clase)
<!--te-->

__________________________________________


<a name="objetivo-de-este-proyecto"></a>

## ¿Cuál es el objetivo de este proyecto?

VPTournaments consistirá en un microservicio de gestión de torneos de voley playa, donde se diferenciará en distintas categorías de juego.

<a name="vptournaments"></a>

## ¿Por qué VPTournaments?

Un torneo de voley playa se constituye de una serie de parejas de integrantes, ya sean mixtas, femeninas o masculinas. El objetivo es que aquellas personas que quieran inscribirse al torneo, puedan hacerlo gracias a ***VPTournaments*** y que, además, luego puedan consultar cualquier información referente a la competición. Por tanto, el microservicio a construir se encargará de gestionar este tipo de recursos para poder facilitar la organización de la competición.

<a name="funcionalidades-principales"></a>

## ¿Cuáles son las funcionalidades principales?

-   Inscribirse en la liga en una categoría concreta: mixta, femenina, masculina.
-   Consultar información varia de cada categoría, pareja o de la competición.
-   Modificar parejas en caso de error en los datos o por cambio de jugador.
-   Cancelar inscripción de una pareja.

<a name="herramientas-y-servicios"></a>

## ¿Qué herramientas y servicios se usarán?

- El lenguaje de programación a emplear para el proyecto será [Node.js](https://nodejs.org/es/about/).

- Para la realización de tests unitarios usamos el framework de testeo [Jest](https://jestjs.io/).
- Para saber **cómo se ha configurado la herramienta de construcción (npm)** puede consultar el siguiente enlace: [¿Qué encontramos en *package.json*?](https://github.com/pramartinez/IV_project/blob/master/docs/construction_tool.md).

- Respecto a la integración continua, se emplea [Travis-CI](https://travis-ci.org/). 
  - Para saber **cómo se ha configurado Travis-CI** pulse aquí: [¿Cómo se ha configurado *Travis-CI*?](https://github.com/pramartinez/IV_project/blob/master/docs/travis_doc.md).

- Como herramienta alternativa a Travis-CI, se usa [Shippable](https://app.shippable.com/).
  - Para saber **cómo se ha configurado Shippable** pulse aquí: [¿Cómo se ha configurado *Shippable*?](https://github.com/pramartinez/IV_project/blob/master/docs/shippable_doc.md).


**Puedes ver el resto de herramientas y servicios aquí:** [Herramientas y servicios](https://github.com/pramartinez/IV_project/blob/master/docs/tools_services.md). 


<a name="clase-principal-del-proyecto"></a>

## ¿Cómo funciona la clase principal del proyecto?

Antes de continuar, tal vez, le intesaría tener una **visión más global de la funcionalidad** de la clase principal del proyecto, si es así, puede indagar un poco más en esta documentación adicional: [Descripción de la Clase Principal](https://github.com/pramartinez/IV_project/blob/master/docs/descripcion_clase.md). 

Si, en cambio, desea explorar más a fondo dicha clase, aquí se proporciona la **documentación del código** actual de la misma: [Class Documentation](https://github.com/pramartinez/IV_project/blob/master/docs/class_doc.md).

<a name="instalamos-la-clase-del-proyecto"></a>  

## ¿Cómo instalamos la clase del proyecto?


Instalamos las dependencias con:

    $ npm install

<a name="testeamos-la-clase"></a>

## ¿Cómo testeamos la clase?

Para testear la clase simplemente tenemos que ejecutar:

    $ npm run test



