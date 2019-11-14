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


///

az webapp create -g StaticResourceGroup -p StaticAppServicePlan -n vptournaments

///////////////////////


https://docs.microsoft.com/en-us/azure/javascript/tutorial-vscode-azure-cli-node-03

```
praxedes@praxedes-OMEN:~/Documents/ETSIIT/cuarto_curso/IV/IV_project$ az group create --name myResourceGroup --location westeurope
{
  "id": "/subscriptions/0742ef1e-9172-4d37-a4e0-9ff6ab96659e/resourceGroups/myResourceGroup",
  "location": "westeurope",
  "managedBy": null,
  "name": "myResourceGroup",
  "properties": {
    "provisioningState": "Succeeded"
  },
  "tags": null,
  "type": "Microsoft.Resources/resourceGroups"
}

praxedes@praxedes-OMEN:~/Documents/ETSIIT/cuarto_curso/IV/IV_project$ az configure --defaults gruop=myResourceGroup location=westeurope

praxedes@praxedes-OMEN:~/Documents/ETSIIT/cuarto_curso/IV/IV_project$ az appservice plan create -g myResourceGroup --name myPlan --sku F1
{
  "freeOfferExpirationTime": null,
  "geoRegion": "West Europe",
  "hostingEnvironmentProfile": null,
  "hyperV": false,
  "id": "/subscriptions/0742ef1e-9172-4d37-a4e0-9ff6ab96659e/resourceGroups/myResourceGroup/providers/Microsoft.Web/serverfarms/myPlan",
  "isSpot": false,
  "isXenon": false,
  "kind": "app",
  "location": "West Europe",
  "maximumElasticWorkerCount": 1,
  "maximumNumberOfWorkers": 1,
  "name": "myPlan",
  "numberOfSites": 0,
  "perSiteScaling": false,
  "provisioningState": "Succeeded",
  "reserved": false,
  "resourceGroup": "myResourceGroup",
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

praxedes@praxedes-OMEN:~/Documents/ETSIIT/cuarto_curso/IV/IV_project$ az webapp create --name vptournaments --plan myPlan -g myResourceGroup --runtime "node|10.15"
{
  "availabilityState": "Normal",
  "clientAffinityEnabled": true,
  "clientCertEnabled": false,
  "clientCertExclusionPaths": null,
  "cloningInfo": null,
  "containerSize": 0,
  "dailyMemoryTimeQuota": 0,
  "defaultHostName": "vptournaments.azurewebsites.net",
  "enabled": true,
  "enabledHostNames": [
    "vptournaments.azurewebsites.net",
    "vptournaments.scm.azurewebsites.net"
  ],
  "ftpPublishingUrl": "ftp://waws-prod-am2-257.ftp.azurewebsites.windows.net/site/wwwroot",
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
  "id": "/subscriptions/0742ef1e-9172-4d37-a4e0-9ff6ab96659e/resourceGroups/myResourceGroup/providers/Microsoft.Web/sites/vptournaments",
  "identity": null,
  "inProgressOperationId": null,
  "isDefaultContainer": null,
  "isXenon": false,
  "kind": "app",
  "lastModifiedTimeUtc": "2019-11-14T11:57:21.076666",
  "location": "West Europe",
  "maxNumberOfWorkers": null,
  "name": "vptournaments",
  "outboundIpAddresses": "13.69.68.3,104.46.36.69,40.91.218.221,51.144.117.153,23.97.215.180",
  "possibleOutboundIpAddresses": "13.69.68.3,104.46.36.69,40.91.218.221,51.144.117.153,23.97.215.180,40.91.222.21,23.97.219.0,40.91.216.13",
  "redundancyMode": "None",
  "repositorySiteName": "vptournaments",
  "reserved": false,
  "resourceGroup": "myResourceGroup",
  "scmSiteAlsoStopped": false,
  "serverFarmId": "/subscriptions/0742ef1e-9172-4d37-a4e0-9ff6ab96659e/resourceGroups/myResourceGroup/providers/Microsoft.Web/serverfarms/myPlan",
  "siteConfig": null,
  "slotSwapStatus": null,
  "state": "Running",
  "suspendedTill": null,
  "tags": null,
  "targetSwapSlot": null,
  "trafficManagerHostNames": null,
  "type": "Microsoft.Web/sites",
  "usageState": "Normal"

browse
praxedes@praxedes-OMEN:~/Documents/ETSIIT/cuarto_curso/IV/IV_project$ Gtk-Message: 12:58:42.934: Failed to load module "canberra-gtk-module"
Gtk-Message: 12:58:42.936: Failed to load module "canberra-gtk-module"
Opening in existing browser session.

praxedes@praxedes-OMEN:~/Documents/ETSIIT/cuarto_curso/IV/IV_project$ az webapp deployment user set --user-name praxedes --password ******
{
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

praxedes@praxedes-OMEN:~/Documents/ETSIIT/cuarto_curso/IV/IV_project$ az webapp deployment source config-local-git --name vptournaments -g myResourceGroup
{
  "url": "https://praxedes@vptournaments.scm.azurewebsites.net/vptournaments.git"
}

praxedes@praxedes-OMEN:~/Documents/ETSIIT/cuarto_curso/IV/IV_project$ git remote add azure https://praxedes@vptournaments.scm.azurewebsites.net/vptournaments.git

praxedes@praxedes-OMEN:~/Documents/ETSIIT/cuarto_curso/IV/IV_project$ git push azure master

praxedes@praxedes-OMEN:~/Documents/ETSIIT/cuarto_curso/IV/IV_project$ git push azure master
Password for 'https://praxedes@vptournaments.scm.azurewebsites.net': 
Counting objects: 5089, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (3743/3743), done.
Writing objects: 100% (5089/5089), 5.36 MiB | 3.84 MiB/s, done.
Total 5089 (delta 1318), reused 4523 (delta 1013)
remote: Resolving deltas: 100% (1318/1318), done.
remote: Updating branch 'master'.
remote: Updating submodules.
remote: Preparing deployment for commit id '9f87e31dd6'.
remote: Generating deployment script.
remote: Generating deployment script for node.js Web Site
remote: Generated deployment script files
remote: Running deployment command...
remote: Handling node.js deployment.
remote: Creating app_offline.htm
remote: KuduSync.NET from: 'D:\home\site\repository' to: 'D:\home\site\wwwroot'
remote: Deleting file: 'hostingstart.html'
remote: Copying file: '.gitignore'
remote: Copying file: '.shippable.yml'
remote: Copying file: '.travis.yml'
remote: Copying file: 'app.js'
remote: Copying file: 'gulpfile.js'
remote: Copying file: 'LICENSE'
remote: Copying file: 'package-lock.json'
remote: Copying file: 'package.json'
remote: Copying file: 'Procfile'
remote: Copying file: 'README.md'
remote: Copying file: 'app\initialize_database.js'
remote: Copying file: 'app\mainClass.js'
remote: Copying file: 'app\data\integrantes.json'
remote: Copying file: 'app\data\integrantes_tmp.json'
remote: Copying file: 'bin\www'
remote: Copying file: 'docs\api_doc.md'
remote: Copying file: 'docs\class_doc.md'
remote: Copying file: 'docs\construction_tool.md'
remote: Copying file: 'docs\deploy_steps.md'
remote: Copying file: 'docs\descripcion_clase.md'
remote: Copying file: 'docs\documentation.md'
remote: Copying file: 'docs\gulp_doc.md'
remote: Copying file: 'docs\shippable_doc.md'
remote: Copying file: 'docs\swagger.yml'
remote: Copying file: 'docs\tests_funcionales_doc.md'
remote: Copying file: 'docs\tools_services.md'
remote: Copying file: 'docs\travis_doc.md'
remote: Copying file: 'docs\api-doc\api_data.js'
remote: Copying file: 'docs\api-doc\api_data.json'
remote: Copying file: 'docs\api-doc\api_project.js'
remote: Copying file: 'docs\api-doc\api_project.json'
remote: Copying file: 'docs\api-doc\index.html'
remote: Copying file: 'docs\api-doc\main.js'
remote: Copying file: 'docs\api-doc\css\style.css'
remote: Copying file: 'docs\api-doc\fonts\glyphicons-halflings-regular.eot'
remote: Copying file: 'docs\api-doc\fonts\glyphicons-halflings-regular.svg'
remote: Copying file: 'docs\api-doc\fonts\glyphicons-halflings-regular.ttf'
remote: Copying file: 'docs\api-doc\fonts\glyphicons-halflings-regular.woff'
remote: Copying file: 'docs\api-doc\fonts\glyphicons-halflings-regular.woff2'
remote: Copying file: 'docs\api-doc\img\favicon.ico'
remote: Copying file: 'docs\api-doc\locales\ca.js'
remote: Copying file: 'docs\api-doc\locales\cs.js'
remote: Copying file: 'docs\api-doc\locales\de.js'
remote: Copying file: 'docs\api-doc\locales\es.js'
remote: Copying file: 'docs\api-doc\locales\fr.js'
remote: Copying file: 'docs\api-doc\locales\it.js'
remote: Copying file: 'docs\api-doc\locales\locale.js'
remote: Omitting next output lines...
remote: Using start-up script bin/www from package.json.
remote: Generated web.config.
remote: Node.js versions available on the platform are: 0.6.20, 0.8.2, 0.8.19, 0.8.26, 0.8.27, 0.8.28, 0.10.5, 0.10.18, 0.10.21, 0.10.24, 0.10.26, 0.10.28, 0.10.29, 0.10.31, 0.10.32, 0.10.40, 0.12.0, 0.12.2, 0.12.3, 0.12.6, 4.0.0, 4.1.0, 4.1.2, 4.2.1, 4.2.2, 4.2.3, 4.2.4, 4.3.0, 4.3.2, 4.4.0, 4.4.1, 4.4.6, 4.4.7, 4.5.0, 4.6.0, 4.6.1, 4.8.4, 5.0.0, 5.1.1, 5.3.0, 5.4.0, 5.5.0, 5.6.0, 5.7.0, 5.7.1, 5.8.0, 5.9.1, 6.0.0, 6.1.0, 6.2.2, 6.3.0, 6.5.0, 6.6.0, 6.7.0, 6.9.0, 6.9.1, 6.9.2, 6.9.4, 6.9.5, 6.10.0, 6.10.3, 6.11.1, 6.11.2, 6.11.5, 6.12.2, 6.12.3, 7.0.0, 7.1.0, 7.2.0, 7.3.0, 7.4.0, 7.5.0, 7.6.0, 7.7.0, 7.7.4, 7.10.0, 7.10.1, 8.0.0, 8.1.4, 8.4.0, 8.5.0, 8.7.0, 8.8.0, 8.8.1, 8.9.0, 8.9.3, 8.9.4, 8.10.0, 8.11.1, 10.0.0, 10.6.0, 10.14.1, 10.15.2, 10.16.3.
remote: Selected node.js version 10.16.3. Use package.json file to choose a different version.
remote: Selected npm version 6.9.0
remote: Updating iisnode.yml at D:\home\site\wwwroot\bin\iisnode.yml




```
