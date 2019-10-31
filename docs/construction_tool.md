# ¿Qué encontramos en *package.json*?


### Descripción básica del proyecto:

    {
    "name": "vptournaments",     # Nombre del microservicio
    "version": "4.0.0",          # Versión del proyecto
    "description": "Gestor de torneos de voley playa",    # Breve descripción del microservicio
    "main": "./app/funcionalidades.js",     # Clase principal del microservicio

###  Directorios donde se encuentran las clases del microservicio:
    "directories": {
    "app": "app",     #  Donde se encuentran las clases principales de la aplicación
    "dist": "dist",   #  Donde se encontrarán los archivos que no se ven influenciados por npm
    "test": "test"    #  Donde se encuentran los tests para comprobar buen funcionamiento de la aplicación
    },

###  Dependencias que se necesitan para la construcción del proyecto:
    "dependencies": {
      "apidoc": "^0.17.7",
      "clean-css": "^4.2.1",
      "constantinople": "^4.0.1",
      "cookie-parser": "~1.4.4",
      "cross-env": "^6.0.3",
      "debug": "~2.6.9",
      "diff": "^4.0.1",
      "growl": "^1.10.5",
      "gulp-apidoc": "^0.2.8",
      "http-errors": "~1.6.3",
      "jade": "~1.11.0",
      "js-yaml": "^3.13.1",
      "jsdoc": "^3.6.3",
      "jsdoc-to-markdown": "^5.0.1",
      "morgan": "~1.9.1",
      "string": "^3.3.3",
      "swagger": "^0.7.5",
      "swagger-jsdoc": "^3.4.0",
      "swagger-ui-express": "^4.1.2",
      "yamljs": "^0.3.0"
    },
    "devDependencies": {
      "jest": "^24.9.0",        #  Para realización de tests unitarios
      "jsdoc": "^3.6.3",        #  Para crear y generar la documentación de la clase
      "jsdoc-to-markdown": "^5.0.1"    #  Para pasar la documentación creada a formato Markdown
      "express": "~4.16.1",     # Web framework
      "gulp": "^4.0.2",         # Herramienta de construcción
      "gulp-jest": "^4.0.3",
      "gulp-shell": "^0.7.1",
      "jest": "^24.9.0",        # Unit Test Framework
      "jest-cli": "^24.9.0",
      "pm2": "^4.1.2",          # gestor de procesos
      "supertest": "^4.0.2"     # Funcional test framework
    },

###  Comandos para la herramienta de construcción
    "scripts": { 
        "test": "node_modules/.bin/jest --verbose ../test", # tests
        "start": "pm2 start bin/www",   # arranque del microservicio
        "stop": "pm2 stop bin/www"      # detener microservicio
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

### Apartado para la documentación de la API Rest  
    "apidoc": {
        "name": "VPTournaments",
        "version": "4.0.0",
        "description": "apiDoc documentation for VPTournaments",
        "title": "VPTournaments documentation",
    }
    }
