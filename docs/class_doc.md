<a name="funcionalidades"></a>

## Main Class  
***Clase que representa una competición: sus funcionalidades.***

**Kind**: global class  

***
## Index

<!--ts-->
   - [new Funcionalidades(nombre_competicion)](#new-funcionalidadesnombrecompeticion)
   - [funcionalidades.decrementar\_plazas(categoria)](#funcionalidadesdecrementarplazascategoria)
   - [funcionalidades.incrementar\_plazas(categoria)](#funcionalidadesincrementarplazascategoria)
   - [funcionalidades.inscribir\_pareja(nombre1, dni1, telefono1, correo1, nombre2, dni2, telefono2, correo2, categoria)](#funcionalidadesinscribirparejanombre1-dni1-telefono1-correo1-nombre2-dni2-telefono2-correo2-categoria)
   - [funcionalidades.cancelar\_inscripcion(dni1, dni2)](#funcionalidadescancelarinscripciondni1-dni2)
   - [funcionalidades.modificar\_pareja(dni1, dni2, nnombre1, nnombre2, ndni1, ndni2, ntelefono1, ntelefono2, ncorreo1, ncorreo2)](#funcionalidadesmodificarparejadni1-dni2-nnombre1-nnombre2-ndni1-ndni2-ntelefono1-ntelefono2-ncorreo1-ncorreo2)
   - [funcionalidades.consultar\_parejas\_categoria(categoria) ⇒ <code>json</code>](#funcionalidadesconsultarparejascategoriacategoria)
   - [funcionalidades.consultar\_parejas\_totales() ⇒ <code>json</code>](#funcionalidadesconsultarparejastotales)
   - [funcionalidades.consultar\_categoria\_pareja(nombre1, nombre2) ⇒ <code>json</code>](#funcionalidadesconsultarcategoriaparejanombre1-nombre2)
   - [funcionalidades.consultar\_pareja\_integrante(nombre) ⇒ <code>json</code>](#funcionalidadesconsultarparejaintegrantenombre)
   - [funcionalidades.consultar\_pareja\_categoria(nombre, categoria) ⇒ <code>json</code>](#funcionalidadesconsultarparejacategorianombre-categoria)
   - [funcionalidades.consultar\_plazas\_disponibles(categoria) ⇒ <code>string</code>](#funcionalidadesconsultarplazasdisponiblescategoria)
<!--ts-->

***

<a name="new-funcionalidadesnombrecompeticion"></a>

#### new Funcionalidades(nombre_competicion)
Crea una competición.


| Param | Type | Description |
| --- | --- | --- |
| nombre_competicion | <code>string</code> | Nombre de la competición. |

<a name="funcionalidadesdecrementarplazascategoria"></a>

#### funcionalidades.decrementar\_plazas(categoria)
Decrementa el número de plazas disponibles de una categoría.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  

| Param | Type | Description |
| --- | --- | --- |
| categoria | <code>string</code> | Categoría con una plaza disponible menos. |

<a name="funcionalidadesincrementarplazascategoria"></a>

#### funcionalidades.incrementar\_plazas(categoria)
Decrementa el número de plazas disponibles de una categoría.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  

| Param | Type | Description |
| --- | --- | --- |
| categoria | <code>\*</code> | Categoría con una plaza disponible más. |

<a name="funcionalidadesinscribirparejanombre1-dni1-telefono1-correo1-nombre2-dni2-telefono2-correo2-categoria"></a>

#### funcionalidades.inscribir\_pareja(nombre1, dni1, telefono1, correo1, nombre2, dni2, telefono2, correo2, categoria)
Inscribe una pareja en la competición.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  

| Param | Type | Description |
| --- | --- | --- |
| nombre1 | <code>string</code> | Nombre del primer integrante de la pareja. |
| dni1 | <code>string</code> | DNI del primer integrante de la pareja. |
| telefono1 | <code>string</code> | Teléfono del primer integrante de la pareja. |
| correo1 | <code>string</code> | Correo electrónico del primer integrante de la pareja. |
| nombre2 | <code>string</code> | Nombre del segundo integrante de la pareja. |
| dni2 | <code>string</code> | DNI del segundo integrante de la pareja. |
| telefono2 | <code>string</code> | Teléfono del segundo integrante de la pareja. |
| correo2 | <code>string</code> | Correo electrónico del segundo integrante de la pareja. |
| categoria | <code>string</code> | Categoría a la que pertenece la pareja. |

<a name="funcionalidadescancelarinscripciondni1-dni2"></a>

#### funcionalidades.cancelar\_inscripcion(dni1, dni2)
Cancela la inscripción de una pareja.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  

| Param | Type | Description |
| --- | --- | --- |
| dni1 | <code>string</code> | DNI del integrante 1 de la pareja. |
| dni2 | <code>string</code> | DNI del integrante 2 de la pareja. |

<a name="funcionalidadesmodificarparejadni1-dni2-nnombre1-nnombre2-ndni1-ndni2-ntelefono1-ntelefono2-ncorreo1-ncorreo2"></a>

#### funcionalidades.modificar\_pareja(dni1, dni2, nnombre1, nnombre2, ndni1, ndni2, ntelefono1, ntelefono2, ncorreo1, ncorreo2)
Modifica los datos de una pareja, si no se desean modificar algunos de ellos,
simplemente introducir los valores actuales.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  

| Param | Type | Description |
| --- | --- | --- |
| dni1 | <code>string</code> | DNI del primer integrante de la pareja. |
| dni2 | <code>string</code> | DNI del segundo integrante de la pareja. |
| nnombre1 | <code>string</code> | Nuevo nombre del primer integrante de la pareja. |
| nnombre2 | <code>string</code> | Nuevo nombre del segundo integrante de la pareja. |
| ndni1 | <code>string</code> | Nuevo DNI del primer integrante de la pareja. |
| ndni2 | <code>string</code> | Nuevo DNI del segundo integrante de la pareja. |
| ntelefono1 | <code>string</code> | Nuevo teléfono del primer integrante de la pareja. |
| ntelefono2 | <code>string</code> | Nuevo teléfono del segundo integrante de la pareja. |
| ncorreo1 | <code>string</code> | Nuevo correo del primer integrante de la pareja. |
| ncorreo2 | <code>string</code> | Nuevo correo del segundo integrante de la pareja. |

<a name="funcionalidadesconsultarparejascategoriacategoria"></a>

#### funcionalidades.consultar\_parejas\_categoria(categoria) ⇒ <code>json</code>
Devuelve las parejas integrantes de una categoría.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  
**Returns**: <code>json</code> - - Parejas integrantes de una categoría.  

| Param | Type | Description |
| --- | --- | --- |
| categoria | <code>string</code> | Categoría de la que se quieren saber las parejas. |

<a name="funcionalidadesconsultarparejastotales"></a>

#### funcionalidades.consultar\_parejas\_totales() ⇒ <code>json</code>
Devuelve las parejas que hay inscritas en toda la competición.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  
**Returns**: <code>json</code> - - Parejas que hay inscritas en toda la competición  
<a name="funcionalidadesconsultarcategoriaparejanombre1-nombre2"></a>

#### funcionalidades.consultar\_categoria\_pareja(nombre1, nombre2) ⇒ <code>json</code>
Devuelve la categoría a la que pertenece una pareja.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  
**Returns**: <code>json</code> - - Categoría a la que pertenece una pareja  

| Param | Type | Description |
| --- | --- | --- |
| nombre1 | <code>string</code> | Nombre del primer integrante. |
| nombre2 | <code>string</code> | Nombre del segundo integrante. |

<a name="funcionalidadesconsultarparejaintegrantenombre"></a>

#### funcionalidades.consultar\_pareja\_integrante(nombre) ⇒ <code>json</code>
Devuelve la información de la pareja del participante indicado

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  
**Returns**: <code>json</code> - - Información de la pareja.  

| Param | Type | Description |
| --- | --- | --- |
| nombre | <code>string</code> | Integrante de la pareja del que se desconoce compañero |

<a name="funcionalidadesconsultarparejacategorianombre-categoria"></a>

#### funcionalidades.consultar\_pareja\_categoria(nombre, categoria) ⇒ <code>json</code>
Devuelve la pareja de un participante en una categoría concreta.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  
**Returns**: <code>json</code> - - Pareja del participante en la categoría.  

| Param | Type | Description |
| --- | --- | --- |
| nombre | <code>string</code> | Nombre de uno de los integrantes de la pareja. |
| categoria | <code>string</code> | Categoría a la que pertenece la pareja. |

<a name="funcionalidadesconsultarplazasdisponiblescategoria"></a>

#### funcionalidades.consultar\_plazas\_disponibles(categoria) ⇒ <code>string</code>
Devuelve el número de parejas que hay en la categoría indicada.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  
**Returns**: <code>string</code> - - Plazas disponibles.  

| Param | Type | Description |
| --- | --- | --- |
| categoria | <code>string</code> | Categoría de la que se quieren conocer plazas disponibles. |

