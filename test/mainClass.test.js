var Initialize_Database = require('../app/initialize_database.js')
var mainClass = require('../app/mainClass.js');
var path = "app/data/integrantes_tmp.json";
var fs = require('fs');
var init = new Initialize_Database();
init.initialize();

var mainClass = new mainClass("Torneo2019",path);


test('Inscribe new couple in competition',() => {

    var nueva_pareja = {
        "participante1": {
            "nombre":"pra",
            "dni":"1",
            "telefono":"1",
            "correo":"1"
        },

        "participante2": {
            "nombre":"pilar",
            "dni":"2",
            "telefono":"2",
            "correo":"2"
        },

        "categoria":"femenina"
        };

    var data = fs.readFileSync(path,'utf8',function(err){
                if(err) throw err;
            });
    var obj = JSON.parse(data);
    var obj_filtred = obj.filter(o => o.participante1.dni == "1" && o.participante2.dni == "2");
    
    if (obj_filtred[0] == undefined) {
        //console.log("testing: La pareja no existe aún.")
        try {
            mainClass.inscribir_pareja("pra","1","1","1","pilar","2","2","2","femenina");    
        }
        catch(e) {
            if (e.message == 'La pareja ya existe, no se puede reinscribir.') {
                expect(e.message).toEqual('La pareja ya existe, no se puede reinscribir.');
            }
            else if (e.message == 'Datos incorrectos.') {
                expect(e.message).toEqual('Datos incorrectos.');
            }
            else if (e.message == 'No quedan plazas disponibles.') {
                expect(e.message).toEqual('No quedan plazas disponibles.');
            }
            else {
                throw e;
            }
        }
        var data = fs.readFileSync(path,'utf8',function(err){
            if(err) throw err;
        });
        obj = JSON.parse(data);
        obj_filtred = obj.filter(o => o.participante1.dni == "1" && o.participante2.dni == "2");
        
        expect(obj_filtred[0]).toEqual(nueva_pareja);
    }
});

test('Remove couple inscription',() => {
    try {
        mainClass.cancelar_inscripcion("1","2");  
    }
    catch(e) {
        expect(e.message).toEqual('La pareja no existe, no se puede cancelar la inscripción.');

    }

    var data = fs.readFileSync(path,'utf8',function(err){
                if(err) throw err;
            });
    var obj = JSON.parse(data);
    var obj_filtred = obj.filter(o => o.participante1.dni == "1" && o.participante2.dni == "2");

    expect(obj_filtred[0]).toEqual(undefined);
});

test('Modify a couple',() => {
    var data = fs.readFileSync(path,'utf8',function(err){
                if(err) throw err;
            });
    var obj = JSON.parse(data);
    var obj_filtred = obj.filter(o => o.participante1.dni == "9" 
    && o.participante2.dni == "10");

    // Si la pareja que vamos a modificar para el testeo no existe ya, la inscribimos
    mainClass.inscribir_pareja("julia","9","9","9","lorena","10","10","10","femenina");

    var modificacion = {
        "participante1": {
            "nombre":"marta",
            "dni":"9",
            "telefono":"9",
            "correo":"9"
        },
        
        "participante2": {
            "nombre":"paca",
            "dni":"11",
            "telefono":"11",
            "correo":"11"
        },
        
        "categoria":"femenina"
    };

    try {
        // Modificamos la pareja
        mainClass.modificar_pareja("9","10","marta","paca","9","11","9","11","9","11");
    }
    catch(e) {
        expect(e.message).toEqual('La pareja no existe, no se puede modificar la inscripción.');
    }

    var data = fs.readFileSync(path,'utf8',function(err){
                if(err) throw err;
            });
    obj = JSON.parse(data);

    var obj_filtred1 = obj.filter(o => o.participante1.dni == "9" 
                                    && o.participante2.dni == "11");
    var obj_filtred2 = obj.filter(o => o.participante1.dni == "9" 
                                    && o.participante2.dni == "10");

    expect(obj_filtred1[0]).toEqual(modificacion);
    expect(obj_filtred2[0]).toEqual(undefined);
});

test('Consulting couples in a cathegory',() => {
    try {
        response = mainClass.consultar_parejas_categoria("femenina");
    }
    catch(e) {
        expect(e.message).toEqual('Categoría vacía.');        
    }

    var data = fs.readFileSync(path,'utf8',function(err){
                if(err) throw err;
            });
    var obj = JSON.parse(data);
    var obj_filtred = obj.filter(o => o.categoria == "femenina");

    expect(response[0]).toEqual(obj_filtred[0]);    
    
});

test('Consulting all the couples in the competition',() => {
    try {
        response = mainClass.consultar_parejas_totales();
    }
    catch(e) {
        expect(e.message).toEqual('Competición sin parejas.');        
    }
    
    var data = fs.readFileSync(path,'utf8',function(err){
                if(err) throw err;
            });
    var obj = JSON.parse(data);

    expect(response).toEqual(obj);    
});

//TODO CATEGORIA DE UNA PAREJA

test('Consulting the couple of a member',() => {
    
    try {
        response = mainClass.consultar_pareja_integrante("nanu");
    }
    catch(e) {
        expect(e.message).toEqual('Pareja inexistente.');                
    }

    var data = fs.readFileSync(path,'utf8',function(err){
                if(err) throw err;
            });
    var obj = JSON.parse(data);
    var obj_filtred = obj.filter(o => o.participante1.nombre == "nanu" || o.participante2.nombre == "nanu")

    expect(response).toEqual(obj_filtred[0]);    
});

test('Consulting the couple of a member in a cathegory',() => {
    try {
        response = mainClass.consultar_pareja_categoria("nanu", "masculina");
    }
    catch(e) {
        expect(e.message).toEqual('Pareja inexistente.');                        
    }

    var data = fs.readFileSync(path,'utf8',function(err){
                if(err) throw err;
            });
    var obj = JSON.parse(data);
    var obj_filtred = obj.filter(o => (o.participante1.nombre == "nanu" || o.participante2.nombre == "nanu") && o.categoria == "masculina")

    expect(response).toEqual(obj_filtred[0]);    
});

test('Consulting avaible plazes',() => {
    response = mainClass.consultar_plazas_disponibles("femenina");

    var data = fs.readFileSync(path,'utf8',function(err){
        if(err) throw err;
    });
    var obj = JSON.parse(data);
    var obj_filtred = obj.filter(o => (o.categoria == "femenina"));
    num = 20 - obj_filtred.length;
    
    var correcto = {"plazas":num}

    expect(response).toEqual(correcto);    
});


