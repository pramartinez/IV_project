class Funcionalidades {

    constructor() {
        this.categorias = ['femenina','masculina','mixta'];
        this.plazas = {
            "femenina": 20,
            "masculina": 20,
            "mixta": 20
            };
        this.fs = require('fs')

        if (!this.fs.existsSync("integrantes.json")) {
            var json = JSON.stringify(JSON.parse("[]"), null, 2);;
            this.fs.writeFileSync("integrantes.json",json,'utf8',function(err){
                if(err) throw err;
            });
        }
        else {
            this.data = this.fs.readFileSync("integrantes.json",'utf8');
            var obj = JSON.parse(this.data);
            
            var obj_filtred = obj.filter(o => (o.categoria == "femenina"));
            this.plazas["femenina"] = 20 - obj_filtred.length;
            obj_filtred = obj.filter(o => (o.categoria == "mixta"));
            this.plazas["mixta"] = 20 - obj_filtred.length;
            obj_filtred = obj.filter(o => (o.categoria == "masculina"));
            this.plazas["masculina"] = 20 - obj_filtred.length;
        }

        this.data = this.fs.readFileSync("integrantes.json",'utf8');
    }


    decrementar_plazas(categoria) {
        this.plazas[categoria] -= 1;
    }

    incrementar_plazas(categoria) {
        this.plazas[categoria] += 1;
    }

    /* Función para inscribir una pareja en la competición, se han de especificar 
    género del integrante y categoría. */
    inscribir_pareja(nombre1, dni1, telefono1, correo1, nombre2, dni2, telefono2, correo2, categoria){

        // Si aún hay plazas restantes
        if (this.plazas[categoria] > 0) {
            var cat_encontrada = false;

            // Creamos nueva pareja con los datos introducidos
            var nueva_pareja = {
                "participante1": {
                    "nombre":nombre1,
                    "dni":dni1,
                    "telefono":telefono1,
                    "correo":correo1
                },

                "participante2": {
                    "nombre":nombre2,
                    "dni":dni2,
                    "telefono":telefono2,
                    "correo":correo2
                },

                "categoria":categoria
                };

            // buscar funciones con =>
            // Comprobamos que la categoría elegida existe
            this.categorias.forEach(function(element) {
                if (element == categoria) {
                    cat_encontrada = true;
                }
            });

            // Si los datos introducidos son correctos
            var tipo1 = ((typeof nombre1) == "string");
            var tipo2 = ((typeof nombre2) == "string");
            var tipo3 = ((typeof dni1) == "string");
            var tipo4 = ((typeof dni2) == "string");
            var tipo5 = ((typeof telefono1) == "string");
            var tipo6 = ((typeof telefono2) == "string");
            var tipo7 = ((typeof correo1) == "string");
            var tipo8 = ((typeof correo2) == "string");

            if (cat_encontrada && tipo1 && tipo2 && tipo3 && tipo4 && tipo5
                && tipo6 && tipo7 && tipo8) {
                
                var ya_existente = false;
                
                //fs.readFile("integrantes.json",'utf8',(err,data)=> { 

                if(this.data === "" ){
                    //console.log("Empty file.");
                }
                else {
                    // Si no se produce error en la lectura del archivo
                    // Creamos objeto json de lo leído
                    this.data = this.fs.readFileSync("integrantes.json",'utf8');

                    var obj = JSON.parse(this.data);
                    var ya_existe = false;

                    // Recorremos el objeto json para comprobar si la pareja que se
                    // quiere inscribir ya lo está
                    obj.forEach(function(element) {
                        var p1 = element.participante1.nombre;
                        var p2 = element.participante2.nombre;

                        if (( p1 == nombre1 && p2 == nombre2) 
                            || (p1 == nombre2 && p2 == nombre1)) {
                                ya_existe = true;
                            }
                    });

                    // Si no existe ya la pareja
                    if (!ya_existe) {

                        // Insertamos nueva pareja en el json
                        obj.push(nueva_pareja);

                        //console.log('\n\nPareja inscrita correctamente.');
                        
                        // Decrementamos las plazas disponibles
                        this.decrementar_plazas(categoria);
                        //this.consultar_plazas_disponibles(categoria);

                        // Creamos string que vamos a añadir al archivo donde almacenamos
                        // los integrantes
                        this.data = this.fs.readFileSync("integrantes.json",'utf8');
                        var json = JSON.stringify(obj, null, 2);

                        // Escribimos nuevos datos en el archivo de salida
                        this.fs.writeFileSync("integrantes.json",json);
                    }
                    else {
                        //console.log('\n\nLa pareja ya existe, no se puede reinscribir.');
                    }
                    
                }

            }
            else {
                //console.log('\n\nDatos incorrectos.');
            }
        }
        else {
            //console.log("\n\nNo quedan plazas disponibles.")
        }     
    }


    cancelar_inscripcion(dni1,dni2) {
        var index = -1;
        var categoria, p1, p2;

        //var data =this.fs.readFileSync("integrantes.json",'utf8');
        if (this.data === "") {
            //console.log("Empty file.");            
        }
        else {
            index = -1;
            this.data = this.fs.readFileSync("integrantes.json",'utf8');
            var obj = JSON.parse(this.data);
            for (var i = 0; i < obj.length ; ++i) {
            //obj.forEach(function(element) {
                p1 = obj[i].participante1.dni;
                p2 = obj[i].participante2.dni;

                if ((p1 == dni1 && p2 == dni2) || (p2 == dni1 && p1 == dni2)) {
                    index = i;
                    categoria = obj[i].categoria;
                }
            }

            if (index > -1) {
                delete obj[index];
                //var json = JSON.stringify(obj, null, 2);
                var json = JSON.stringify(obj, (k, v) => Array.isArray(v) ? v.filter(e => e !== null):v, 2 );
                
                this.fs.writeFileSync("integrantes.json",json);
                this.incrementar_plazas(categoria);
                //this.consultar_plazas_disponibles(categoria);
                //console.log("\n\nInscripción cancelada correctamente.")
            }
            else {
                //console.log("\n\nLa pareja no existe, no se puede cancelar la inscripción.")
            }
        }
    }

    modificar_pareja(dni1,dni2,nnombre1, nnombre2, ndni1, ndni2, ntelefono1, ntelefono2,
                     ncorreo1, ncorreo2) {
        var categoria, p1, p2, index;

        var modificacion = {
            "participante1": {
                "nombre":nnombre1,
                "dni":ndni1,
                "telefono":ntelefono1,
                "correo":ncorreo1
            },

            "participante2": {
                "nombre":nnombre2,
                "dni":ndni2,
                "telefono":ntelefono2,
                "correo":ncorreo2
            },

            "categoria":null
            };

        //var data =this.fs.readFileSync("integrantes.json",'utf8');
        if (this.data === "") {
            //console.log("Empty file.");            
        }
        else {
            index = -1;

            this.data = this.fs.readFileSync("integrantes.json",'utf8');
            var obj = JSON.parse(this.data);
            var obj_filtred = obj.filter(o => (o.participante1.dni == ndni1
                                              && o.participante2.dni == ndni2)
                                              ||
                                              (o.participante1.dni == ndni2
                                              && o.participante2.dni == ndni1));

            if (obj_filtred[0] == undefined) {
                
                for (var i = 0; i < obj.length ; ++i) {
                //obj.forEach(function(element) {
                    p1 = obj[i].participante1.dni;
                    p2 = obj[i].participante2.dni;
                    categoria = obj[i].categoria;
    
                    if ((p1 == dni1 && p2 == dni2) || (p2 == dni1 && p1 == dni2)) {
                        index = i;
                    }
                }
    
                if (index > -1) {
                    modificacion.categoria = categoria;
                    obj[index] = modificacion;
    
                    var json = JSON.stringify(obj, null, 2);
                    
                    this.fs.writeFileSync("integrantes.json",json);
                    //console.log("\n\nPareja modificada correctamente.")
    
                }
                else {
                    //console.log("\n\nLa pareja no existe, no se puede cancelar la inscripción.")
                }
            }
            else {
                this.cancelar_inscripcion(dni1,dni2);
            }                               

        }
    }


    consultar_parejas_categoria(categoria){
        this.data =this.fs.readFileSync("integrantes.json",'utf8');
        var obj = JSON.parse(this.data);
        var obj_filtred = obj.filter(o => o.categoria == categoria);

        //console.log("\n\nLas parejas de la categoría " + categoria + " son:");
        obj_filtred.forEach(function(element){
            //console.log("-----------------------");
            //console.log("Participante 1: " + element.participante1.nombre);
            //console.log("Participante 2: " + element.participante2.nombre);
        });
        //console.log("-----------------------");

        return obj_filtred[0];
    }

    consultar_parejas_totales(){
        this.data = this.fs.readFileSync("integrantes.json","utf8");
        var obj = JSON.parse(this.data);

        //console.log("\n\nLas parejas de la competición son:");
        obj.forEach(function(element){
            //console.log("-----------------------");
            //console.log("Participante 1: " + element.participante1.nombre);
            //console.log("Participante 2: " + element.participante2.nombre);
            //console.log("Categoría: " + element.categoria);
        });
        //console.log("-----------------------");

        return obj;
    }

    consultar_categoria_pareja(nombre1, nombre2){
        this.data = this.fs.readFileSync("integrantes.json","utf8");
        var obj = JSON.parse(this.data);

        var obj_filtred = obj.filter(o => o.participante1.nombre == nombre1 && o.participante2.nombre == nombre2);
        nombre1 = obj_filtred[0].participante1.nombre;
        nombre2 = obj_filtred[0].participante2.nombre;

        //console.log("\n\nLa categoría de la pareja " + nombre1 + "-" + nombre2 + " es " + obj_filtred[0].categoria + ":");
        //console.log("-----------------------");
        //console.log("Participante 1: " + nombre1);
        //console.log("Participante 2: " + nombre2);
        //console.log("Categoría: " + obj_filtred[0].categoria);
        //console.log("-----------------------");

        return obj_filtred[0];
    }

    consultar_pareja_integrante(nombre){
        this.data = this.fs.readFileSync("integrantes.json","utf8");
        var obj = JSON.parse(this.data);

        var obj_filtred = obj.filter(o => o.participante1.nombre == nombre || o.participante2.nombre == nombre);
        //console.log("\n\nLa pareja del participante " + nombre +  " es:");
        //console.log("-----------------------");
        //console.log("Participante 1: " + obj_filtred[0].participante1.nombre);
        //console.log("Participante 2: " + obj_filtred[0].participante2.nombre);
        //console.log("Categoría: " + obj_filtred[0].categoria);
        //console.log("-----------------------");

        return obj_filtred[0];
    }

    consultar_pareja_categoria(nombre, categoria){
        this.data = this.fs.readFileSync("integrantes.json","utf8");
        var obj = JSON.parse(this.data);

        var obj_filtred = obj.filter(o => o.categoria == categoria && (o.participante1.nombre == nombre || o.participante2.nombre == nombre));
        //console.log("\n\nLa pareja en la categoria" + categoria + " de " + nombre + " es:");
        //console.log("-----------------------");
        //console.log("Participante 1: " + obj_filtred[0].participante1.nombre);
        //console.log("Participante 2: " + obj_filtred[0].participante2.nombre);
        //console.log("Categoría: " + obj_filtred[0].categoria);
        //console.log("-----------------------");
        
        return obj_filtred[0];
    }

    consultar_plazas_disponibles(categoria){
        //console.log("Hay " + this.plazas[categoria] + " plazas disponibles en la categoria " + categoria + ".");
        
        return "Hay " + this.plazas[categoria] + " plazas disponibles en la categoria " + categoria + ".";
    }
}

module.exports = Funcionalidades;

/*
var funcionalidades = new Funcionalidades();
funcionalidades.inscribir_pareja("pra","pilar","femenina");
funcionalidades.modificar_pareja("pra","pilar","pra","alba");
funcionalidades.inscribir_pareja("nanu","sergio","masculina");
//funcionalidades.cancelar_inscripcion("pra","pilar");
funcionalidades.inscribir_pareja("pra","pilar","femenina");
funcionalidades.inscribir_pareja("pra","pilar","femenina");


funcionalidades.consultar_parejas_totales();

funcionalidades.consultar_pareja_categoria("pra","femenina");

funcionalidades.consultar_pareja_integrante("pilar");

funcionalidades.consultar_plazas_disponibles("femenina");
funcionalidades.consultar_plazas_disponibles("masculina");
funcionalidades.consultar_plazas_disponibles("mixta");

funcionalidades.consultar_categoria_pareja("nanu","sergio");

funcionalidades.inscribir_pareja("ana","victor","mixta");
funcionalidades.inscribir_pareja("alvaro","pilar","mixta");
funcionalidades.inscribir_pareja("pra","manu","mixta");
funcionalidades.inscribir_pareja("ana","juanma","mixta");

funcionalidades.inscribir_pareja("ana","paula","femenina");
funcionalidades.inscribir_pareja("mari","esther","femenina");

json = funcionalidades.consultar_parejas_categoria("femenina");
//console.log(json);
json = funcionalidades.consultar_parejas_categoria("masculina");
//console.log(json);
json = funcionalidades.consultar_parejas_categoria("mixta");
//console.log(json);
*/