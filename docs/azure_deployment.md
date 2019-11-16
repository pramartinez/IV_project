# Azure deployment

___________________________________

> Índice 

<!--ts-->
- [Azure deployment](#azure-deployment)
  - [¿Por qué Microsoft Azure?](#%c2%bfpor-qu%c3%a9-microsoft-azure)
  - [Pasos seguidos para la construcción, configuración y despliegue](#pasos-seguidos-para-la-construcci%c3%b3n-configuraci%c3%b3n-y-despliegue)
    - [Instalación de Azure CLI](#instalaci%c3%b3n-de-azure-cli)
    - [Cuenta de Azure](#cuenta-de-azure)
    - [Creación del App Service](#creaci%c3%b3n-del-app-service)
      - [Resource Group](#resource-group)
      - [Creación del plan del App Service](#creaci%c3%b3n-del-plan-del-app-service)
      - [Creación del App Service](#creaci%c3%b3n-del-app-service-1)
      - [Despligue de la aplicación en el App Service](#despligue-de-la-aplicaci%c3%b3n-en-el-app-service)
    - [Inicio y Parada del despliegue](#inicio-y-parada-del-despliegue)
- [Continuous deployment: GitHub](#continuous-deployment-github)
<!--te-->

__________________________________________

## ¿Por qué Microsoft Azure?

He elegido Microsoft como PaaS principal para el despliege por distintas razones. En primer lugar porque se ofrecía en clase y se nos proporcionaban ciertos creditos, en segundo lugar por su rapidez, porque proporciona herramientas de integración continua... Por otro lado, su configuración no ha sido excesivamente compleja pero sí que me ha llevado su tiempo en comparación con Heroku.

## Pasos seguidos para la construcción, configuración y despliegue

A continuación se muestran los pasos seguidos para el despliegue con Azure.

### Instalación de Azure CLI

<a name="instalacion"></a>

Para poder comenzar con el despliegue, es necesaria la instalación de Azure CLI, para ello, se sigue el siguiente procedimiento:

> Esta parte es opcional:
>
>- Obtenemos paquetes necesarios para el proceso de instalación:
>```shell
>$ sudo apt-get update
>$ sudo apt-get install ca-certificates curl apt-transport-https lsb-release gnupg
>```  
>- Descargamos e instalamos la clave de firma de Microsoft:  
>```shell
>$ curl -sL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/microsoft.asc.gpg > /dev/null
>```
>- Agregamos repositorio de software de la CLI de Azure:
>```shell
>$ AZ_REPO=$(lsb_release -cs) echo "deb [arch=amd64] https://packages.microsoft.com/reposazure-cli/ $AZ_REPO main" | sudo tee /etc/apt/sources.list.d/azure-cli.list
>```

- Actualizamos e instalamos ```azure-cli```:
```shell
$ sudo apt-get update
$ sudo apt-get install azure-cli
```

### Cuenta de Azure

<a name="cuenta"></a>


Para continuar, usamos el comando ```login```, que abre una ventana del buscador por defecto y elegimos la cuenta con la que queremos trabajar. Una vez hecho esto, en el terminal aparece la información en formato JSON asociada a dicha cuenta y a la subscriptción, por tanto, es importante comprobar que es correcta:
```JSON
[
  {
    "cloudName": "AzureCloud",
    "id": "0742ef1e-9172-4d37-a4e0-9ff6ab96659e",
    "isDefault": true,
    "name": "Azure para estudiantes",
    "state": "Enabled",
    "tenantId": "c7a95d24-50ff-4804-ad9a-e4cba81ad10b",
    "user": {
      "name": "pramtnez@gmail.com",
      "type": "user"
    }
  }
]
```


### Creación del App Service

<a name="appserv"></a>

Ahora vamos a proceder a usar Azure CLI que se ha instalado en el paso anterior para crear el Azure App Service para hostear el código de la aplicación.

#### Resource Group

<a name="g"></a>

Primero creamos el grupo de recursos que es básicamente una colección de recursos de una aplicación en Azure:

```shell
$ az group create --name myResourceGroup --location westeurope
```

De esta forma estamos creando un grupo de recursos llamado ```myResourceGroup``` que está situado en Europa Oeste (```westeurope```).

Nuevamente obtenemos información en formato JSON con los detalles del grupo de recursos para comprobar que se ha realizado con éxito lo que queríamos (ocurre lo mismo en los siguientes pasos).

Este grupo y su localización podemos incluirlos como valores por defecto:

```shell
$ az configure --defaults gruop=myResourceGroup location=westeurope
```

#### Creación del plan del App Service

<a name="p"></a>

Una vez tenemos el grupo de recursos pasamos a crear un plan de servicio de aplicaciones que defina la máquina virtual subyacente utilizada por el App Service. Lo hacemos de la siguiente forma:

```shell
$ az appservice plan create -g myResourceGroup --name myPlan --sku F1
```

Concretamente, con ```--sku F1``` especificamos un plan de hosting gratis el cual usa una máquina virtual compartida y se ha llamado: ```myPlan```.

#### Creación del App Service

<a name="ap"></a>

Ahora ya podemos pasar a crear el servicio de aplicaciones en sí, para ello recurrimos a:

```shell
$ az webapp create --name vptournaments --plan myPlan -g myResourceGroup --runtime "node|10.15"
```

He elegido la versión 10.15.0 de Node porque es la última con la que se puede trabajar en Heroku y como uso los dos PaaS lo he adaptado así, pues intenté usar la misma que tenía en el proyecto y no me lo permitió. Además, en el package.json he incluido un apartado como el siguiente para indicar la versión con la correrá la aplicación tanto en Heroku como en Azure:

```JSON
  "engines": {
    "node": "10.x"
  }
```

Una vez llegados a este punto, ya podríamos ir al navegador a poner nuestro link, aunque no es necesario si usamos:

```shell
$ az webapp browse -g myResourceGroup --name vptournaments
```

Aunque ahora mismo, si accedemos a la URL no veremos más que una páquina de prueba y no la funcionalidad de nuestro microservicio. Para poder hacer esto tenemos que continuar con el despliegue del código del proyecto.

#### Despligue de la aplicación en el App Service

<a name="deploy"></a>

En primera instancia, como ya tenemos creado nuestro repositorio de git con todo el código y la funcionalidad de la aplicación, podemos pasar directamente a crear un usuario de despliegue con el siguiente comando:

```shell
$ az webapp deployment user set --user-name {your-username} --password {your-password}
```
Y a continuación, ejecutamos este comando para indicar el endpoint de Git en el que queremos insertar el código de la aplicación:

```shell
$ az webapp deployment source config-local-git --name vptournaments -g myResourceGroup
```

La ejecución de este comando nos devolverá la siguiente información:

```JSON
{
  "url": "https://praxedes@vptournaments.scm.azurewebsites.net/vptournaments.git"
}
```

Dicha información, que es la URL del repositorio remoto de azure con el que trabajaremos, la utilizamos para añadirlo llamándolo ```azure```:

```shell
$ git remote add azure https://praxedes@vptournaments.scm.azurewebsites.net/vptournaments.git
```

Y hacemos un push al mismo:

```shell
$ git push azure master
```

Ahora, si todo se ha llevado a cabo correctamente... ¡ya tendríamos desplegada la aplicación en Azure!

Si, en cambio, no es así podemos consultar los logs para comprobar qué está fallando:

```shell
$ az webapp log tail --name vptournaments -g myResourceGroup
```

### Inicio y Parada del despliegue

<a name="init"></a>


Usamos los siguientes comandos:

```shell
$ az webapp start --name vptournaments -g myResourceGroup

$ az webapp stop --name vptournaments -g myResourceGroup
```

# Continuous deployment: GitHub

<a name="git"></a>

Aquí se encuentra el procedimiento seguido para habilitar el despliegue continuo: [Azure Continuous Deployment](https://pramartinez.github.io/IV_project/azure_continuous_deploy)