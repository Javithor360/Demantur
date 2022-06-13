const DuiModel = require('../models/DuiModel');


// @route POST api/admin/actions/create-dui
// @desc Crear un DUI en la base de datos
// @access private

const CreateDui = async (req, res) => {
  try {
    const { DuiFirstName, DuiLastName, DuiNumber } = req.body

    const NewDui = await new DuiModel(req.body);
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