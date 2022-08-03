const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/SendMail");
const ErrorResponse = require("../utils/ErrorMessage");

// Funcion para crear y enviar el token al usuairo
exports.sendToken = (NewNormalUser, res) => {
  const token = NewNormalUser.getSignedToken();
  res.json({ success: true, token });
};

// Enviar email de recuperacion
exports.FoPaEmail = async (resetToken, isNormalUser, next, res) => {
  await isNormalUser.save();

  const resetUrl = `http://localhost:3000/auth/reset-password/${resetToken}`;

  const message = `
  <head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
  <style>
      body{
          font-family: 'Poppins', sans-serif;
      }
      .fondo{
          margin: 0 auto;
          height: 70rem;
          width: 60rem;
          border: solid;
          border-color: rgba(0, 0, 0, 0.068);
          border-radius: 1.5rem;
      }
      .icon{
          width: 15rem;
          margin-top: 2rem;
          margin-left: 2rem;
          margin-bottom: 2rem;
      }
  .baners {
  background-image: url(https://img.freepik.com/foto-gratis/casarse-finanzas-hogar-pareja-asiatica-revisando-sus-cuentas-bancarias-usando-computadora-portatil-calculadora-sala-estarpareja-asiatica-sentada-sofa-computadora-portatil-emocion-estresante-casa_609648-8.jpg?w=1380&t=st=1658290429~exp=1658291029~hmac=45c5a63d80e66cce23df79b437c8383f6a2cdaf09e517e16f66c0749be13656f);
  background-size: cover;
  width: 100%;
  height: 22rem;
  position: relative;

}

.baners-content {
  position: absolute;
  width: inherit;
  height: inherit;
  background-color: rgba(0, 0, 0, 0.342);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
}
.title{
  font-size: 3rem;
          font-weight: bold;
          margin: 1.25rem auto 1.25rem auto ;
}
.title2 hr{
  border: 0;
  height: .3rem;
  background: #93DEFF;
  opacity: 100;
  padding: 0;
  margin: auto;
  width: 15rem;
  font-weight: bold;
}

.title2 p{
  text-align: center;
  margin: 2rem auto 0 auto;
  font-size: 2.5rem;
}
.subs{
  text-align: center;
  font-size: 2rem;
  margin-left: 5rem;
  margin-right: 5rem;
}
.copyright{
  font-size: 1.5rem;
padding: 0.625rem 0;
  color: #ffffff;
}
.a{
  text-align: center;
  font-size: 2rem;
}
footer{
  background-color: rgb(78, 78, 78);
  margin-top: 14rem;
  height: 3rem;
  text-align: center;
}
  </style>
</head>
<body>
    
    <div class="fondo"><img class="icon" src="https://media.discordapp.net/attachments/825146450232213505/999324633478205560/Demantur_Imagotype-3.png?width=1025&height=414" alt="">
        <div class="baners">
            <div class="baners-content">
              <h1 class="title">Cambio de contraseña</h1><br>
            </div>
          </div>
          <div class="title2">
            <p>Solicitud para cambio</p>
            <hr />
          </div>
          <p class="subs">tienes una solicitud para cambiar tu contraseña por favor ingrese a este link para cambiar su contraseña:</p>
          <a href="${resetUrl}"><p class="a">${resetUrl}</p></a>
          <footer>
            <span class="copyright">
                Todos los derechos reservados. © 2022 Demantur
            </span>
          </footer>
    </div>
    
</body>
  `;

  try {
    await sendEmail({
      to: isNormalUser.Email,
      subject: "Solicitud de cambio de contraseña",
      text: message,
    });

    res.status(200).json({ success: true, resetToken });
  } catch (error) {
    // resetear datos de la base de datos
    isNormalUser.resetPasswordToken = undefined;
    isNormalUser.resetPasswordExpire = undefined;

    await isNormalUser.save();

    return next(new ErrorResponse("El email no se pudo enviar", 500, "error"));
  }
};

// creacion del codigo de verificacion del email
exports.createCode = () => {
  let code = Math.random() * (900000 - 100000);
  code = code + 100000;
  code = Math.trunc(code);

  return code;
};

// Enviar email de verificacion del email
exports.VeCoEmail = async (verifyCode, isNormalUser, next) => {
  try {
    const message = `
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
    <style>
        body{
            font-family: 'Poppins', sans-serif;
        }
        .fondo{
            margin: 0 auto;
            height: 57rem;
            width: 60rem;
            border: solid;
            border-color: rgba(0, 0, 0, 0.068);
        }
        .icon{
            width: 15rem;
            margin-top: 2rem;
            margin-left: 2rem;
            margin-bottom: 2rem;
        }
    .baners {
    background-image: url(https://cdn.discordapp.com/attachments/861438024659501087/1004499581272334356/personas-que-esperan-obtener-dinero-cajero-automatico-personas-retiran-dinero-concepto-cajero-automatico_1150-13566.webp);
    background-size: cover;
    width: 100%;
    height: 22rem;
    position: relative;

}

.baners-content {
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: rgba(0, 0, 0, 0.342);
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
}
.subtitles{
    text-align: center;
    margin: 1rem auto 0 auto;
    font-size: 1.8rem;
}
.title{
    font-size: 3rem;
            font-weight: bold;
            margin: 1.25rem auto 1.25rem auto ;
}
.title2 hr{
    border: 0;
    height: .3rem;
    background: #93DEFF;
    opacity: 100;
    padding: 0;
    margin: auto;
    width: 15rem;
    font-weight: bold;
}

.title2 p{
    text-align: center;
    margin: 2rem auto 0 auto;
    font-size: 2.5rem;
}
.subs{
    text-align: center;
    font-size: 2rem;
    margin-left: 5rem;
    margin-right: 5rem;
}
.copyright{
    font-size: 1.5rem;
  padding: 0.625rem 0;
    color: #ffffff;
}
.a{
    text-align: center;
    font-size: 2rem;
}
footer{
    background-color: rgb(78, 78, 78);
    margin-top: 14rem;
    height: 3rem;
    text-align: center;
}
    </style>
  </head>
  <body>
      
      <div class="fondo"><img class="icon" src="https://media.discordapp.net/attachments/825146450232213505/999324633478205560/Demantur_Imagotype-3.png?width=1025&height=414" alt="">
          <div class="baners">
              <div class="baners-content">
                <h1 class="title">Demantur Banck</h1>
              </div>
            </div>
            <div class="title2">
              <p>CODIGO DE VERIFICACION:</p>
              <hr />
            </div>
    <p class="subtitles"><strong>${verifyCode}</strong></p>
    
            <footer>
              <span class="copyright">
                  Todos los derechos reservados. © 2022 Demantur
              </span>
            </footer>
      </div>
      
  </body>
    `;

    await sendEmail({
      to: isNormalUser.Email,
      subject: "Codigo de verificacion de Email",
      text: message,
    });

    // res.status(200).json({ success: true, message: "EMAIL ENVIADO" });
  } catch (error) {
    return next(new ErrorResponse("El EMAIL NO SE PUDO ENVIAR", 500, "error"));
  }
};
