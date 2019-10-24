var path = "app/data/integrantes_tmp.json";
var fs = require('fs');


class Initialize_Database {

    initialize() {
        // Inicializamos fichero para el testeo
        var json = JSON.stringify(JSON.parse("[]"), null, 2);
        fs.writeFileSync(path,json,'utf8',function(err){
            if(err) {
                throw err;
        }
        });

        var data = fs.readFileSync(path,'utf8',function(err){
            if(err) {
            throw err;
        }
        });

        var obj = JSON.parse(data);

        var nueva_pareja = {
                            "participante1": {
                                "nombre": "alba",
                                "dni": "3",
                                "telefono": "3",
                                "correo": "3"
                            },
                            "participante2": {
                                "nombre": "famita",
                                "dni": "4",
                                "telefono": "4",
                                "correo": "4"
                            },
                            "categoria": "femenina"
                        };

        obj.push(nueva_pareja);

        nueva_pareja =     {
                            "participante1": {
                                "nombre": "pilar",
                                "dni": "5",
                                "telefono": "5",
                                "correo": "5"
                            },
                            "participante2": {
                                "nombre": "alvaro",
                                "dni": "6",
                                "telefono": "6",
                                "correo": "6"
                            },
                            "categoria": "mixta"
                            };

        obj.push(nueva_pareja);

        nueva_pareja =     {
                            "participante1": {
                                "nombre": "nanu",
                                "dni": "7",
                                "telefono": "7",
                                "correo": "7"
                            },
                            "participante2": {
                                "nombre": "sergio",
                                "dni": "8",
                                "telefono": "8",
                                "correo": "8"
                            },
                            "categoria": "masculina"
                            };

        obj.push(nueva_pareja);

        /*nueva_pareja =      {
                            "participante1": {
                                "nombre": "julia",
                                "dni": "9",
                                "telefono": "9",
                                "correo": "9"
                            },
                            "participante2": {
                                "nombre": "pepa",
                                "dni": "11",
                                "telefono": "11",
                                "correo": "11"
                            },
                            "categoria": "femenina"
                            };

        obj.push(nueva_pareja);*/

        var json = JSON.stringify(obj, null, 2);

        fs.writeFileSync(path,json,function(err){
            if(err) {
                throw err;
            }
        });
    }
}

module.exports = Initialize_Database;