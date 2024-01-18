const validarHora = (req, res, next) => {
    const hora = req.dateType.split(','); 
  

    const hour = parseInt(hora[0]);
 

    if (hour >= 12 && hour < 22) {
      next();
    } else {
        res.status(403).send('Aún no son las 12 de la mañana');
    }
  }
  
  module.exports = validarHora;
  