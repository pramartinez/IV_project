define({ "api": [
  {
    "type": "delete",
    "url": "/cancelacion",
    "title": "Delete a couple of the competition",
    "name": "Cancelacion",
    "group": "Couples",
    "description": "<p>Recibe un JSON con los DNIs de los integrantes de la pareja y da de baja su inscripción. Luego devuelve un estado de éxito 200.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dni1",
            "description": "<p>DNI of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dni2",
            "description": "<p>DNI of the second person in the couple.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"dni1\": \"2222\",\n  \"dni2\": \"2242\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "get",
    "url": "/categoria_pareja/:nombre1/:nombre2",
    "title": "Get the cathegory of a couple",
    "name": "CategoriaPareja",
    "group": "Couples",
    "description": "<p>Recibe los nombres de los integrantes de una pareja por parámetros incluidos en la ruta de la petición y devuelve en qué categoría se ha inscrito dicha pareja.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre1",
            "description": "<p>name of the first person of the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre2",
            "description": "<p>name of the second person of the couple.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/categoria_pareja/Ana/Paula",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Cathegory of the couple.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"categoria\": \"femenina\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "post",
    "url": "/inscripcion",
    "title": "Post a new couple in the competition",
    "name": "Inscripcion",
    "group": "Couples",
    "description": "<p>Recibe un JSON con la información de una nueva pareja y la inscribe en la categoría indicada. Luego devuelve un status 201.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre1",
            "description": "<p>Name of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre2",
            "description": "<p>Name of the second person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dni1",
            "description": "<p>DNI of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dni2",
            "description": "<p>DNI of the second person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telefono1",
            "description": "<p>Telf of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telefono2",
            "description": "<p>Telf of the second person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "correo1",
            "description": "<p>Email of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "correo2",
            "description": "<p>Email of the second person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Cathegory of the couple.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"participante1\": {\n    \"nombre\": \"Laura\",\n    \"dni\": \"2222\",\n    \"telefono\": \"664\",\n    \"correo\": \"laura@laura.com\"\n  },\n  \"participante2\": {\n    \"nombre\": \"Marcos\",\n    \"dni\": \"2242\",\n    \"telefono\": \"668\",\n    \"correo\": \"marcos@marcos.com\"\n  },\n  \"categoria\": \"mixta\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "put",
    "url": "/modificacion",
    "title": "Modify a couple",
    "name": "Modificacion",
    "group": "Couples",
    "description": "<p>Recibe un JSON con los DNIs de los integrantes de la pareja y con los datos de la modificación. Así, aquella pareja cuyos DNIs sean los indicados se verá modificada con los nuevos datos.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "participante1",
            "description": "<p>DNI of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "participante2",
            "description": "<p>DNI of the second person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nnombre1",
            "description": "<p>New or old name of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nnombre2",
            "description": "<p>New or old name of the second person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ndni1",
            "description": "<p>New or old DNI of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ndni2",
            "description": "<p>New or old DNI of the second person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ntelefono1",
            "description": "<p>New or old telf of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ntelefono2",
            "description": "<p>New or old telf of the second person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ncorreo1",
            "description": "<p>New or old email of the first person in the couple.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ncorreo2",
            "description": "<p>New or old email of the second person in the couple.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"participante1\": 2222,\n   \"participante2\": 2242,\n   \"modificacion\": {\n      \"participante1\": {\n        \"nombre\": \"Laura\",\n        \"dni\": \"2222\",\n        \"telefono\": \"664\",\n        \"correo\": \"nuevo_laura@laura.com\"\n      },\n      \"participante2\": {\n        \"nombre\": \"Marcos\",\n        \"dni\": \"2242\",\n        \"telefono\": \"668\",\n        \"correo\": \"nuevo_marcos@marcos.com\"\n      }\n    }\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "get",
    "url": "/pareja_integrante/:nombre",
    "title": "Get the partner of a player",
    "name": "Pareja",
    "group": "Couples",
    "description": "<p>Recibe el nombre de un integrante de la pareja y devuelve el del compañero.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the player</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/pareja_integrante/Ana",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the partner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dni",
            "description": "<p>DNI of the partner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telf of the partner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": "<p>Email of the partner.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"nombre\": \"Paula\",\n  \"dni\": \"290999\",\n  \"telefono\": \"66666630\",\n  \"correo\": \"paula_nuevo@correo.com\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "get",
    "url": "/pareja_integrante/:categoria/:nombre",
    "title": "Get the partner of a player in a cathegory",
    "name": "ParejaCategoria",
    "group": "Couples",
    "description": "<p>Recibe el nombre de un integrante de la pareja y devuelve el del compañero en una categoría concreta.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Cathegory of the couple</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the player</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/pareja_integrante/femenina/Ana",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Name of the partner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dni",
            "description": "<p>DNI of the partner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telf of the partner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "correo",
            "description": "<p>Email of the partner.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"nombre\": \"Paula\",\n  \"dni\": \"290999\",\n  \"telefono\": \"66666630\",\n  \"correo\": \"paula_nuevo@correo.com\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "get",
    "url": "/parejas",
    "title": "Get couples of the competition",
    "name": "Parejas",
    "group": "Couples",
    "description": "<p>Devuelve un JSON con todas las parejas de la competición.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/parejas",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n     \"participante1\": {\n       \"nombre\": \"Laura\",\n       \"dni\": \"2222\",\n       \"telefono\": \"664\",\n       \"correo\": \"laura@laura.com\"\n     },\n     \"participante2\": {\n       \"nombre\": \"Marcos\",\n       \"dni\": \"2242\",\n       \"telefono\": \"668\",\n       \"correo\": \"marcos@marcos.com\"\n     },\n     \"categoria\": \"mixta\"\n   },\n   ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "get",
    "url": "/categoria/:categoria",
    "title": "Get couples of a cathegory",
    "name": "ParejasCategoria",
    "group": "Couples",
    "description": "<p>Recibe por parámetro en la ruta una categoría y devuelve las parejas que la constituyen.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Cathegory of the couples.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/categoria/mixta",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n     \"participante1\": {\n       \"nombre\": \"Laura\",\n       \"dni\": \"2222\",\n       \"telefono\": \"664\",\n       \"correo\": \"laura@laura.com\"\n     },\n     \"participante2\": {\n       \"nombre\": \"Marcos\",\n       \"dni\": \"2242\",\n       \"telefono\": \"668\",\n       \"correo\": \"marcos@marcos.com\"\n     },\n     \"categoria\": \"mixta\"\n   },\n   ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "get",
    "url": "/plazas/:categoria",
    "title": "Get the plazes of a cathegory",
    "name": "Plazas",
    "group": "Couples",
    "description": "<p>Recibe una categoría por parámetro en la ruta y devuelve el número de plazas disponibles en la misma.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Cathegory of the couple</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/plazas/femenina",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plazas",
            "description": "<p>Avaible plazes of the cathegory.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"plazas\": 18\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Couples"
  },
  {
    "type": "get",
    "url": "/status",
    "title": "Request Status information",
    "name": "GetStatus",
    "group": "Status",
    "description": "<p>Devuelve un JSON con estado 200 si el servicio se ha desplegado correctamente (local).</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/status",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\":\"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Status"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Request Status information",
    "name": "GetStatusRoot",
    "group": "Status",
    "description": "<p>Devuelve un JSON con estado 200 si el servicio se ha desplegado correctamente (local).</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\":\"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Status"
  }
] });
