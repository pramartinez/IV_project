# ¿Cómo se ha configurado *Shippable*?

## shippable.yml

**Lenguaje del proyecto en el que usamos integración continua:**

    language: node_js

**Versiones del lenguaje:**

    node_js:
    - 10.16.2   # Hacemos pruebas para dos versiones del lenguaje
    - 12.10.0


#### Construcción para CI:

    before_install:
      - npm install -g gulp  # para instalar herramienta de construcción

    script:
      - gulp install         # para instalar dependencias
      - gulp start &         # para arrancar microservicio
      - gulp stop            # para detener microservicio