# Deploy Docker container on Azure

La idea es que nuestra imagen de Docker de nuestro microservicio esté disponible en la plataforma de Azure. Para poder conseguir tenemos que crear una nueva aplicación e indicar que queremos que se despliegue desde Docker Hub:

- Primero tenemos que acceder al portal de Azure y crear una nueva aplicación rellenando los campos correspondientes: 
![](images/dazure1.png){width=50%}

- Luego indicamos las opciones de Docker:  
![](images/dazure2.png){width=50%}  

- Cuando todo esté listo le le pulsamos a crear y veríamos que se comienza a realizar el despliegue. 
![](images/dazure3.png){width=50%}  
![](images/dazure4.png){width=50%} 

- Ya estaría realizado el despliegue completo:  
![](images/dazure5.png){width=50%}  

- Ahora podemos acceder a la [URL](https://vptournaments-docker.azurewebsites.net/).  


  



https://www.azuredevopslabs.com/labs/vstsextend/docker/