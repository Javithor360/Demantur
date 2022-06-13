const DuiModel = require('../models/DuiModel');
const NormaUser = require('../models/NormalUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @route POST api/auth/normal-user/register
// @desc registro de un usuario normal
// @access public

const registerNormalUser = async (req, res) => {
  try {
    const { FirstName, LastName, Dui, Email, Password } = req.body
    const DuiQuery = await DuiModel.find({ "DuiNumber": Dui });

    if (DuiQuery) { res.json('si sirve?') }
    else { res.json('test'); }

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