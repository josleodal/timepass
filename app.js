const express= require('express')
const app = express()
const index = require ('./routes/index')
const endroute = require ('./routes/endroute')
const horaMiddleware = require('./Middleware/horaMiddleware')
const validarHora = require('./Middleware/validarHora');


app.use(horaMiddleware)
app.use('/', index)
app.use('/', validarHora,endroute)




app.listen(3000,()=>{

    console.log('"http://localhost:3000')


})
