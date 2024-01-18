const express = require('express');
const actualHour = require('../Middleware/horaMiddleware');
const index = express.Router()

index.get('/', (req,res)=>{

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inicio</title>
    </head>
    <body>
        <h1>Página de Inicio</h1>
    
        <div>${req.dateType}</div>
    
        <button><a href="/endroute">Ir al endroute</a></button>
    
        
    </body>
    </html>`)


})


module.exports= index;



