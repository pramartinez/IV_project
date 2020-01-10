# VPTournaments
## *Microservicio de gestión de torneos de voley playa*

*Proyecto de la asignatura Infraestructura Virtual*

[![license](https://img.shields.io/badge/license-GPLv3-brightgreen)](https://www.gnu.org/licenses/gpl-3.0.html)   [![version](https://img.shields.io/badge/version-v6.0.0-blue)](https://github.com/pramartinez/IV_project) [![Build Status](https://travis-ci.org/pramartinez/IV_project.svg?branch=master)](https://travis-ci.org/pramartinez/IV_project) [![Run Status](https://api.shippable.com/projects/5d9a289f029be100073e11e9/badge?branch=master)]() [![Build Status](https://dev.azure.com/pramtnez/VPTournaments/_apis/build/status/pramartinez.IV_project?branchName=master)](https://dev.azure.com/pramtnez/VPTournaments/_build/latest?definitionId=1&branchName=master) <!--[![Coverage Status](https://coveralls.io/repos/github/pramartinez/IV_project/badge.svg?branch=master)](https://coveralls.io/github/pramartinez/IV_project?branch=master)--> ![Heroku](https://pyheroku-badge.herokuapp.com/?app=vptournaments&style=plastic) ![Docker Hub](https://dockeri.co/image/pramartinez/vptournaments) 



___________________________________

> Índice

<!--ts-->
- [VPTournaments](#vptournaments)
  - [Microservicio de gestión de torneos de voley playa](#microservicio-de-gesti%c3%b3n-de-torneos-de-voley-playa)
  - [¿Cuál es el objetivo de este proyecto VPTournaments?](#%c2%bfcu%c3%a1l-es-el-objetivo-de-este-proyecto-vptournaments)
  - [¿Qué herramientas y servicios se usarán?](#%c2%bfqu%c3%a9-herramientas-y-servicios-se-usar%c3%a1n)
  - [¿Cómo funciona la clase principal del proyecto?](#%c2%bfc%c3%b3mo-funciona-la-clase-principal-del-proyecto)
  - [¿Cómo funciona la API Rest del proyecto?](#%c2%bfc%c3%b3mo-funciona-la-api-rest-del-proyecto)
  - [¿Cómo instalamos las dependencias del proyecto?](#%c2%bfc%c3%b3mo-instalamos-las-dependencias-del-proyecto)
  - [¿Cómo testeamos el microservicio?](#%c2%bfc%c3%b3mo-testeamos-el-microservicio)
  - [¿Cómo desplegamos localmente el microservicio?](#%c2%bfc%c3%b3mo-desplegamos-localmente-el-microservicio)
  - [Despliegue del microservicio en Azure](#despliegue-del-microservicio-en-azure)
  - [Despliegue del microservicio en Heroku](#despliegue-del-microservicio-en-heroku)
  - [Usando contenedores para el microservicio](#usando-contenedores-para-el-microservicio)
  - [Creación, levantamiento y aprovisionamiento de máquinas virtuales](#creaci%c3%b3n-levantamiento-y-aprovisionamiento-de-m%c3%a1quinas-virtuales)
    - [Creación, levantamiento de VMs con Azure + Aprovisionamiento con Ansible](#creaci%c3%b3n-levantamiento-de-vms-con-azure--aprovisionamiento-con-ansible)
      - [Documentación](#documentaci%c3%b3n)
    - [Creación, levantamiento de VMs con Vagrant + Aprovisionamiento con Ansible](#creaci%c3%b3n-levantamiento-de-vms-con-vagrant--aprovisionamiento-con-ansible)
      - [Documentación](#documentaci%c3%b3n-1)
  - [Despliegue final](#despliegue-final)
      - [Documentación](#documentaci%c3%b3n-2)
<!--te-->

__________________________________________


<a name="objetivo-de-este-proyecto"></a>

## ¿Cuál es el objetivo de este proyecto [VPTournaments](https://pramartinez.github.io/IV_project/descripcion_clase)?

VPTournaments consistirá en un microservicio de gestión de torneos de voley playa, donde se diferenciará en distintas categorías de juego.

<a name="herramientas-y-servicios"></a>

## ¿Qué herramientas y servicios se usarán?

buildtool: gulpfile.js

Puedes consultar las de herramientas y servicios usados en el proyecto aquí: [Herramientas y servicios](https://pramartinez.github.io/IV_project/tools_services). 


<a name="clase-principal-del-proyecto"></a>

## ¿Cómo funciona la clase principal del proyecto?

[Descripción de la Clase Principal](https://pramartinez.github.io/IV_project/descripcion_clase). 

[Class Documentation](https://pramartinez.github.io/IV_project/vpt-doc/mainClass.html).

<a name="API-proyecto"></a>

## ¿Cómo funciona la API Rest del proyecto?

[API Rest Documentation](https://pramartinez.github.io/IV_project/api_doc).

[API Rest Code Documentation](https://pramartinez.github.io/IV_project/api-doc/index.html).

[¿Cómo desplegamos localmente el microservicio?](#desplegamos-microservicio) 

Documentación generada con [Swagger](https://swagger.io/): una vez realizado el arranque, accedemos a ```localhost:3000/docs```.


<a name="instalamos-la-clase-del-proyecto"></a>  

## ¿Cómo instalamos las dependencias del proyecto?

Instalamos las dependencias con:

    $ npm install

<a name="testeamos"></a>  

## ¿Cómo testeamos el microservicio?

Para ejecutar los tests tanto funcionales como unitarios tenemos que ejecutar:

    $ gulp test

[Documentación de los tests de la API Rest.](https://pramartinez.github.io/IV_project/tests_funcionales_doc)

<a name="desplegamos-microservicio"></a>

## ¿Cómo desplegamos localmente el microservicio?

Para arrancarlo usamos el siguiente comando:

    $ gulp start &

y para detenerlo:

    $ gulp stop

## Despliegue del microservicio en Azure

<a name="desplegamos-azure"></a>

Despliegue: http://vptournaments.azurewebsites.net/

- [Despliegue en Microsoft Azure.](https://pramartinez.github.io/IV_project/azure_deployment)

- [Azure Continuous Deployment and Continuous Integration.](https://pramartinez.github.io/IV_project/azure_continuous_deploy)


## Despliegue del microservicio en Heroku

<a name="desplegamos-heroku"></a>

Despliegue alternativo: https://vptournaments.herokuapp.com/

- [Despliegue en Heroku.](https://pramartinez.github.io/IV_project/heroku_deployment)
  
- [Heroku Continuous Deployment and Continuous Integration.](https://pramartinez.github.io/IV_project/heroku_continuous_deploy)


## Usando contenedores para el microservicio

<a name="docker"></a>

Contenedor: https://vptournaments-docker.azurewebsites.net/

Contenedor alternativo: https://vptournaments.herokuapp.com/

Docker Hub: https://hub.docker.com/r/pramartinez/vptournaments

- [Docker y Docker Hub](https://pramartinez.github.io/IV_project/docker_steps).  
- [Docker image deployment on Azure](https://pramartinez.github.io/IV_project/docker_azure). 
- [Docker image deployment on Heroku](https://pramartinez.github.io/IV_project/docker_heroku).

## Creación, levantamiento y aprovisionamiento de máquinas virtuales

provision: provision/myplaybook.yml

### Creación, levantamiento de VMs con Azure + Aprovisionamiento con Ansible

Podemos usar el siguiente comando para invocar al gestor de tareas y realizar la provisión:

```bash
$ gulp provision_ansible
```

#### Documentación  
- [Creación y levantamiento de máquinas virtuales con Azure](https://pramartinez.github.io/IV_project/vm_creation).   
- [Provisionamiento con Ansible y configuración de Gulp](https://pramartinez.github.io/IV_project/ansible_doc).  

### Creación, levantamiento de VMs con Vagrant + Aprovisionamiento con Ansible

Vagrant Box on Vagrant Cloud: [praxedes/VPTournaments Vagrant Box](https://app.vagrantup.com/praxedes/boxes/VPTournaments)

Mediante el siguiente comando, levantamos la máquina virtual:

```bash
$ gulp up
```

Podemos usar el siguiente comando para invocar al gestor de tareas y realizar la provisión (se hace a través de Vagrant):

```bash
$ gulp provision
```

#### Documentación
- [Creación y levantamiento de máquinas virtuales con Vagrant + Aprovisionamiento con Ansible + Configuración del gestor de tareas Gulp](https://pramartinez.github.io/IV_project/vagrant_doc).   


## Despliegue final

Despliegue final: 137.117.141.136:3000

Para realizar levantamiento, aprovisionamiento y despliegue:

```bash
$ gulp fullup
```

Para hacer primer el levantamiento y luego el aprovisionamiento y despligue:

```bash
$ gulp up
```

```bash
$ gulp provision
```

#### Documentación
- **[Despliegue final del microservicio](https://pramartinez.github.io/IV_project/despliegue_final).**   




