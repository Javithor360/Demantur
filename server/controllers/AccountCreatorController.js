const SavingAccount = require("../models/SavingsAccount");
const Employee = require("../models/Employee");
const Admin = require("../models/Admin");
const { uploadRegisterImage } = require("../libs/cloudinary");
const fs = require("fs-extra");
const ErrorResponse = require("../utils/ErrorMessage");

// @route POST api/accounts/create/first-savings
// @desc Crear primera cuenta de ahorros obligatoria
// @access private

const WelcomeSavingsAccount = async (req, res, next) => {
  function accNumberGen(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  try {
    const { AccountOwner, Reason1, Reason2 } = req.body;

    const query = await SavingAccount.find();
    let filterArray = query.filter(i => i.AccountOwner == AccountOwner);
    if (filterArray.length >= 3) {
      return next(
        new ErrorResponse("No puedes crearte una cuenta porque ya superaste el límite permitido de tres.", 400, "error")
      )
    }

    if (!AccountOwner) {
      return next(
        new ErrorResponse("Completa todos los campos antes de continuar", 400, "error")
      );
    }

    if(Reason1.length < 10 || Reason2.length < 10){
      return next(
        new ErrorResponse("Detalla un poco más las razones por las que deseas abrir la cuenta")
      );
    }

    if (!req.files) {
      return next(
        new ErrorResponse("Sube las imágenes necesarias antes de continuar", 400, "error")
      );
    } else if (!req.files.Image || !req.files.Image2 || !req.files.Image3) {
      return next(
        new ErrorResponse("Asegúrate de subir todas las imágenes necesarias antes de continuar.", 400, "error")
      );
    }
    const accountNumber = `21030${accNumberGen(1000, 9999)}`;
    const balance = 0;
    const interest = 0;
    const increaseRate = 0;
    const withdrawHistory = [];
    const deposits = [];
    const activated = false;

    let DuiImage, PersonalReference, ProfessionalReference;

    const img1 = await uploadRegisterImage(req.files.Image.tempFilePath);
    const img2 = await uploadRegisterImage(req.files.Image2.tempFilePath);
    const img3 = await uploadRegisterImage(req.files.Image3.tempFilePath);

    DuiImage = {
      url: img1.secure_url,
      public_id: img1.public_id,
    };

    PersonalReference = {
      url: img2.secure_url,
      public_id: img2.public_id,
    };

    ProfessionalReference = {
      url: img3.secure_url,
      public_id: img3.public_id,
    };

    await fs.remove("./upload");

    const annexes = {
      CreateReason: Reason1,
      AccountExpectations: Reason2,
      DuiImage,
      PersonalReference,
      ProfessionalReference,
    };

    const newSavingsAccount = await new SavingAccount({
      AccountOwner,
      accountNumber,
      balance,
      interest,
      increaseRate,
      withdrawHistory,
      deposits,
      annexes,
      activated,
    });

    await newSavingsAccount.save();
    res.status(200).json({sucess: true, data: newSavingsAccount});
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e.message });
  }
};

// @route POST api/accounts/create/employee
// @desc Crear cuenta de empleado
// @access private

const EmployeeAccount = async (req, res, next) => {

  function employeeIdGen(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  try {
    const { FirstNames, LastNames, Dui, Email, Password } = req.body;
    const EmployeeId = `${parseInt(new Date().getFullYear())}${employeeIdGen(1000, 9999)}`;

    const newEmployee = await new Employee({
      FirstNames,
      LastNames,
      Dui,
      Email,
      Password,
      EmployeeId
    });

    await newEmployee.save();
    return res.send(newEmployee)
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}


// @route POST api/accounts/create/admin
// @desc Crear nuevo admin
// @access private

const AdminAccount = async (req, res) => {
  try {
    const { Name, Password } = req.body;

    const newAdmin = await new Admin({ Name, Password });
    await newAdmin.save();
    return res.send(newAdmin);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { WelcomeSavingsAccount, EmployeeAccount, AdminAccount };
