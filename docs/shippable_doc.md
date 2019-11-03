# ¿Cómo se ha configurado *Shippable*?

## shippable.yml

**Lenguaje del proyecto en el que usamos integración continua:**

Para comenzar, en el archivo de configuración de Shippable tenemos que indicar el lenguaje con el que se trabaja. En este caso es Node.js, por ello, lo incluimos de la siguiente forma:

    language: node_js

**Versiones del lenguaje:**

Como bien decíamos, el lenguaje de trabajo es Node.js, pero además, como queremos comprobar que nuestro proyecto funciona correctamente para más de una versión de dicho lenguaje, indicamos aquellas con las que queramos probar:

    node_js:
    - 10.16.2   # Hacemos pruebas para dos versiones del lenguaje
    - 12.10.0


#### Construcción para CI:

A continuación, pasamos a las acciones que principalmente nos interesan y que también ha de llevar a cabo el sistema de integración para la comprobarción del correcto funcionamiento del proyecto. En este caso, a Shippable se le ha encargado la tarea de comprobar que el despliegue local del microservicio se produce con éxito, además de la parada del mismo. Para esto, es necesario instalar la herramienta de construcción a emplear, que ahora es **Gulp**. Por tanto, indicamos que antes de llevar a cabo la invocación de los comandos para nosotros principales, se instale la herramienta Gulp:

    before_install:
      - npm install -g gulp  # para instalar herramienta de construcción

Ahora que ya disponemos de Gulp, podemos invocar sus tareas: en primer lugar ```gulp install``` para instalar las dependencias necesarias del microservicio, en segundo lugar, lo arrancamos con ```gulp start &``` (si no usamos el ampersand Shippable se queda realizando esta acción en foreground y luego no continuaría con la parada del microservicio); por último, paramos el microservicio con ```gulp stop```.

    script:
      - gulp install         # para instalar dependencias
      - gulp start &         # para arrancar microservicio
      - gulp stop            # para detener microservicio