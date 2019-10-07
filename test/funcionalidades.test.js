var Funcionalidades = require('../app/funcionalidades.js');
var funcionalidades = new Funcionalidades("Torneo2019","app/data/integrantes_tmp.json");
var fs = require('fs');

funcionalidades.inscribir_pareja("alba","3","3","3","famita","4","4","4","femenina");
funcionalidades.inscribir_pareja("pilar","5","5","5","alvaro","6","6","6","mixta");
funcionalidades.inscribir_pareja("nanu","7","7","7","sergio","8","8","8","masculina");

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

    data = fs.readFileSync("app/data/integrantes_tmp.json",'utf8',function(err){
                if(err) throw err;
            });
    var obj = JSON.parse(data);
    var obj_filtred = obj.filter(o => o.participante1.dni == "1" && o.participante2.dni == "2");
    
    if (obj_filtred[0] == undefined) {
        //console.log("testing: La pareja no existe aún.")
        funcionalidades.inscribir_pareja("pra","1","1","1","pilar","2","2","2","femenina");
    
        data = fs.readFileSync("app/data/integrantes_tmp.json",'utf8',function(err){
                if(err) throw err;
            });
        obj = JSON.parse(data);
        obj_filtred = obj.filter(o => o.participante1.dni == "1" && o.participante2.dni == "2");
    
        expect(obj_filtred[0]).toEqual(nueva_pareja);
    }
});

test('Remove couple inscription',() => {
    funcionalidades.cancelar_inscripcion("1","2");

    data = fs.readFileSync("app/data/integrantes_tmp.json",'utf8',function(err){
                if(err) throw err;
            });
    var obj = JSON.parse(data);
    var obj_filtred = obj.filter(o => o.participante1.dni == "1" && o.participante2.dni == "2");

    expect(obj_filtred[0]).toEqual(undefined);
});

test('Modify a couple',() => {

    
    data = fs.readFileSync("app/data/integrantes_tmp.json",'utf8',function(err){
                if(err) throw err;
            });
    var obj = JSON.parse(data);
    var obj_filtred = obj.filter(o => o.participante1.dni == "9" 
    && o.participante2.dni == "10");
    
    // Si la pareja que vamos a modificar para el testeo no existe ya, la inscribimos
    funcionalidades.inscribir_pareja("julia","9","9","9","lorena","10","10","10","femenina");

    var modificacion = {
        "participante1": {
            "nombre":"julia",
            "dni":"9",
            "telefono":"9",
            "correo":"9"
        },
        
        "participante2": {
            "nombre":"pepa",
            "dni":"11",
            "telefono":"11",
            "correo":"11"
        },
        
        "categoria":"femenina"
    };
    
    // Modificamos la pareja
    funcionalidades.modificar_pareja("9","10","julia","pepa","9","11","9","11","9","11");

    data = fs.readFileSync("app/data/integrantes_tmp.json",'utf8',function(err){
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
    response = funcionalidades.consultar_parejas_categoria("femenina");

    data = fs.readFileSync("app/data/integrantes_tmp.json",'utf8',function(err){
                if(err) throw err;
            });
    var obj = JSON.parse(data);
    var obj_filtred = obj.filter(o => o.categoria == "femenina");

    expect(response).toEqual(obj_filtred[0]);    
});

test('Consulting all the couples in the competition',() => {
    response = funcionalidades.consultar_parejas_totales();

    data = fs.readFileSync("app/data/integrantes_tmp.json",'utf8',function(err){
                if(err) throw err;
            });
    var obj = JSON.parse(data);

    expect(response).toEqual(obj);    
});

test('Consulting the couple o a member',() => {
    response = funcionalidades.consultar_pareja_integrante("nanu");

    data = fs.readFileSync("app/data/integrantes_tmp.json",'utf8',function(err){
                if(err) throw err;
            });
    var obj = JSON.parse(data);
    var obj_filtred = obj.filter(o => o.participante1.nombre == "nanu" || o.participante2.nombre == "nanu")

    expect(response).toEqual(obj_filtred[0]);    
});

test('Consulting the couple o a member in a cathegory',() => {
    response = funcionalidades.consultar_pareja_categoria("nanu", "masculina");

    data = fs.readFileSync("app/data/integrantes_tmp.json",'utf8',function(err){
                if(err) throw err;
            });
    var obj = JSON.parse(data);
    var obj_filtred = obj.filter(o => (o.participante1.nombre == "nanu" || o.participante2.nombre == "nanu") && o.categoria == "masculina")

    expect(response).toEqual(obj_filtred[0]);    
});

test('Consulting avaible plazes',() => {
    response = funcionalidades.consultar_plazas_disponibles("femenina");

    data = fs.readFileSync("app/data/integrantes_tmp.json",'utf8',function(err){
                if(err) throw err;
            });
    var obj = JSON.parse(data);
    var obj_filtred = obj.filter(o => (o.categoria == "femenina"));
    num = 20 - obj_filtred.length;

    expect(response).toEqual("Hay " + num  + " plazas disponibles en la categoria femenina.");    
});