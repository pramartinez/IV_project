# Getting started with Docker

___________________________________

> Índice

<!--ts-->
- [## Pasos seguidos](#pasos)
<!--te-->

__________________________________________

## Pasos seguidos

<a name="pasos"></a>

https://docs.docker.com/get-started/

- En primer lugar tenemos que darnos de alta en la web de Docker: docker.com.  
- Descargamos e instalamos docker.
  https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository

        $ sudo apt-get update

    - Install packages to allow apt to use a repository over HTTPS:
  
            $ sudo apt-get install \
            apt-transport-https \
            ca-certificates \
            curl \
            gnupg-agent \
            software-properties-common

    - Add Docker’s official GPG key:  

            $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    
    - Verify that you now have the key with the fingerprint 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88, by searching for the last 8 characters of the fingerprint.

            $ sudo apt-key fingerprint 0EBFCD88
            praxedes@praxedes-OMEN:~/Documents/ETSIIT/cuarto_curso/IV/IV_project$ sudo apt-key fingerprint 0EBFCD88

                pub   rsa4096 2017-02-22 [SCEA]
                9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
                uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
                sub   rsa4096 2017-02-22 [S]
     
    - Use the following command to set up the stable repository. To add the nightly or test repository, add the word nightly or test (or both) after the word stable in the commands below: https://docs.docker.com/install/

            $ sudo add-apt-repository \
            "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
            $(lsb_release -cs) \
            stable nightly test"
    
    - Install the latest version of Docker Engine - Community and containerd:

            $ sudo apt-get install docker-ce docker-ce-cli containerd.io

	- Verify that Docker Engine - Community is installed correctly by running the hello-world image.

			$ sudo docker run hello-world

			Unable to find image 'hello-world:latest' locally
			latest: Pulling from library/hello-world
			1b930d010525: Pull complete 
			Digest: sha256:4df8ca8a7e309c256d60d7971ea14c27672fc0d10c5f303856d7bc48f8cc17ff
			Status: Downloaded newer image for hello-world:latest

			Hello from Docker!
			This message shows that your installation appears to be working correctly.

			To generate this message, Docker took the following steps:
			1. The Docker client contacted the Docker daemon.
			2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
				(amd64)
			3. The Docker daemon created a new container from that image which runs the
				executable that produces the output you are currently reading.
			4. The Docker daemon streamed that output to the Docker client, which sent it
				to your terminal.

			To try something more ambitious, you can run an Ubuntu container with:
			$ docker run -it ubuntu bash

			Share images, automate workflows, and more with a free Docker ID:
			https://hub.docker.com/

			For more examples and ideas, visit:
			https://docs.docker.com/get-started/

- Creamos un Dockerfile:

		$ code Dockerfile

	Y definimos la imagen desde la que queremos construir. Vamos a usar la última versión de node soportada, que es la 10:

		FROM node:10
	
	Ahora indicamos el directorio de trabajo de la aplicación:

		WORKDIR /home/praxedes/Documents/ETSIIT/cuarto_curso/IV/IV_project

	Como se tienen que instalar las dependencias de nuestra aplicación con nuestra herramienta de construcción (primer con npm para luego poder usar Gulp si fuera necesario). Lo que se hace con las siguientes líneas es copiar el package.json e instalar las dependencias. Nos estamos evitando instalar el directorio de trabajo al completo.
	
		COPY package*.json ./
		RUN npm install
		# If you are building your code for production
		# RUN npm ci --only=production

	To bundle your app's source code inside the Docker image, use the COPY instruction:

		# Bundle app source
		COPY . .
	
	Your app binds to port 8080 so you'll use the EXPOSE instruction to have it mapped by the docker daemon:

		EXPOSE 8080

	Last but not least, define the command to run your app using CMD which defines your runtime. Here we will use node server.js to start your server:

		CMD [ "gulp", "start" ]

- Ahora creamos un .dockerignore file. This will prevent your local modules and debug logs from being copied onto your Docker image and possibly overwriting modules installed within your image: 
   
		node_modules
		npm-debug.log

- Ya podemos crear la imagen:  
    - Go to the directory that has your Dockerfile and run the following command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the docker images command: 
  
		$ sudo docker build -t pramartinez/vptournaments .  

	Y obtenemos la siguiente salida:  

		Sending build context to Docker daemon  15.83MB
		Step 1/7 : FROM node:10
		10: Pulling from library/node
		844c33c7e6ea: Pull complete 
		ada5d61ae65d: Pull complete 
		f8427fdf4292: Pull complete 
		f025bafc4ab8: Pull complete 
		7a9577c07934: Pull complete 
		9b4289f800f5: Pull complete 
		9b8b4aee1f5f: Pull complete 
		44594f2195cd: Pull complete 
		b0d47c2d812b: Pull complete 
		Digest: sha256:be69034700545030c110f67ae22e0584ddd59eeb2af81e4bd7f16f3ba5fa93a6
		Status: Downloaded newer image for node:10
		---> d5680e53a228
		Step 2/7 : WORKDIR /home/praxedes/Documents/ETSIIT/cuarto_curso/IV/IV_project
		---> Running in 407ad4df02f6
		Removing intermediate container 407ad4df02f6
		---> 1774567fd833
		Step 3/7 : COPY package*.json ./
		---> 427dc74703d1
		Step 4/7 : RUN npm install
		---> Running in 718063f12fc8
		[...]
		---> e83c0e8eca48
		Step 5/7 : COPY . .
		---> 51cc49db04ab
		Step 6/7 : EXPOSE 8080
		---> Running in 3c3b476c2ef0
		Removing intermediate container 3c3b476c2ef0
		---> aa11b15b528e
		Step 7/7 : CMD [ "gulp", "start" ]
		---> Running in 36a4af353108
		Removing intermediate container 36a4af353108
		---> fd732f575483
		Successfully built fd732f575483
		Successfully tagged pramartinez/vptournaments:latest

	- Comprobamos que nuestra imagen aparece si ejecutamos:
	
		$ sudo docker images
		REPOSITORY                  TAG                 IMAGE ID            CREATED             SIZE
		pramartinez/vptournaments   latest              fd732f575483        2 minutes ago       1.14GB
		node                        10                  d5680e53a228        6 days ago          903MB
		hello-world                 latest              fce289e99eb9        11 months ago       1.84kB

- Ahora vamos a ejecutar la imagen:

		$ sudo docker run -p 3000 -d pramartinez/vptournaments
		90364f31d88004219da68b7afad4ec3bc9951b00b37afdc0b36b7db49496a5d3

	- Imprimimos la salida de mi aplicación:

			# Get container ID
			$ docker ps
			
			CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS              PORTS                               NAMES
			ccc15db032ac        pramartinez/vptournaments   "docker-entrypoint.s…"   4 seconds ago       Up 3 seconds        8080/tcp, 0.0.0.0:32771->3000/tcp   friendly_villani



			# Print app output
			$ docker logs <container id>

			[17:52:58] Using gulpfile /home/praxedes/Documents/ETSIIT/cuarto_curso/IV/IV_project/gulpfile.js
			[17:52:58] Starting 'start'...
			2019-11-29T17:52:58: PM2 log: Launching in no daemon mode
			2019-11-29T17:52:58: PM2 log: App [VPTournaments:0] starting in -cluster mode-
			2019-11-29T17:52:58: PM2 log: App [VPTournaments:0] online
			2019-11-29T17:52:58: PM2 log: App [VPTournaments:1] starting in -cluster mode-
			2019-11-29T17:52:58: PM2 log: App [VPTournaments:1] online
			2019-11-29T17:52:58: PM2 log: App [VPTournaments:2] starting in -cluster mode-
			2019-11-29T17:52:59: PM2 log: App [VPTournaments:2] online
			2019-11-29T17:52:59: PM2 log: App [VPTournaments:3] starting in -cluster mode-
			2019-11-29T17:52:59: PM2 log: App [VPTournaments:3] online
			2019-11-29T17:52:59: PM2 log: Arrancando VPTournaments.
			1|VPTournaments  | GET / 200 5.800 ms - 44
			1|VPTournaments  | GET /favicon.ico 404 175.827 ms - 1402


	- If you need to go inside the container you can use the exec command:

			# Enter the container
			$ docker exec -it <container id> /bin/bash

	- Now you can call your app using curl:

			$ curl -i localhost:32771

			HTTP/1.1 200 OK
			X-Powered-By: Express
			Content-Type: text/html; charset=utf-8
			Content-Length: 44
			ETag: W/"2c-TrsOfWqAuCMksrGxlEzBsxrNqqk"
			Date: Fri, 29 Nov 2019 17:54:59 GMT
			Connection: keep-alive

			Consulte /status para ver un ejemplo de uso.

- Ahora vamos a compartir nuestra imagen en Docker Hub:


	





	

	




		
	





