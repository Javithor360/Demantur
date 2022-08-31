const DuiModel = require("../models/DuiModel");
const NormalUser = require("../models/NormalUser");
const ErrorResponse = require("../utils/ErrorMessage");
const {
  encryptPassword,
  sendToken,
  createCode,
  VeCoEmail,
} = require("../helpers/Functions");
const { uploadRegisterImage } = require("../libs/cloudinary");
const fs = require("fs-extra");
const ExtraInfoNormalUser = require("../models/ExtraInfoNormalUser");

// @route POST api/auth/normal-user/register-part-1
// @desc formulario multi pasos, parte 1
// @access public

const registerPart1 = async (req, res, next) => {
  try {
    const { FirstName, LastName, DateBirth, Adress } = req.body;

    //validaciones
    if (!FirstName || !LastName || !DateBirth || !Adress) {
      return next(
        new ErrorResponse("Por favor rellene todos los campos", 400, "error")
      );
    }

    const Existvalidation = await NormalUser.findOne({ FirstName: FirstName });
    if (Existvalidation) {
      return next(
        new ErrorResponse(
          "Este usuario ya está registrado en Demantur",
          400,
          "error"
        )
      );
    }

    const NamesValidation = await DuiModel.findOne({
      DuiFirstNames: FirstName,
      DuiLastNames: LastName.toLowerCase(),
    });
    if (!NamesValidation) {
      return next(
        new ErrorResponse("Por favor ingrese nombres validos", 400, "error")
      );
    }

    const DateBirthValidation = await DuiModel.findOne({
      DuiDateBirth: DateBirth,
    });
    if (!DateBirthValidation) {
      return next(new ErrorResponse("La fecha no coincide", 400, "error"));
    }

    if (Adress.length < 12) {
      return next(new ErrorResponse("La direccion no es valida", 400, "error"));
    }

    res
      .status(200)
      .json({
        success: true,
        data: { FirstName, LastName, DateBirth, Adress },
      });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @route POST api/auth/normal-user/register-part-2
// @desc formulario multi pasos, parte 2
// @access public

const registerPart2 = async (req, res, next) => {
  try {
    const { Dui, Email, Number, Password, FirstPartForm } = req.body;

    const { FirstName, LastName, DateBirth } = JSON.parse(FirstPartForm);

    // validaciones
    if (!Dui || !Email || !Number || !Password) {
      return next(
        new ErrorResponse("Por favor rellene todos los campos", 400, "error")
      );
    }

    const DuiQuery1 = await NormalUser.findOne({ Dui });
    if (DuiQuery1) {
      return next(
        new ErrorResponse(
          "Este Dui ya esta registrado en Demantur",
          400,
          "error"
        )
      );
    }

    const DuiQuery2 = await DuiModel.findOne({ DuiNumber: Dui });
    if (!DuiQuery2) {
      return next(
        new ErrorResponse("Este numero de Dui no existe", 400, "error")
      );
    }

    if (DuiQuery2) {
      if (
        DuiQuery2.DuiFirstNames !== FirstName ||
        DuiQuery2.DuiLastNames !== LastName
      ) {
        return next(
          new ErrorResponse("Los nombres no coinciden con el Dui", 400, "error")
        );
      }
    }

    if (!/\D*\(?(\d{3})?\)?\D*(\d{4})\D*(\d{4})/.test(Number)) {
      return next(
        new ErrorResponse("Por favor ingrese un numero valido", 400, "error")
      );
    }

    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        Email
      )
    ) {
      return next(
        new ErrorResponse("Por favor ingrese un Email valido", 400, "error")
      );
    }

    const EmailQuery1 = await NormalUser.findOne({ Email });
    if (EmailQuery1) {
      return next(
        new ErrorResponse(
          "Este Email ya esta registrado en Demantur",
          400,
          "error"
        )
      );
    }

    // CAMBIAR
    if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(Password)) {
      return next(
        new ErrorResponse("La contraseña no es valida", 400, "error")
      );
    }

    res
      .status(200)
      .json({ success: true, data: { Dui, Email, Number, Password } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @route POST api/auth/normal-user/register-part-3
// @desc formulario multi pasos, parte 3
// @access public

const registerPart3 = async (req, res, next) => {
  try {
    const { LaboralSituation, WorkPlace, Salary } = req.body;

    if (!LaboralSituation || !WorkPlace || !Salary) {
      return next(
        new ErrorResponse("Por favor rellene todos los campos", 400, "error")
      );
    }

    if (req.files?.Image) {
      ImageOFConstancia = req.files.Image;
    } else {
      return next(
        new ErrorResponse(
          "Por favor suba la imagen de su constancia de trabajo",
          400,
          "error"
        )
      );
    }

    res
      .status(200)
      .json({
        success: true,
        data: { LaboralSituation, WorkPlace, Salary, ImageOFConstancia },
      });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @route POST api/auth/normal-user/register-part-4
// @desc formulario multi pasos, envio y parte final
// @access public

const registerPart4 = async (req, res, next) => {
  try {
    const {
      BNombres,
      BApellidos,
      BDui,
      BNumber,
      FirstPartForm,
      SecondPartForm,
      ThirdPartForm,
    } = req.body;

    const { FirstName, LastName, DateBirth, Adress } =
      JSON.parse(FirstPartForm);
    const { Dui, Email, Number, Password } = JSON.parse(SecondPartForm);
    const { LaboralSituation, WorkPlace, Salary, ImageOFConstancia } =
      JSON.parse(ThirdPartForm);
    let ImageConstancia;

    // Validaciones
    if ((!BNombres, !BApellidos, !BDui, !BNumber)) {
      return next(
        new ErrorResponse("Por favor rellene todos los campos", 400, "error")
      );
    }

    if (FirstName === BNombres || LastName === BApellidos) {
      return next(
        new ErrorResponse(
          "Los Nombres del Beneficiado no pueden ser iguales a los suyos",
          400,
          "error"
        )
      );
    }

    const NamesValidation = await DuiModel.findOne({
      DuiFirstName: BNombres,
      DuiLastName: BApellidos,
    });
    if (!NamesValidation) {
      return next(
        new ErrorResponse("Los nombres no son validos", 400, "error")
      );
    }

    const DuiValidation = await DuiModel.findOne({ DuiNumber: BDui });
    if (!DuiValidation) {
      return next(
        new ErrorResponse("El numero de Dui no es valido", 400, "error")
      );
    }

    if (DuiValidation) {
      if (
        DuiValidation.DuiFirstNames !== BNombres ||
        DuiValidation.DuiLastNames !== BApellidos
      ) {
        return next(
          new ErrorResponse("Los nombres no coinciden con el Dui", 400, "error")
        );
      }
    }

    if (!/\D*\(?(\d{3})?\)?\D*(\d{4})\D*(\d{4})/.test(BNumber)) {
      return next(
        new ErrorResponse(
          "Por favor ingrese un numero de teléfono valido",
          400,
          "error"
        )
      );
    }

    if (ImageOFConstancia) {
      const result = await uploadRegisterImage(ImageOFConstancia.tempFilePath);
      await fs.remove("./upload");

      ImageConstancia = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    const DatosBeneficiario = {
      Nombres: BNombres,
      Apellidos: BApellidos,
      Dui: BDui,
      Number: BNumber,
    };

    // crear el codigo de verificacion
    const verifyCode = createCode();

    // Nuevos esquemas
    const newNormalUser = await new NormalUser({
      FirstName: FirstName,
      LastName: LastName,
      Password,
      Dui,
      Email: Email,
      verifyCode,
      PerfilPhoto: {
        url: 'https://res.cloudinary.com/demantur/image/upload/v1661360968/Demantur-Register/datv00kqnvkxuhpqpvgd.png',
        public_id: '',
      },
      ActivedAccount: false,
      AccountRuning: false,
    });

    // guardar en la DB
    const Response1 = await newNormalUser.save();

    const newExtraInfoNU = await ExtraInfoNormalUser({
      UserOwner: Response1._id,
      DateBirth,
      Adress,
      Number,
      LaboralSituation,
      WorkPlace,
      Salary,
      ImageOFConstancia: ImageConstancia,
      DatosBeneficiario,
    });

    await newExtraInfoNU.save();

    // Envio codigo de verificación
    VeCoEmail(verifyCode, newNormalUser, res, next);

    res.status(200).json({ success: true, data: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
    console.log(error);
  }
};

// @route POST api/auth/normal-user/login
// @desc Login del usuario normal
// @access public

const loginNormalUser = async (req, res, next) => {
  try {
    const { Dui, Email, Password } = req.body;

    // Validaciones

    if (!Dui || !Email || !Password) {
      return next(
        new ErrorResponse("Por favor rellene todos los campos", 400, "error")
      );
    }

    const DuiQuery = await NormalUser.findOne({ Dui });
    if (!DuiQuery) {
      return next(
        new ErrorResponse(
          "Este numero de Dui no esta registrado en Demantur",
          401,
          "error"
        )
      );
    }

    const EmailQuery = await NormalUser.findOne({ Email });
    if (!EmailQuery) {
      return next(
        new ErrorResponse(
          "Este Email no esta registrado en Demantur",
          401,
          "error"
        )
      );
    }

    if (DuiQuery.Email !== Email) {
      return next(
        new ErrorResponse("El Dui no coincide con el Email", 401, "error")
      );
    }

    const isVerifyEmail = await NormalUser.findOne({
      Email,
      verifyCode: undefined,
    });
    if (!isVerifyEmail) {
      return next(
        new ErrorResponse("Su Email no esta verificado", 401, "error")
      );
    }

    // llamar usuario a la base de datos
    const selectedUser = await NormalUser.findOne({ Email }).select(
      "+Password"
    );

    // validacion contraseña
    const isMatch = await selectedUser.matchPasswords(Password);

    if (!isMatch) {
      return next(
        new ErrorResponse("La contraseña no es valida", 401, "error")
      );
    }

    // Validacion para ver si la cuenta está activada
    const isActivedAcc = await NormalUser.findOne({
      Email,
      ActivedAccount: true,
    });
    if (!isActivedAcc) {
      return next(
        new ErrorResponse(
          "Su cuenta no está Activada todavia, espere un plazo de 24 horas para ser notificado",
          401,
          "error"
        )
      );
    }

    // Creacion del TOKEN
    sendToken(selectedUser, res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @route GET api/auth/normal-user/profile
// @desc obtener los datos de un perfil (esto solo es para ver como lo hace, es solo un test)
// @access private

const getNormalUserProfile = async (req, res) => {
  try {
    const perfil = await NormalUser.findById(req.user.id)
      .select("-password")
      .select("-__v")
      .select("-createdAt")
      .select("-updatedAt");

    if (!perfil) {
      return next(new ErrorResponse("El usuario no existe", 401, "error"));
    }

    res.json(perfil);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  loginNormalUser,
  getNormalUserProfile,
  registerPart1,
  registerPart2,
  registerPart3,
  registerPart4,
};
