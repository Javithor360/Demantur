const DuiModel = require('../models/DuiModel');
const NormaUser = require('../models/NormalUser');
const jwt = require('jsonwebtoken');
const NormalUser = require('../models/NormalUser');
const { encryptPassword } = require('../helpers/Functions');

// @route POST api/auth/normal-user/register
// @desc registro de un usuario normal
// @access public

const registerNormalUser = async (req, res) => {
  try {
    const { FirstName, LastName, Dui, Email, Password } = req.body

    const DuiQuery = await DuiModel.findOne({ Dui });
    const UserExist = await NormaUser.findOne({ Email });

    // validaciones
    if (UserExist) {
      return res.status(400).json([{ message: 'Este usuario ya está registrado en Demantur', type: 'error' }])
    }
    if (!DuiQuery) {
      return res.status(400).json([{ message: 'Este numero de Dui no existe', type: 'error' }])
    }

    // Nuevo esquema
    const newNormalUser = await new NormalUser(req.body);

    // Encriptacion de la Password
    newNormalUser.Password = await encryptPassword(Password);

    await newNormalUser.save();

    const payload = {
      user: {
        id: newNormalUser._id,
        name: newNormalUser.FirstName,
      }
    }

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 60 }, (err, token) => {
      if (err) throw err
      res.json({ token });
    })

  } catch (error) {
    console.error(`ERROR: ${error.message}`)
    res.status(500).send('Error del Servidor');
  }
}


// @route POST api/auth/normal-user/login
// @desc Login del usuario normal
// @access public

const loginNormalUser = async (req, res) => {
  try {
    res.send('login para usuario normal');
  } catch (error) {
    console.error(`ERROR: ${error.message}`)
    res.status(500).send('Error del Servidor');
  }
}


// @route GET api/auth/normal-user/profile
// @desc obtener los datos de un perfil (esto solo es para ver como lo hace, es solo un test)
// @access private

const getNormalUserProfile = async (req, res) => {
  try {
    res.send('obtener datos del perfil del usuario');
  } catch (error) {
    console.error(`ERROR: ${error.message}`)
    res.status(500).send('Error del Servidor');
  }
}


module.exports = {
  registerNormalUser,
  loginNormalUser,
  getNormalUserProfile
}