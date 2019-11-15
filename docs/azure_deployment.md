# Azure deployment

A continuación se muestran los pasos seguidos para el despliegue con Azure.

## Instalación de Azure CLI

Para poder comenzar con el despliegue, es necesaria la instalación de Azure CLI, para ello, se sigue el siguiente procedimiento:

- Obtenemos paquetes necesarios para el proceso de instalación:
```shell
$ sudo apt-get update
$ sudo apt-get install ca-certificates curl apt-transport-https lsb-release gnupg
```  
- Descargamos e instalamos la clave de firma de Microsoft:  
```shell
$ curl -sL https://packages.microsoft.com/keys/microsoft.asc | 
gpg --dearmor | 
sudo tee /etc/apt/trusted.gpg.d/microsoft.asc.gpg > /dev/null
```
- Agregamos repositorio de software de la CLI de Azure:
```shell
$ AZ_REPO=$(lsb_release -cs) echo "deb [arch=amd64] https://packages.microsoft.com/reposazure-cli/ $AZ_REPO main" | sudo tee /etc/apt/sources.list.d/azure-cli.list
```
- Actualizamos información del repositorio e instalamos ```azure-cli```:
```shell
$ sudo apt-get update
$ sudo apt-get install azure-cli
```

## Cuenta de Azure

Para continuar, ahora usamos el comando ```login``` y elegimos la cuenta con la que queremos trabajar. Una vez echo esto, en el terminal aparece la información asociada a dicha cuenta, por tanto, es importante comprobar que es correcta:
```
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


## Creación del App Service

### Resource Group

Primero creamos el grupo de recursos que es básicamente una colección de recursos de una aplicación en Azure:

```shell
$ az group create --name myResourceGroup --location westeurope
```

Nuevamente obtenemos información para comprobar que se ha realizado con éxito lo que queríamos (ocurre lo mismo en los siguientes pasos).

Este grupo podemos incluirlo como el grupo por defecto:

```shell
$ az configure --defaults gruop=myResourceGroup location=westeurope
```

### Creación del plan del App Service

Lo creamos de la siguiente forma:

```shell
$ az appservice plan create -g myResourceGroup --name myPlan --sku F1
```

Concretamente, con ```--sku F1``` especificamos un plan de hosting gratis.

### Creación del App Service

Ahora ya podemos pasar a crear el servicio de aplicaciones en sí, para ello recurrimos a:

```shell
$ az webapp create --name vptournaments --plan myPlan -g myResourceGroup --runtime "node|10.15"
```

He elegido la versión 10.15.0 de Node porque es la última con la que se puede trabajar en la plataforma.

Además, en el package.json he incluido un apartado como el siguiente:

```
"engines": {
    "node": ">10.15.0"
}
```

Una vez llegados a este punto, ya podríamos ir al navegador a poner nuestro link, aunque no es necesario si usamos:

```shell
$ az webapp browse myResourceGroup --name vptournaments
```

Aunque ahora mismo no veremos la funcionalidad de nuestro microservicio. Para poder hacer esto tenemos que continuar.

## Despligue de la aplicación en el App Service

Primero creamos un usuario de despliegue con el siguiente comando:
```shell
$ az webapp deployment user set --user-name {your-username} --password {your-password}
```

Y a continuación, ejecutamos el comando que a continuación se muestra para recuperar el endpoint de Git del que insertamos el código de la aplicación:

```shell
$ az webapp deployment source config-local-git --name vptournaments -g myResourceGroup
```

Lo que nos devolverá la siguiente información:

```
{
  "url": "https://praxedes@vptournaments.scm.azurewebsites.net/vptournaments.git"
}
```

Dicha información la utilizamos para establecer el nuevo repositorio remoto de Git llamado ```azure```:

```shell
$ git remote add azure https://praxedes@vptournaments.scm.azurewebsites.net/vptournaments.git
```

Y hacemos un push al mismo:

```shell
$ git push azure master
```

Ahora, si todo se ha llevado a cabo correctamente... ¡ya tendríamos desplegada la aplicación en Azure!

Si en cambio, no es así, podemos consultar los logs para comprobar qué está fallando:

```shell
$ az webapp log tail --name vptournaments -g myResourceGroup
```

# Inicio y Parada del despliegue

Usamos los siguientes comandos:

```shell
$ az webapp start --name vptournaments -g myResourceGroup

$ az webapp stop --name vptournaments -g myResourceGroup
```

# Despliegue con la herramienta de construcción Gulp

Hasta el momento, la aplicación funciona correctamente empleando como script de inicio del mircroservicio: ```npm run start```, pero lo que nos interesa es emplear la herramienta de construcción que hemos venido usando: ```Gulp```. Es por esto que realizamos lo siguiente:

- Generamos un archivo ```.deployment``` que contenga:
```shell
[config]
command = gulp start
```