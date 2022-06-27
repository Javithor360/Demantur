const DuiModel = require('../models/DuiModel');

// @route POST api/admin/actions/create-dui
// @desc Crear un DUI en la base de datos
// @access private

const CreateDui = async (req, res) => {
  try {
    const { DuiFirstNames, DuiLastNames, DuiNumber, DuiDateBirth } = req.body

    const NewDui = await new DuiModel({ DuiFirstNames: DuiFirstNames.toLowerCase(), DuiLastNames: DuiLastNames.toLowerCase(), DuiNumber, DuiDateBirth });
    await NewDui.save();

    res.send(NewDui);
  } catch (error) {
    console.error(`Error del Servidor`)
    res.status(500).send(`ERROR: ${error.message}`);
  }
}

module.exports = {
  CreateDui
}