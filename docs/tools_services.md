# ¿Qué herramientas y servicios se usarán para el proyecto?

- El lenguaje de programación a emplear para el proyecto será [Node.js](https://nodejs.org/es/about/).

- Como web application framework usaremos [Express](https://expressjs.com/es/).

- Para la realización de tests unitarios usamos el framework de testeo [Jest](https://jestjs.io/)y [Supertest](https://github.com/visionmedia/supertest) para tests funcionales.

- Por otro lado, aunque esté por concretar, se tratará de usar una base de datos para almacenar la información sobre los participantes que se vayan uniendo a la competición. Por ejemplo: [PostgreSQL](https://www.postgresql.org/).

- Respecto a la integración continua, se emplea [Travis-CI](https://travis-ci.org/). 
 
- Como herramienta alternativa a Travis-CI, se usa [Shippable](https://app.shippable.com/).

- Sería interesante emplear un servicio de log con el fin de llevar un rastro del flujo de nuestra aplicación, lo cual podría ayudar durante el desenvolvimiento de la misma [Winston](https://github.com/winstonjs/winston).

- Una vez llegado el momento de realizar el despliegue en la nube, se elegirá el servicio para ello y que, por ejemplo, podría ser: 
  - [Heroku](https://www.heroku.com/home).
  - [Microsoft Azure](https://azure.microsoft.com/es-es/free/search/?&ef_id=EAIaIQobChMIp7Gn16_z5AIVCLDtCh3jUA2cEAAYASAAEgJ_cfD_BwE:G:s&OCID=AID2000115_SEM_VAab2G2A&MarinID=VAab2G2A_325772882790_azure_e_c__68954907492_kwd-49508422&lnkd=Google_Azure_Brand&dclid=CJbPsNiv8-QCFRDV1QodhagCXw).

**¿Por qué he elegido algunas de las herramientas indicadas en este apartado?** [Aquí se concretan ciertos motivos](https://github.com/pramartinez/IV_project/blob/master/docs/documentation.md).