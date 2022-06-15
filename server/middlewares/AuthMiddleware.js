const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {

  // checar el token 
  const token = req.header('x-auth-token');

  if (!token) return res.status(401).json({ msg: "NO HAY TOKEN PE" });

  try {
    //decodificar el token y lo mandamos
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.user
    next();
  } catch (error) {
    res.status(401).json({ msg: 'EL TOKEN NO ES VALIDO' })
  }
}