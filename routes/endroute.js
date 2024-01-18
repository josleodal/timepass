const express = require('express');
const actualHour = require('../Middleware/horaMiddleware');
const actualHoure= require('../Middleware/horaMiddleware');
const endroute = express.Router()

endroute.get('/endroute', (req,res)=>{

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inicio</title>
    </head>
    <body>
        <h1>Página de Endroute</h1>

        <p>Bienvenido al EndRoute</p>

        <p>Ruta: ${req.path}</p>
    
        <div>${req.dateType}</div>
    
        <button><a href="/">Inicio</a></button>
    
        
    </body>
    </html>`)


})


module.exports= endroute;

