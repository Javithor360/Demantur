const bcrypt = require('bcryptjs')



const hola = async () => {
  try {
    const res = await bcrypt.compare('Alvithor123', '');
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}


hola()
