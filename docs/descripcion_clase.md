# Descripción real de la clase del proyecto 
___________________________________

Índice
======
<!--ts-->
  - [¿Por qué VPTournaments?](#%c2%bfpor-qu%c3%a9-vptournaments)
  - [¿Cuáles son las funcionalidades principales?](#%c2%bfcu%c3%a1les-son-las-funcionalidades-principales)
  - [Uso de la clase dentro del servicio](#uso-de-la-clase-dentro-del-servicio)
  - [Indagando superficialmente en la implementación de la clase](#indagando-superficialmente-en-la-implementaci%c3%b3n-de-la-clase)
    - [Métodos para incluir información sobre las parejas](#m%c3%a9todos-para-incluir-informaci%c3%b3n-sobre-las-parejas)
    - [Métodos para cancelar la inscripción de una pareja](#m%c3%a9todos-para-cancelar-la-inscripci%c3%b3n-de-una-pareja)
    - [Métodos para consultar información de la competición](#m%c3%a9todos-para-consultar-informaci%c3%b3n-de-la-competici%c3%b3n)
    - [Métodos para modificar la información de una pareja](#m%c3%a9todos-para-modificar-la-informaci%c3%b3n-de-una-pareja)
<!--te-->

__________________________________________

>Esta visión de la clase principal del proyecto es simplemente para hacerse una idea sobre el funcionamiento de la misma, es decir, es muy global. Por tanto, si se desea conocer más a fondo sobre la implementación de dicha clase aquí se proporciona un enlace a la documentación del código en sí: [Class Documentation](https://pramartinez.github.io/IV_project/class_doc).

## ¿Por qué VPTournaments?

Un torneo de voley playa se constituye de una serie de parejas de integrantes, ya sean mixtas, femeninas o masculinas. El objetivo es que aquellas personas que quieran inscribirse al torneo, puedan hacerlo gracias a ***VPTournaments*** y que, además, luego puedan consultar cualquier información referente a la competición. Por tanto, el microservicio a construir se encargará de gestionar este tipo de recursos para poder facilitar la organización de la competición.

## ¿Cuáles son las funcionalidades principales?

-   Inscribirse en la liga en una categoría concreta: mixta, femenina, masculina.
-   Consultar información varia de cada categoría, pareja o de la competición.
-   Modificar parejas en caso de error en los datos o por cambio de jugador.
-   Cancelar inscripción de una pareja.

## Uso de la clase dentro del servicio

Para entender el papel de esta clase y tener una perspectiva de la misma, situémosla como constituyente de un servicio. Un servicio para gestión de torneos tendría que encargarse de administrar las parejas, de proporcionar sus horarios de juego, sus partidos, sus contricantes... de informar sobre la clasificación general, de notificar posibles cambios por imprevistos, etc. Entonces, ¿qué papel desempeña nuestra clase? Concretamente el primero que se menciona: la administración de las parejas. Esta tarea es realmente importante porque una competición deportiva sin sus integrantes no es nada. Por tanto, del alta, baja, modificación e información de las parejas de una competición se encargará nuestra clase.

La idea es que dicha clase sea la principal del proyecto y en la que se incluya toda la funcionalidad básica que, al fin y al cabo, consistirá en tratar con la información:
-   Recibir información.
-   Procesar información.
-   Almacenar nueva información.
-   Modificar información ya existente.
-   Eliminar información.
-   Enviar información.

Por tanto, para poder llevar a cabo todo ello, habrá de comunicarse con la base de datos o con los archivos de almacenamiento de información, con el exterior (de donde recibe información, consultas, etc), con otras clases (si fuera necesario)...


## Indagando superficialmente en la implementación de la clase

La clase real del proyecto se compone de una serie de métodos que nos permitirán gestionar las parejas de una competición de voleibol. Para ello, distinguiremos entre cuatro tipos de métodos enfocándolo más a futuras versiones del proyecto: los que añaden información (POST), los que eliminan información (DELETE), los que consultan información (GET) y los que modifican información (PUT). En un principio, la información de la que hablamos se irá almacenando en un archivo *json*.

### Métodos para incluir información sobre las parejas

Como método de este tipo destacamos el que se encarga de incribir a las parejas de la competición: toma los datos personales proporcionados, los procesa comprobando si son correctos, consulta las parejas que ya hay inscritas para asegurar que no se encuentren dos veces en el evento y, si no es así, finaliza incluyendo a la nueva pareja. 

### Métodos para cancelar la inscripción de una pareja

En este caso nos encontramos con un método que toma unos datos personales de entrada (concretamente el DNI de los dos integrantes) y busca la información de la pareja correspondiente con el fin de eliminarla de la competición.

### Métodos para consultar información de la competición

Para consulta de datos, existen muchos métodos distintos en la clase que simplemente se centran en tomar qué se les pide y mostrar la información adecuada al respecto. Por ejemplo: podemos preguntar por la pareja de un integrante, por las las parejas de un categoría, por las parejas de la competición al completo, por la categoría de una pareja, por la pareja de un integrante en una categoría concreta (ya que pueden inscribirse en más de una distinta)...

### Métodos para modificar la información de una pareja

Como es normal, pueden producirse errores a la hora de introducir los datos personales de una pareja o, simplemente, uno de los integrantes se lesiona y los delegados de la competición le conceden (al no lesionado) la oportunidad de encontrar a un sustituto si lo desea. Por lo cual, se hará uso de un método para la modificación de los datos de las parejas del evento.
