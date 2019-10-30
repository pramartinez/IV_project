# ¿Cómo se ha configurado *Travis-CI*?

## travis.yml

**Lenguaje del proyecto en el que usamos integración continua:**

    language: node_js

**Versiones del lenguaje:**

    node_js:
     - 10.16.2    # Hacemos las pruebas para dos versiones del lenguaje 
     - 12.10.0

#### Construcción para CI

Instalación previa de la herramienta de construcción:

    before_install:
      - npm install gulp
  
Comandos para instalar dependencias:

    install:
        - gulp install

Comandos para ejecución de tests:

    script:
        - gulp test   # ejecución de tests unitarios y funcionales




