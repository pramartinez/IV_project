# ¿Qué encontramos en *package.json*?


### Descripción básica del proyecto:

    {
    "name": "vptournaments",     # Nombre del microservicio
    "version": "3.0.0",          # Versión del proyecto
    "description": "Gestor de torneos de voley playa",    # Breve descripción del microservicio
    "main": "./app/funcionalidades.js",     # Clase principal del microservicio

###  Directorios donde se encuentran las clases del microservicio:
    "directories": {
    "app": "app",     #  Donde se encuentran las clases principales de la aplicación
    "dist": "dist",   #  Donde se encontrarán los archivos que no se ven influenciados por npm
    "test": "test"    #  Donde se encuentran los tests para comprobar buen funcionamiento de la aplicación
    },

###  Dependencias que se necesitan para la construcción del proyecto:
    "dependencies": {},
    "devDependencies": {
      "coveralls": "^3.0.6",    #  Para la cobertura del código
      "jest": "^24.9.0",        #  Para realización de tests unitarios
      "jsdoc": "^3.6.3",        #  Para crear y generar la documentación de la clase
      "jsdoc-to-markdown": "^5.0.1"    #  Para pasar la documentación creada a formato Markdown
    },

###  Comandos que ejecutará la herramienta de construcción
    "scripts": { 
       "test": "node_modules/.bin/jest --verbose ../test",
       "coveralls": "node_modules/.bin/jest --coverage && cat ./test/coverage/lcov.info | coveralls"
     },

###  Repositorio de github donde se encuentra el proyecto
    "repository": {
    "type": "git",
    "url": "git+https://github.com/pramartinez/IV_project.git"
    },

    "keywords": [  #  Palabras clave para la descripción del proyecto
    "nodejs",
    "javascript"
    ],

    "author": "Práxedes Martínez Moreno",
    "license": "GPL-3.0",

    "bugs": {
    "url": "https://github.com/pramartinez/IV_project/issues"    #  Issues para la construcción del proyecto
    },

    "homepage": "https://github.com/pramartinez/IV_project#readme"    #  Página principal del proyecto
    }
