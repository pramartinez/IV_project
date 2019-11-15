# ¿Qué herramientas y servicios se usarán para el proyecto?

- El lenguaje de programación del proyecto es [Node.js](https://nodejs.org/es/about/).

- Como web application framework usamos [Express](https://expressjs.com/es/).

- Para la realización de tests unitarios usamos el framework de testeo [Jest](https://jestjs.io/) y [Supertest](https://github.com/visionmedia/supertest) para tests funcionales.

- Por otro lado, aunque esté por concretar, se tratará de usar una base de datos para almacenar la información sobre los participantes que se vayan uniendo a la competición. Por ejemplo: [PostgreSQL](https://www.postgresql.org/).

- Respecto a la integración continua, se emplea [Travis-CI](https://travis-ci.org/). 
 
- Como herramienta alternativa a Travis-CI, se usa [Shippable](https://app.shippable.com/).

- Sería interesante emplear un servicio de log con el fin de llevar un rastro del flujo de nuestra aplicación, lo cual podría ayudar durante el desenvolvimiento de la misma [Winston](https://github.com/winstonjs/winston).

- El despliegue en la nube se ha realizado en: 
  - [Heroku](https://www.heroku.com/home).
  - [Microsoft Azure](https://azure.microsoft.com/es-es/free/search/?&ef_id=EAIaIQobChMIp7Gn16_z5AIVCLDtCh3jUA2cEAAYASAAEgJ_cfD_BwE:G:s&OCID=AID2000115_SEM_VAab2G2A&MarinID=VAab2G2A_325772882790_azure_e_c__68954907492_kwd-49508422&lnkd=Google_Azure_Brand&dclid=CJbPsNiv8-QCFRDV1QodhagCXw).

¿Por qué he elegido algunas de las herramientas indicadas en este apartado? [Aquí se concretan ciertos motivos](https://github.com/pramartinez/IV_project/blob/master/docs/documentation.md).

- Para saber cómo se ha configurado la herramienta de construcción usada en el proyecto puede consultar el siguiente enlace: [Configuración de Gulp](https://github.com/pramartinez/IV_project/blob/master/docs/gulp_doc.md).


- Respecto a la integración continua, se emplea [Travis-CI](https://travis-ci.org/) y [Shippable](https://app.shippable.com/). En esta versión del proyecto se ha decidido repartir las tareas entre ambos sistemas de integración continua. Travis se encarga de pasar los tests de la clase principal y de la API Rest, y Shippable se encarga de comprobar que el despliegue local del microservicio se lleva a cabo con éxito. 
  - Para saber cómo se ha configurado Travis-C pulse aquí: [¿Cómo se ha configurado *Travis-CI*?](https://github.com/pramartinez/IV_project/blob/master/docs/travis_doc.md).
  
  - Para saber cómo se ha configurado Shippabl pulse aquí: [¿Cómo se ha configurado *Shippable*?](https://github.com/pramartinez/IV_project/blob/master/docs/shippable_doc.md).

- Para saber qué contiene *package.json* o cómo se configuró la herramienta de construcción (npm) puede consultar el siguiente enlace: [¿Qué encontramos en *package.json*?](https://github.com/pramartinez/IV_project/blob/master/docs/construction_tool.md).