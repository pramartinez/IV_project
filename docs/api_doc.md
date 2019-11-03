# Documentación de la API Rest

>A continuación se detalla **cómo se ha creado la API Rest del proyecto**, concretamente, qué pasos se han seguido y por qué. Si lo que se desea es ver la documentación del código en sí (parámetros de entrada y su utilización, respuestas de éxito y de error, ejemplos de uso...) puede consultarla en el **siguiente enlace: 
[API Rest Code Documentation](https://pramartinez.github.io/IV_project/api-doc/index.html).**

### Get status information

Se han creado dos decoradores para comprobar el correcto despliegue local de la API Rest. Lo que hacen ambos es devolver un JSON indicando un *status 200 "Accepted"* siempre que, como se ha dicho, el despligue se haya llevado a cabo correctamente. Uno de los decoradores se ha asociado a la ruta ```/ruta``` y otro a la ruta raíz. 

Para construir estos decoradores mencionados, simplemente se ha indicado que si se hace una petición de tipo ```GET``` a la ruta ```/ruta``` o a la ruta raíz, se envía un código de estado 200 *"Accepted"* y un JSON ```{"status":"OK"}```.  En caso contrario se lanzará un mensaje de error. 

```node
  res.status(200).json({"status":"OK"});
```

### Post a new couple

Para poder inscribir parejas a la competición en cuestión, se ha creado un decorador asociado a la ruta ```/inscripcion```. Si se hace una petición de tipo ```POST``` a esta última y se incluye en el *body* de dicha petición un JSON con la información de la nueva pareja, se tomarán estos datos y, empleando la función ***inscribir_pareja*** de la clase principal, se darán de alta. Justo después, se enviará un código de éxito 201 *"Created"*. Si en algún momento se produce algún error se manejará y se mostrará.

```node
    vpt.inscribir_pareja(nombre1, dni1, telefono1, correo1, nombre2, dni2, telefono2, correo2, categoria);
    res.sendStatus(201);
```

### Delete a couple 

Por otro lado, se ha incluido un decorador para la eliminación de parejas de la competición. Su funcionamiento es sencillo: si se hace una petición de tipo ```DELETE``` a la ruta ```/cancelacion``` y en el *body* se indica los dos DNIs de los integrantes de la pareja a eliminar, lo que se hace es llamar a la función ***cancelar_inscripcion*** de la clase principal y se envía un *status 200 "Accepted"* justo después (siempre que no se produzca un error).

```node
    vpt.cancelar_inscripcion(dni1,dni2);
    res.sendStatus(200);
```

### Modify (put) a couple

En el caso de la modificación de parejas ya existentes en la competición, se procede de la siguiente forma: la petición se haría a la ruta ```/modificacion``` de tipo ```PUT``` y el *body* habría de contener los DNIs de los integrantes de la pareja a modificar y los nuevos datos de la misma. Entonces, se toman estos últimos y se llama a la función de la clase principal ***modificar_pareja*** que se encargará de hacer los cambios. Justo a continuación se envía un status 200 *"Accepted"* si se ha realizado correctamente. 

```node
    vpt.modificar_pareja(dni1,dni2,nnombre1, nnombre2, ndni1, ndni2, ntelefono1, ntelefono2, ncorreo1, ncorreo2);
    res.sendStatus(200);
```

### Get information about the competion

El resto de decoradores se han creado para obtener información sobre las parejas de la competición y sobre las plazas disponibles en las distintas categorías. Al fin y al cabo, todos funcionan de forma muy similar, así pues, veamos el funcionamiento de alguno de los ellos:

#### Get the cathegory of a couple

En este caso, la petición ```GET``` se haría a la ruta ```/categoria_pareja/:nombre1/:nombre2``` siendo ```nombre1``` y ```nombre2``` dos parámetros que contendrán los nombres de los integrantes de la pareja de la que queremos conocer su categoría. Por tanto, antes de llamar a la función de la clase principal que se encarga de obtener dicha información (***consultar_categoria_pareja***), se han de extraer dichos parámetros e proporcionárselos a la misma. Justo entonces, si todo se ha llevado a cabo correctamente, se enviará un *status 200 "Accepted"* y el JSON con la categoría de la pareja (que habrá devuelto la función a la que recurríamos).

```node
    var nombre1 = req.params.nombre1;
    var nombre2 = req.params.nombre2;
    var categoria = vpt.consultar_categoria_pareja(nombre1, nombre2);
    var obj = {"categoria":categoria}
    res.status(200).json(obj);
```

El resto de decoradores son muy similares al anterior, sólo difieren en los parámetros que necesitan, la función de la clase principal a la que llaman y la respuesta, pero en esencia todos trabajan de la misma forma: reciben unos parámetros (o puede que no haga falta), se llama a una función de la clase principal a la que se le proporcionan dichos parámetros y esta devolverá la información que necesitamos.

