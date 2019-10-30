var express = require('express');
var router = express.Router();
var VPTournaments = require('../app/funcionalidades.js');
var vpt = new VPTournaments("Torneo2019","app/data/integrantes_tmp.json");
var fs = require('fs');

/**
 * @api {get} /status Request Status information
 * @apiName GetStatus
 * @apiGroup Status
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */
router.get('/status', function(req, res, next) {
  res.status(200).json({"status":"OK"});
});

/**
 * @api {get} / Request Status information
 * @apiName GetStatus
 * @apiGroup Status
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */
router.get('/', function(req, res, next) {
  res.status(200).json({"status":"OK"});
});

/**
 * @api {post} /inscripcion Post a new couple in the competition
 * @apiName Inscripcion
 * @apiGroup Couples
 *
 * @apiParam {String} nombre1 Name of the first person in the couple.
 * @apiParam {String} nombre2 Name of the second person in the couple.
 * @apiParam {String} dni1 DNI of the first person in the couple.
 * @apiParam {String} dni2 DNI of the second person in the couple.
 * @apiParam {String} telefono1 Telf of the first person in the couple.
 * @apiParam {String} telefono2 Telf of the second person in the couple.
 * @apiParam {String} correo1 Email of the first person in the couple.
 * @apiParam {String} correo2 Email of the second person in the couple.
 * @apiParam {String} categoria Cathegory of the couple.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 */
router.post('/inscripcion', function(req, res, next) {
  var body = req.body;
  var nombre1 = body.participante1.nombre;
  var nombre2 = body.participante2.nombre;
  var dni1 = body.participante1.dni;
  var dni2 = body.participante2.dni;
  var telefono1 = body.participante1.telefono;
  var telefono2 = body.participante2.telefono;
  var correo1 = body.participante1.correo;
  var correo2 = body.participante2.correo;
  var categoria = body.categoria;

  try {
    vpt.inscribir_pareja(nombre1, dni1, telefono1, correo1, nombre2, dni2, telefono2, correo2, categoria);
    res.sendStatus(201);
  }
  catch(e) {
    throw e;
  }

});

/**
 * @api {delete} /cancelacion Delete a couple of the competition
 * @apiName Cancelacion
 * @apiGroup Couples
 *
 * @apiParam {String} dni1 DNI of the first person in the couple.
 * @apiParam {String} dni2 DNI of the second person in the couple.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */
router.delete('/cancelacion', function(req, res, next) {
  var body = req.body;
  var dni1 = body.dni1;
  var dni2 = body.dni2;

  try {
    vpt.cancelar_inscripcion(dni1,dni2);
    res.sendStatus(200);
  }
  catch(e) {
    throw e;
  }

});

/**
 * @api {put} /modificacion Modify a couple
 * @apiName Modificacion
 * @apiGroup Couples
 *
 * @apiParam {String} participante1 DNI of the first person in the couple.
 * @apiParam {String} participante2 DNI of the second person in the couple.
 * @apiParam {String} nnombre1 New or old name of the first person in the couple.
 * @apiParam {String} nnombre2 New or old name of the second person in the couple.
 * @apiParam {String} ndni1 New or old DNI of the first person in the couple.
 * @apiParam {String} ndni2 New or old DNI of the second person in the couple.
 * @apiParam {String} ntelefono1 New or old telf of the first person in the couple.
 * @apiParam {String} ntelefono2 New or old telf of the second person in the couple.
 * @apiParam {String} ncorreo1 New or old email of the first person in the couple.
 * @apiParam {String} ncorreo2 New or old email of the second person in the couple.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */
router.put('/modificacion', function(req, res, next) {
  var body = req.body;
  var dni1 = body.participante1;
  var dni2 = body.participante2;
  var nnombre1 = body.modificacion.participante1.nombre;
  var nnombre2 = body.modificacion.participante2.nombre;
  var ndni1 = body.modificacion.participante1.dni;
  var ndni2 = body.modificacion.participante2.dni;
  var ntelefono1 = body.modificacion.participante1.telefono;
  var ntelefono2 = body.modificacion.participante2.telefono;
  var ncorreo1 = body.modificacion.participante1.correo;
  var ncorreo2 = body.modificacion.participante2.correo;

  try {
    vpt.modificar_pareja(dni1,dni2,nnombre1, nnombre2, ndni1, ndni2, ntelefono1, ntelefono2, ncorreo1, ncorreo2);
    res.sendStatus(200);
  }
  catch(e) {
    throw e;
  }
});

/**
 * @api {get} /categoria/:categoria Get couples of a cathegory
 * @apiName ParejasCategoria
 * @apiGroup Couples
 *
 * @apiParam {String} categoria Cathegory of the couples.
 *
 * @apiDescription Returns a list of the couples that compose the specified cathegory.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *          "participante1": {
 *            "nombre": "Laura",
 *            "dni": "2222",
 *            "telefono": "664",
 *            "correo": "laura@laura.com"
 *          },
 *          "participante2": {
 *            "nombre": "Marcos",
 *            "dni": "2242",
 *            "telefono": "668",
 *            "correo": "marcos@marcos.com"
 *          },
 *          "categoria": "mixta"
 *        },
 *        ...
 *     ]
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */
router.get('/categoria/:categoria', function(req, res, next) {
  
  try {
    var categoria = req.params.categoria;
    var parejas = vpt.consultar_parejas_categoria(categoria);
    res.status(200).json(parejas);
  }
  catch(e) {
    throw e;
  }

});


/**
 * @api {get} /parejas Get couples of the competition
 * @apiName Parejas
 * @apiGroup Couples
 *
 * @apiDescription Returns a list of the couples
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *          "participante1": {
 *            "nombre": "Laura",
 *            "dni": "2222",
 *            "telefono": "664",
 *            "correo": "laura@laura.com"
 *          },
 *          "participante2": {
 *            "nombre": "Marcos",
 *            "dni": "2242",
 *            "telefono": "668",
 *            "correo": "marcos@marcos.com"
 *          },
 *          "categoria": "mixta"
 *        },
 *        ...
 *     ]
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */
router.get('/parejas', function(req, res, next) {

  try {
    var parejas = vpt.consultar_parejas_totales();
    res.status(200).json(parejas);
  }
  catch(e) {
    throw e;
  }

});


/**
 * GET: Consultar categoría de una pareja.
 */
/**
 * @api {get} /categoria_pareja/:nombre1/:nombre2 Get cathegory of a couple
 * @apiName CategoriaPareja
 * @apiGroup Couples
 *
 * @apiParam {String} nombre1 name of the first person of the couple.
 * @apiParam {String} nombre2 name of the second person of the couple.
 *
 * @apiExample Example usage:
 * curl -i http://localhost/categoria_pareja/Ana/Paula
 * 
 * @apiDescription Returns the cathegory of the couple
 * 
 * @apiSuccess {String} categoria Cathegory of the couple.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "categoria": "femenina"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */
router.get('/categoria_pareja/:nombre1/:nombre2', function(req, res, next) {
  
  try {
    var nombre1 = req.params.nombre1;
    var nombre2 = req.params.nombre2;
    var categoria = vpt.consultar_categoria_pareja(nombre1, nombre2);
    var obj = {"categoria":categoria}
    res.status(200).json(obj);
  }
  catch(e) {
    throw e;
  }
});


/**
 * GET: Consultar pareja de un integrante.
 */
/**
 * @api {get} /pareja_integrante/:nombre Get the partner of a player
 * @apiName Pareja
 * @apiGroup Couples
 *
 * @apiParam {String} nombre Name of the player
 *
 * @apiExample Example usage:
 * curl -i http://localhost/pareja_integrante/Ana
 * 
 * @apiDescription Returns the partner of the player
 * 
 * @apiSuccess {String} nombre Name of the partner.
 * @apiSuccess {String} dni DNI of the partner.
 * @apiSuccess {String} telefono Telf of the partner.
 * @apiSuccess {String} correo Email of the partner.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "nombre": "Paula",
 *       "dni": "290999",
 *       "telefono": "66666630",
 *       "correo": "paula_nuevo@correo.com"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */
router.get('/pareja_integrante/:nombre', function(req, res, next) {

  try {
    var nombre = req.params.nombre;
  
    var pareja = vpt.consultar_pareja_integrante(nombre);
  
    if (pareja.participante1.nombre == nombre) {
      obj = pareja.participante2
    }
    else {
      obj = pareja.participante1
    }
  
    res.status(200).json(obj);
  }
  catch(e) {
    throw e;
  }

});

/**
 * GET: Consultar pareja de un participante en una categoría concreta.
 */
/**
 * @api {get} /pareja_integrante/:categoria/:nombre Get the partner of a player in a cathegory
 * @apiName ParejaCategoria
 * @apiGroup Couples
 *
 * @apiParam {String} categoria Cathegory of the couple
 * @apiParam {String} nombre Name of the player
 *
 * @apiExample Example usage:
 * curl -i http://localhost/pareja_integrante/femenina/Ana
 * 
 * @apiDescription Returns the partner of the player
 * 
 * @apiSuccess {String} nombre Name of the partner.
 * @apiSuccess {String} dni DNI of the partner.
 * @apiSuccess {String} telefono Telf of the partner.
 * @apiSuccess {String} correo Email of the partner.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "nombre": "Paula",
 *       "dni": "290999",
 *       "telefono": "66666630",
 *       "correo": "paula_nuevo@correo.com"
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */
router.get('/pareja_integrante/:categoria/:nombre', function(req, res, next) {

  try {
    var categoria = req.params.categoria;
    var nombre = req.params.nombre;
  
    var pareja = vpt.consultar_pareja_categoria(nombre, categoria);
  
    if (pareja.participante1.nombre == nombre) {
      obj = pareja.participante2
    }
    else {
      obj = pareja.participante1
    }
  
    res.status(200).json(obj);
  }
  catch(e) {
    throw e;
  }
  
});


/**
 * GET: Consultar número de parejas que hay en la categoría indicada.
 */
/**
 * @api {get} /plazas/:categoria Get the plazes of a cathegory
 * @apiName Plazas
 * @apiGroup Couples
 *
 * @apiParam {String} categoria Cathegory of the couple
 *
 * @apiExample Example usage:
 * curl -i http://localhost/plazas/femenina
 * 
 * @apiDescription Returns the number of avaible plazes in a cathegory
 * 
 * @apiSuccess {String} plazas Avaible plazes of the cathegory.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "plazas": 18
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */
router.get('/plazas/:categoria', function(req, res, next) {

  try {
    var categoria = req.params.categoria;
    var plazas = vpt.consultar_plazas_disponibles(categoria);
    res.status(200).json(plazas);
  }
  catch(e) {
    throw e;
  }

});


module.exports = router;
