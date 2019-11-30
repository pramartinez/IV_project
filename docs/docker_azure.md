# Deploy Docker container on Azure

La idea es que una imagen de Docker de nuestro microservicio esté disponible en la plataforma de Azure. Para poder conseguir esto empleando Docker Hub, donde desplegábamos la imagen de nuestro microservicio previamente, tenemos que hacerlo a través de la web de Azure. Además, para poder llevarlo a cabo indicando que el despliegue es desde nuestro contenedor, tenemos que crear una aplicación web de Azure desde cero. Los pasos seguidos para realizar todo eso han sido los siguientes:  

- Primero tenemos que acceder al portal de Azure y crear una nueva aplicación rellenando los campos correspondientes. Tenemos que indicar que se publica desde un contenedor de Docker. Además, es importante crear otro plan de servicio de aplicaciones, si no nos dará un error.

<img src="images/dazure1.png" width="500" height="550" />

- Luego indicamos la configuración de Docker rellenando los apartados que podemos ver en la siguiente figura e indicando que se trata de un contenedor único, que la imagen se encuentra en Docker Hub, que el acceso es público y, por último, la imagen a desplegar su etiqueta correspondiente:

![](images/dazure2.png)

- Cuando todo esté listo le pulsamos a revisar y crear y veríamos que se comienza a realizar el despliegue. 

![](images/dazure3.png)  

- Es importante comprobar en la configuración del contenedor que está marcado el despliegue continuo. De esta forma conseguimos que, cada vez que hagamos ```push``` en nuestro repositorio del microservicio, se realice el despliegue automático de la imagen en Azure:

![](images/dazure88.png)

- Ya estaría realizado el despliegue completo:  

![](images/dazure5.png)  

- Ahora podemos acceder a la [URL](https://vptournaments-docker.azurewebsites.net/).  
