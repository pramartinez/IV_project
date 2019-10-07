<a name="Funcionalidades"></a>

##Funcionalidades
***Clase que representa una competición: sus funcionalidades.***

**Kind**: global class  

* [Funcionalidades](#Funcionalidades)
    * [new Funcionalidades(nombre_competicion)](#new_Funcionalidades_new)
    * [.decrementar_plazas(categoria)](#Funcionalidades+decrementar_plazas)
    * [.incrementar_plazas(categoria)](#Funcionalidades+incrementar_plazas)
    * [.inscribir_pareja(nombre1, dni1, telefono1, correo1, nombre2, dni2, telefono2, correo2, categoria)](#Funcionalidades+inscribir_pareja)
    * [.cancelar_inscripcion(dni1, dni2)](#Funcionalidades+cancelar_inscripcion)
    * [.modificar_pareja(dni1, dni2, nnombre1, nnombre2, ndni1, ndni2, ntelefono1, ntelefono2, ncorreo1, ncorreo2)](#Funcionalidades+modificar_pareja)
    * [.consultar_parejas_categoria(categoria)](#Funcionalidades+consultar_parejas_categoria) ⇒ <code>json</code>
    * [.consultar_parejas_totales()](#Funcionalidades+consultar_parejas_totales) ⇒ <code>json</code>
    * [.consultar_categoria_pareja(nombre1, nombre2)](#Funcionalidades+consultar_categoria_pareja) ⇒ <code>json</code>
    * [.consultar_pareja_integrante(nombre)](#Funcionalidades+consultar_pareja_integrante) ⇒ <code>json</code>
    * [.consultar_pareja_categoria(nombre, categoria)](#Funcionalidades+consultar_pareja_categoria) ⇒ <code>json</code>
    * [.consultar_plazas_disponibles(categoria)](#Funcionalidades+consultar_plazas_disponibles) ⇒ <code>string</code>

<a name="new_Funcionalidades_new"></a>

 new Funcionalidades(nombre_competicion)
Crea una competición.


| Param | Type | Description |
| --- | --- | --- |
| nombre_competicion | <code>string</code> | Nombre de la competición. |

<a name="Funcionalidades+decrementar_plazas"></a>

 funcionalidades.decrementar\_plazas(categoria)
Decrementa el número de plazas disponibles de una categoría.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  

| Param | Type | Description |
| --- | --- | --- |
| categoria | <code>string</code> | Categoría con una plaza disponible menos. |

<a name="Funcionalidades+incrementar_plazas"></a>

 funcionalidades.incrementar\_plazas(categoria)
Decrementa el número de plazas disponibles de una categoría.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  

| Param | Type | Description |
| --- | --- | --- |
| categoria | <code>\*</code> | Categoría con una plaza disponible más. |

<a name="Funcionalidades+inscribir_pareja"></a>

 funcionalidades.inscribir\_pareja(nombre1, dni1, telefono1, correo1, nombre2, dni2, telefono2, correo2, categoria)
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

<a name="Funcionalidades+cancelar_inscripcion"></a>

 funcionalidades.cancelar\_inscripcion(dni1, dni2)
Cancela la inscripción de una pareja.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  

| Param | Type | Description |
| --- | --- | --- |
| dni1 | <code>string</code> | DNI del integrante 1 de la pareja. |
| dni2 | <code>string</code> | DNI del integrante 2 de la pareja. |

<a name="Funcionalidades+modificar_pareja"></a>

 funcionalidades.modificar\_pareja(dni1, dni2, nnombre1, nnombre2, ndni1, ndni2, ntelefono1, ntelefono2, ncorreo1, ncorreo2)
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

<a name="Funcionalidades+consultar_parejas_categoria"></a>

 funcionalidades.consultar\_parejas\_categoria(categoria) ⇒ <code>json</code>
Devuelve las parejas integrantes de una categoría.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  
**Returns**: <code>json</code> - - Parejas integrantes de una categoría.  

| Param | Type | Description |
| --- | --- | --- |
| categoria | <code>string</code> | Categoría de la que se quieren saber las parejas. |

<a name="Funcionalidades+consultar_parejas_totales"></a>

 funcionalidades.consultar\_parejas\_totales() ⇒ <code>json</code>
Devuelve las parejas que hay inscritas en toda la competición.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  
**Returns**: <code>json</code> - - Parejas que hay inscritas en toda la competición  
<a name="Funcionalidades+consultar_categoria_pareja"></a>

 funcionalidades.consultar\_categoria\_pareja(nombre1, nombre2) ⇒ <code>json</code>
Devuelve la categoría a la que pertenece una pareja.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  
**Returns**: <code>json</code> - - Categoría a la que pertenece una pareja  

| Param | Type | Description |
| --- | --- | --- |
| nombre1 | <code>string</code> | Nombre del primer integrante. |
| nombre2 | <code>string</code> | Nombre del segundo integrante. |

<a name="Funcionalidades+consultar_pareja_integrante"></a>

 funcionalidades.consultar\_pareja\_integrante(nombre) ⇒ <code>json</code>
Devuelve la información de la pareja del participante indicado

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  
**Returns**: <code>json</code> - - Información de la pareja.  

| Param | Type | Description |
| --- | --- | --- |
| nombre | <code>string</code> | Integrante de la pareja del que se desconoce compañero |

<a name="Funcionalidades+consultar_pareja_categoria"></a>

 funcionalidades.consultar\_pareja\_categoria(nombre, categoria) ⇒ <code>json</code>
Devuelve la pareja de un participante en una categoría concreta.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  
**Returns**: <code>json</code> - - Pareja del participante en la categoría.  

| Param | Type | Description |
| --- | --- | --- |
| nombre | <code>string</code> | Nombre de uno de los integrantes de la pareja. |
| categoria | <code>string</code> | Categoría a la que pertenece la pareja. |

<a name="Funcionalidades+consultar_plazas_disponibles"></a>

 funcionalidades.consultar\_plazas\_disponibles(categoria) ⇒ <code>string</code>
Devuelve el número de parejas que hay en la categoría indicada.

**Kind**: instance method of [<code>Funcionalidades</code>](#Funcionalidades)  
**Returns**: <code>string</code> - - Plazas disponibles.  

| Param | Type | Description |
| --- | --- | --- |
| categoria | <code>string</code> | Categoría de la que se quieren conocer plazas disponibles. |

