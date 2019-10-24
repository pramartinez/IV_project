var request = require('supertest');
var app = require('../app');

var nueva_pareja = {
    "participante1": {
        "nombre": "Ana",
        "dni": "280898",
        "telefono": "66666666",
        "correo": "ana@correo.es"
    },
    "participante2": {
        "nombre": "Paula",
        "dni": "290999",
        "telefono": "66666630",
        "correo": "paula@correo.com"
    },
    "categoria":"femenina"    
    };


var modificacion = {
    "participante1":"280898",
    "participante2":"290999",
    "modificacion":{
        "participante1": {
            "nombre": "Ana",
            "dni": "280898",
            "telefono": "66666666",
            "correo": "ana_nuevo@correo.es"
        },
        "participante2": {
            "nombre": "Paula",
            "dni": "290999",
            "telefono": "66666630",
            "correo": "paula_nuevo@correo.com"
        },
        "categoria":"femenina" 
    }   
    };

describe( "GET status", function() {
    it('Should get OK status', function(done) {
        request(app)
            .get('/status')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe( "GET home page", function() {
    it('Should get OK status', function(done) {
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe( "POST inscripción", function() {
    it('Should create a new inscription', function(done) {
        request(app)
            .post('/inscripcion')
            .send(nueva_pareja)
            .expect(201, done);
    });
});

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

describe( "PUT modificación", function() {
    it('Should modify an inscription', function(done) {
        request(app)
            .put('/modificacion')
            .send(modificacion)
            .expect(200, done);
    });
});

describe( "GET parejas de categoría", function() {
    it('Should get the couples of a cathegory', function(done) {
        request(app)
            .get('/categoria/femenina')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe( "GET parejas de la competición", function() {
    it('Should get the couples of the competition', function(done) {
        request(app)
            .get('/parejas')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe( "GET categoría de pareja", function() {
    it('Should get the cathegory of a couple', function(done) {
        request(app)
            .get('/categoria_pareja')
            .send({
                    "nombre1":"alba",
                    "nombre2":"famita"
                  })
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe( "GET pareja de participante", function() {
    it('Should get the couple of a player in a cathegory', function(done) {
        request(app)
            .get('/pareja_integrante').send({
                "nombre":"alba"
              })
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe( "GET pareja de participante en categoría", function() {
    it('Should get the couple of a player in a cathegory', function(done) {
        request(app)
            .get('/pareja_integrante/femenina').send({
                "nombre":"alba"
              })
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe( "GET número de plazas", function() {
    it('Should get the number os avaible plazes', function(done) {
        request(app)
            .get('/plazas/femenina')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});