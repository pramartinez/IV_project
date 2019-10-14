# ¿Cómo se ha configurado *Shippable*?

## shippable.yml

**Lenguaje del proyecto en el que usamos integración continua:**

    language: node_js

**Versión del lenguaje:**

    node_js:
    - 10.16.2

#### Construcción para CI:

    build:
        ci:
          - npm install        # Instalación de dependencias
          - npm run test       # Ejecución de los tests