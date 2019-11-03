# ¿Cómo se ha configurado *Travis-CI*?

## travis.yml

**Lenguaje del proyecto en el que usamos integración continua:**

Inicialmente, para comenzar con la integración continua, hemos de indicar el lenguaje de programación con el que se trabaja en el proyecto. En nuestro caso es Node.js, por ello lo incluimos de la siguiente forma en el archivo de configuración de Travis CI:

    language: node_js

**Versiones del lenguaje:**

A continuación, como queremos comprobar la correcta integración para más de una versión del lenguaje del proyecto por si se desea trabajar con una distinta, se indica de la siguiente forma aquellas con las que queramos probar:

    node_js:
     - 10.16.2    # Hacemos las pruebas para dos versiones del lenguaje 
     - 12.10.0

#### Construcción para CI

La herramienta de construcción que se emplea en el proyecto es ahora **Gulp**, así pues, como necesitamos usarla para la integración continua tenemos que instalarla previamente:

    before_install:
      - npm install gulp
  
Una vez que tenemos a nuestra disposición la herramienta de construcción, podemos proceder a instalar las dependencias necesarias del microservivio. Para esto, recurrimos a la tarea ```install``` de gulp:

    install:
        - gulp install

Ya tendríamos instaladas las dependencias necesarias, ahora, como la tarea que le hemos asignado a Travis CI es la de comprobar que se pasan los tests tanto funcionales como de integración, se invoca la tarea de Gulp especializada en esto:

    script:
        - gulp test   # ejecución de tests unitarios y funcionales




