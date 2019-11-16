# azure-pipelines.yml
    
En primer lugar se referencia la rama del repositorio sobre la que se trabaja:

    trigger:
    - master

Luego se incluye la versión de la imagen de la vm que queremos usar.
    
    pool:
      vmImage: 'ubuntu-latest'
    
Ahora indicamos la configuración del lenguaje que empleamos (versión y el nombre de la tarea):

    steps:
    - task: NodeTool@0
      inputs:
        versionSpec: '10.x'
      displayName: 'Install Node.js'
    
Por último se incluyen los comandos que se van a ejecutar:

    - script: |
        npm install
        gulp test
        gulp start &
        gulp stop
      displayName: 'Install, test and build'
