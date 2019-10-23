var express = require('express');
var router = express.Router();
var VPTournaments = require('../app/funcionalidades.js');
var vpt = new VPTournaments("Torneo2019","app/data/integrantes.json");
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendStatus(200);
});

/**
 * POST: Incribir una pareja en la competición.
 */
router.post('/inscripcion', function(req, res, next) {
  var body = req.body;
  nombre1 = body.participante1.nombre;
  nombre2 = body.participante2.nombre;
  dni1 = body.participante1.dni;
  dni2 = body.participante2.dni;
  telefono1 = body.participante1.telefono;
  telefono2 = body.participante2.telefono;
  correo1 = body.participante1.correo;
  correo2 = body.participante2.correo;
  categoria = body.categoria;



  vpt.inscribir_pareja(nombre1, dni1, telefono1, correo1, nombre2, dni2, 
    telefono2, correo2, categoria, function(err){
      if(err) throw err;
  });

  res.sendStatus(201);
});

/**
 * DELETE: Cancelar incripción de una pareja.
 */
router.delete('/cancelacion', function(req, res, next) {
  var body = req.body;
  dni1 = body.dni1;
  dni2 = body.dni2;

  vpt.cancelar_inscripcion(dni1,dni2);

  res.sendStatus(200);
});


//TODO: añadir manejo de errores

/**
 * PUT: Modificar incripción de una pareja.
 */
router.put('/modificacion', function(req, res, next) {
  var body = req.body;
  dni1 = body.participante1;
  dni2 = body.participante2;
  nnombre1 = body.modificacion.participante1.nombre;
  nnombre2 = body.modificacion.participante2.nombre;
  ndni1 = body.modificacion.participante1.dni;
  ndni2 = body.modificacion.participante2.dni;
  ntelefono1 = body.modificacion.participante1.telefono;
  ntelefono2 = body.modificacion.participante2.telefono;
  ncorreo1 = body.modificacion.participante1.correo;
  ncorreo2 = body.modificacion.participante2.correo;

  try {
    vpt.modificar_pareja(dni1,dni2,nnombre1, nnombre2, ndni1, ndni2, ntelefono1, ntelefono2, ncorreo1, ncorreo2);
    res.sendStatus(200);
  }
  catch(e) {
    throw e;
  }
});


/**
 * GET: Consultar parejas de una categoría.
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
 * GET: Consultar parejas de la competición.
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
router.get('/categoria_pareja', function(req, res, next) {
  
  try {
    var body = req.body;
    nombre1 = body.nombre1;
    nombre2 = body.nombre2;
    categoria = vpt.consultar_categoria_pareja(nombre1, nombre2);
    obj = {"categoria":categoria}
    res.status(200).json(obj);
  }
  catch(e) {
    throw e;
  }

});


/**
 * GET: Consultar pareja de un integrante.
 */
router.get('/pareja_integrante', function(req, res, next) {

  try {
    var body = req.body;
    nombre = body.nombre;
  
    pareja = vpt.consultar_pareja_integrante(nombre);
  
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

//TODO que hacer cuando no existe

/**
 * GET: Consultar pareja de un participante en una categoría concreta.
 */
router.get('/pareja_integrante/:categoria', function(req, res, next) {

  try {
    var categoria = req.params.categoria;
    var body = req.body;
    nombre = body.nombre;
  
    pareja = vpt.consultar_pareja_categoria(nombre, categoria);
  
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
