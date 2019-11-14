# Azure deployment

# Primero pasos

- Instalación de Azure CLI:  
    - Obtenemos paquetes necesarios para el proceso de instalación:
    ```
    sudo apt-get update
    sudo apt-get install ca-certificates curl apt-transport-https lsb-release gnupg
    ```  
    - Descargamos e instalamos la clave de firma de Microsoft:  
    ```
    curl -sL https://packages.microsoft.com/keys/microsoft.asc | 
    gpg --dearmor | 
    sudo tee /etc/apt/trusted.gpg.d/microsoft.asc.gpg > /dev/null
    ```
    - Agregamos repositorio de software de la CLI de Azure:
    ```
    AZ_REPO=$(lsb_release -cs)
    echo "deb [arch=amd64] https://packages.microsoft.com/repos/    azure-cli/ $AZ_REPO main" | 
    sudo tee /etc/apt/sources.list.d/azure-cli.list
    ```
    - Actualizamos información del repositorio e instalamos ```azure-cli```:
    ```
    sudo apt-get update
    sudo apt-get install azure-cli
    ```
- Ejecutamos el comando ```login``` y elegimos la cuenta con la que queremos trabajar. En el terminal se indica lo siguiente:
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
Comprobamos que la información es correcta.

- Creamos un usuario de despliegue:
```
az webapp deployment user set --user-name {your-username} --password {your-password}
```
Y obtenemos:
```
  "id": null,
  "kind": null,
  "name": "web",
  "publishingPassword": null,
  "publishingPasswordHash": null,
  "publishingPasswordHashSalt": null,
  "publishingUserName": "praxedes",
  "scmUri": null,
  "type": "Microsoft.Web/publishingUsers/web"
}
```

- Creamos un grupo de recursos:
```az group create --name StaticResourceGroup --location "westeurope"```
Y hallamos:
```
{
  "id": "/subscriptions/0742ef1e-9172-4d37-a4e0-9ff6ab96659e/resourceGroups/StaticResourceGroup",
  "location": "westeurope",
  "managedBy": null,
  "name": "StaticResourceGroup",
  "properties": {
    "provisioningState": "Succeeded"
  },
  "tags": null,
  "type": "Microsoft.Resources/resourceGroups"
}

```

- Ahora indicamos el Azure App Service Plan:
```
az appservice plan create --name StaticAppServicePlan --resource-group StaticResourceGroup --sku FREE
```
Salida:
```
{
  "freeOfferExpirationTime": null,
  "geoRegion": "West Europe",
  "hostingEnvironmentProfile": null,
  "hyperV": false,
  "id": "/subscriptions/0742ef1e-9172-4d37-a4e0-9ff6ab96659e/resourceGroups/StaticResourceGroup/providers/Microsoft.Web/serverfarms/StaticAppServicePlan",
  "isSpot": false,
  "isXenon": false,
  "kind": "app",
  "location": "West Europe",
  "maximumElasticWorkerCount": 1,
  "maximumNumberOfWorkers": 1,
  "name": "StaticAppServicePlan",
  "numberOfSites": 0,
  "perSiteScaling": false,
  "provisioningState": "Succeeded",
  "reserved": false,
  "resourceGroup": "StaticResourceGroup",
  "sku": {
    "capabilities": null,
    "capacity": 0,
    "family": "F",
    "locations": null,
    "name": "F1",
    "size": "F1",
    "skuCapacity": null,
    "tier": "Free"
  },
  "spotExpirationTime": null,
  "status": "Ready",
  "subscription": "0742ef1e-9172-4d37-a4e0-9ff6ab96659e",
  "tags": null,
  "targetWorkerCount": 0,
  "targetWorkerSizeId": 0,
  "type": "Microsoft.Web/serverfarms",
  "workerTierName": null
}
```

- Creamos la aplicación:
```
az webapp create --name VPTournaments --resource-group StaticResourceGroup --plan StaticAppServicePlan --deployment-local-git
```
Salida:
```
Local git is configured with url of 'https://praxedes@vptournaments.scm.azurewebsites.net/VPTournaments.git'
{
  "availabilityState": "Normal",
  "clientAffinityEnabled": true,
  "clientCertEnabled": false,
  "clientCertExclusionPaths": null,
  "cloningInfo": null,
  "containerSize": 0,
  "dailyMemoryTimeQuota": 0,
  "defaultHostName": "vptournaments.azurewebsites.net",
  "deploymentLocalGitUrl": "https://praxedes@vptournaments.scm.azurewebsites.net/VPTournaments.git",
  "enabled": true,
  "enabledHostNames": [
    "vptournaments.azurewebsites.net",
    "vptournaments.scm.azurewebsites.net"
  ],
  "ftpPublishingUrl": "ftp://waws-prod-am2-155.ftp.azurewebsites.windows.net/site/wwwroot",
  "geoDistributions": null,
  "hostNameSslStates": [
    {
      "hostType": "Standard",
      "ipBasedSslResult": null,
      "ipBasedSslState": "NotConfigured",
      "name": "vptournaments.azurewebsites.net",
      "sslState": "Disabled",
      "thumbprint": null,
      "toUpdate": null,
      "toUpdateIpBasedSsl": null,
      "virtualIp": null
    },
    {
      "hostType": "Repository",
      "ipBasedSslResult": null,
      "ipBasedSslState": "NotConfigured",
      "name": "vptournaments.scm.azurewebsites.net",
      "sslState": "Disabled",
      "thumbprint": null,
      "toUpdate": null,
      "toUpdateIpBasedSsl": null,
      "virtualIp": null
    }
  ],
  "hostNames": [
    "vptournaments.azurewebsites.net"
  ],
  "hostNamesDisabled": false,
  "hostingEnvironmentProfile": null,
  "httpsOnly": false,
  "hyperV": false,
  "id": "/subscriptions/0742ef1e-9172-4d37-a4e0-9ff6ab96659e/resourceGroups/StaticResourceGroup/providers/Microsoft.Web/sites/VPTournaments",
  "identity": null,
  "inProgressOperationId": null,
  "isDefaultContainer": null,
  "isXenon": false,
  "kind": "app",
  "lastModifiedTimeUtc": "2019-11-14T11:17:31.156666",
  "location": "West Europe",
  "maxNumberOfWorkers": null,
  "name": "VPTournaments",
  "outboundIpAddresses": "52.178.43.209,13.81.120.121,23.101.74.176,104.40.189.59,23.101.70.119",
  "possibleOutboundIpAddresses": "52.178.43.209,13.81.120.121,23.101.74.176,104.40.189.59,23.101.70.119,52.178.46.226,52.166.118.167",
  "redundancyMode": "None",
  "repositorySiteName": "VPTournaments",
  "reserved": false,
  "resourceGroup": "StaticResourceGroup",
  "scmSiteAlsoStopped": false,
  "serverFarmId": "/subscriptions/0742ef1e-9172-4d37-a4e0-9ff6ab96659e/resourceGroups/StaticResourceGroup/providers/Microsoft.Web/serverfarms/StaticAppServicePlan",
  "siteConfig": null,
  "slotSwapStatus": null,
  "state": "Running",
  "suspendedTill": null,
  "tags": null,
  "targetSwapSlot": null,
  "trafficManagerHostNames": null,
  "type": "Microsoft.Web/sites",
  "usageState": "Normal"
}
```
- Ahora añadimos azure como repositorio remoto:
```
git remote add azure https://praxedes@vptournaments.scm.azurewebsites.net/VPTournaments.git

git push azure master
```
E introducimos nuestra contraseña.

> En package.json:
```  "engines": {
    "node": "10.16.3"
  }
```