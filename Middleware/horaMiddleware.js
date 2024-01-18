const actualHour = (req, res, next) => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const actualTime = `${hour}:${minutes}:${seconds}`;
    req.dateType = actualTime;
    next();
  }

  

  
  module.exports = actualHour;
  