# Tests funcionales de la API Rest


___________________________________

Índice
======
<!--ts-->
- [GET](#get)
- [POST](#post)
- [DELETE](#delete)
- [PUT](#put)
<!--te-->

__________________________________________

Veamos a continuación cómo se han realizado algunos de los tests de los decoradores de la API Rest con el fin de entender su funcionamiento. Veremos ejemplos para cada tipo de operación: GET, PUT, POST y DELETE.

<a name="get"></a>

## GET

Para testear el buen funcionamiento de las peticiones de tipo GET se ha realizado lo siguiente:

### GET Status

Este es un ejemplo de test creado para el decorador que envía una respuesta de éxito si se accede a la ruta ```/status``` y el microservicio se ha desplegado correctamente. La petición sobre la aplicación (```request(app)```) es de tipo **get** a la ruta ```/status```, por eso se incluye ```.get('/status)```; por otro lado, como lo que se espera es un JSON, se indica con ```.expect('Content-Type', /json/)```; por último, para comprobar que el código recibido es de éxito, se añade ```.expect(200, done)```.

    describe( "GET status", function() {
        it('Should get OK status', function(done) {
            request(app)
                .get('/status')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

### GET categoría de pareja

En este caso vemos cómo se indican parámetros en la ruta de la petición para aquellos casos en los que sea necesario, simplemente añadimos los valores con los que queramos testear la API Rest:
```.get('/categoria_pareja/alba/famita')```

que es parte del siguiente test:

    describe( "GET categoría de pareja", function() {
        it('Should get the cathegory of a couple', function(done) {
            request(app)
                .get('/categoria_pareja/alba/famita')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

<a name="post"></a>

## POST

Ahora, veamos cómo se realiza una petición de tipo POST. En general, el esquema es igual que el de las peticiones de tipo GET mostradas previamente, lo único que cambia es el tipo de petición y la ruta: ```.post('/inscripcion')```,  y que tenemos que enviar el **body** de dicha petición. Para esto último, usamos ```.send(nueva_pareja)``` (siendo *nueva_pareja* el *body*):

    describe( "POST inscripción", function() {
        it('Should create a new inscription', function(done) {
            request(app)
                .post('/inscripcion')
                .send(nueva_pareja)
                .expect(201, done);
        });
    });

<a name="delete"></a>

## DELETE

En el caso de las peticiones de tipo DELETE, a diferencia de las anteriores, lo que tenemos que indicar es ```.delete(<ruta>)``` y el body de la petición ```.send(<body>)```:

    describe( "DELETE cancelación", function() {
        it('Should delete an inscription', function(done) {
            request(app)
                .delete('/cancelacion')
                .send({
                    "dni1":"7",
                    "dni2":"8"
                  })
                .expect(200, done);
        });
    });

<a name="put"></a>

## PUT

Por último, en el caso de las peticiones de tipo PUT, lo que tenemos que indicar es ```.put(<ruta>)```, el resto coindice con lo explicado anteriormente:

    describe( "PUT modificación", function() {
        it('Should modify an inscription', function(done) {
            request(app)
                .put('/modificacion')
                .send(modificacion)
                .expect(200, done);
        });
    });