# ¿Cómo se ha configurado *Travis-CI*?

## travis.yml

**Lenguaje del proyecto en el que usamos integración continua:**

    language: node_js

**Versión del lenguaje:**

    node_js:
     - 10.16.2

#### Construcción para CI

Comandos para instalar dependencias:

    install:    
      - npm install

Comandos para ejecución de tests:

    scripts:    
      - npm test
