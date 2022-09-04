const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/SendMail");
const ErrorResponse = require("../utils/ErrorMessage");

// Funcion para crear y enviar el token al usuairo
exports.sendToken = (NewNormalUser, res) => {
  const token = NewNormalUser.getSignedToken();
  res.json({ success: true, token });
};

exports.ChangeEmailFunc = async (Code, Email, res) => {
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
            height: 66.4rem;
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
    font-size: 1.8rem;
}
.title{
    font-size: 3rem;
            font-weight: bold;
            text-align: center;
}
 hr{
    border: 0;
    height: .3rem;
    background: #93DEFF;
    opacity: 100;
    padding: 0;
    margin-top: -32px;
    width: 240px;
    font-weight: bold;
}

.title2 p{
    text-align: center;
    font-size: 40px;
    margin-right: 80px;
    margin-left: 80px;
}
.subs{
    text-align: center;
    font-size: 32px;
    margin-left: 80px;
    margin-right: 80px;
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
    margin-top: 380px;
    height: 3rem;
    text-align: center;
}
.img{
    width: 20rem;
    float: right;
}
.code{
    font-size: 3rem;
    text-align: center;
    margin-left: 290px;
}
    </style>
  </head>
  <body>
      
      <div class="fondo"><img class="icon" src="https://media.discordapp.net/attachments/825146450232213505/999324633478205560/Demantur_Imagotype-3.png?width=1025&height=414" alt="">
                <h1 class="title">Codigo para verifivar tu Email</h1>
                <hr />
            <div class="title2">
              <p>Verique su direccion de correo utilizando el codigo que se te proporcionara a continuación:</p>
            </div>
            <img class="img" src="https://media.discordapp.net/attachments/861438024659501087/1016060336853504050/Imagen1.png" alt="">
            <p class="code">${Code}</p>
            <footer>
              <span class="copyright">
                  Todos los derechos reservados. © 2022 Demantur
              </span>
            </footer>
      </div>
      
  </body>
    `;

    await sendEmail({
      to: Email,
      subject: "Cambio de Email Demantur",
      text: message
    })
  } catch (error) {
    console.log(error);
  }
}

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
    margin-top: 2rem;
    font-size: 3rem;
            font-weight: bold;
            text-align: center;
  }
   hr{
    border: 0;
    height: .4rem;
    background: #93DEFF;
    opacity: 100;
    padding: 0;
    margin-top: -2.5rem;
    width: 19rem;
    font-weight: bold;
  }
  
  .title2 p{
    text-align: center;
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
    margin-top: 32rem;
    height: 3rem;
    text-align: center;
  }
  .img{
    margin-top: -2rem;
    margin-right: -5rem;
    width: 60rem;
    float: right;
    margin-bottom: -5rem;
    
  }
    </style>
  </head>
  <body>
      
      <div class="fondo"><img class="icon" src="https://media.discordapp.net/attachments/825146450232213505/999324633478205560/Demantur_Imagotype-3.png?width=1025&height=414" alt="">
                <h1 class="title">Cambio de contraseña</h1>
                <hr /><br>
            <p class="subs">tienes una solicitud para cambiar tu contraseña por favor ingrese a este link para cambiar su contraseña:</p>
            <a href="${resetUrl}"><p class="a">${resetUrl}</p></a>
            <img class="img" src="https://media.discordapp.net/attachments/861438024659501087/1014584092253224960/Imagen2.png?width=724&height=424" alt="">
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
// creacion del codigo de gestion
exports.createGestionCode = () => {
  let code2 = Math.random() * (9000 - 1000);
  code2 = code2 + 1000;
  code2 = Math.trunc(code2);
  return code2;
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
            text-align: center;
}
 hr{
    border: 0;
    height: .3rem;
    background: #93DEFF;
    opacity: 100;
    padding: 0;
    margin-top: -2rem   ;
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
    margin-top: 16.5rem;
    height: 3rem;
}
.img{
    width: 30rem;
    float: right;
    margin-top: -5.5rem;
}
.codec{
    font-size: 5rem;
}
    </style>
  </head>
  <body>
      
      <div class="fondo"><img class="icon" src="https://media.discordapp.net/attachments/825146450232213505/999324633478205560/Demantur_Imagotype-3.png?width=1025&height=414" alt="">
                <h1 class="title">Codigo de verificacion</h1>
                <hr />
            <div class="title2">
              <p>Tu codigo de verificacion para finalizar la creacion de tu cuenta es:</p>
              
            </div>
            <br><br><br><br>
            <p class="subtitles"><strong class="codec">${verifyCode}</strong></p>
            <img class="img" src="https://cdn.discordapp.com/attachments/861438024659501087/1014409038102007848/Imagen1.png" alt=""><br><br><br><br><br><br><br>
            <footer>
              <center><span class="copyright">
                  Todos los derechos reservados. © 2022 Demantur
              </span></center>
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

exports.ContactEmail = async (gestionCode, name, dui, mail, cellnum, TextMessage) => {
  try {
    const message = `
      <p><b>Nombre del cliente:</b> ${name}</p>
      <p><b>Número de DUI:</b>: ${dui}</p>
      <p><b>Correo Electrónico de Contacto:</b>: ${mail}</p>
      <p><b>Número de contacto</b>: ${cellnum}</p>
      <p><b>Mensaje:</b>: ${TextMessage}</p>
      <p><b>Número de gestión:</b>: ${gestionCode}</p>
    `
    await sendEmail({
      to: process.env.EMAIL_FROM,
      subject: "Contacto con nosotros",
      text: message,
    });
  } catch (error) {
    return next(new ErrorResponse("El EMAIL NO SE PUDO ENVIAR", 500, "error"));
  }
}


exports.AcceptRequestEmployee = async (dato, Email, next) => {
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
            height: 66.1rem;
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
    font-size: 1.8rem;
}
.title{
    font-size: 3rem;
            font-weight: bold;
            text-align: center;
}
 hr{
    border: 0;
    height: .3rem;
    background: #93DEFF;
    opacity: 100;
    padding: 0;
    margin-top: -2rem   ;
    width: 15rem;
    font-weight: bold;
}

.title2 p{
    text-align: center;
    font-size: 2.5rem;
    margin-right: 5rem;
    margin-left: 5rem;
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
    margin-top: 390px;
    height: 3rem;
    text-align: center;
}
.img{
    width: 20rem;
    float: right;
    marging-right: 2rem;
}
    </style>
  </head>
  <body>
      
      <div class="fondo"><img class="icon" src="https://media.discordapp.net/attachments/825146450232213505/999324633478205560/Demantur_Imagotype-3.png?width=1025&height=414" alt="">
                <h1 class="title">Su solicitud fue aceptada</h1>
                <hr />
            <div class="title2">
              <p>Tu solicitud fue evaluada y cumples con los requisitos solicitados, tu cuenta sera activada lo más pronto posible</p>
            </div>
            <img class="img" src="https://media.discordapp.net/attachments/861438024659501087/1016111213668749312/Imagen2.png?width=594&height=676" alt=""><br><br>
            <footer>
              <span class="copyright">
                  Todos los derechos reservados. © 2022 Demantur
              </span>
            </footer>
      </div>
      
  </body>
    `;

    await sendEmail({
      to: Email,
      subject: "Codigo de verificacion de Email",
      text: message,
    });

    // res.status(200).json({ success: true, message: "EMAIL ENVIADO" });
  } catch (error) {
    return next(new ErrorResponse("El EMAIL NO SE PUDO ENVIAR", 500, "error"));
  }
};

exports.DeclineRequestEmployee = async (dato, Email, next) => {
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
            height: 56rem;
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
    font-size: 1.8rem;
}
.title{
    font-size: 3rem;
            font-weight: bold;
            text-align: center;
}
 hr{
    border: 0;
    height: .3rem;
    background: #93DEFF;
    opacity: 100;
    padding: 0;
    margin-top: -2rem   ;
    width: 15rem;
    font-weight: bold;
}

.title2 p{
    text-align: center;
    font-size: 2.5rem;
    margin-right: 5rem;
    margin-left: 5rem;
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
    margin-top: 390px;
    height: 3rem;
    text-align: center;
}
.img{
    width: 20rem;
    float: right;
    marging-right: 2rem;
}
    </style>
  </head>
  <body>
      
  <div class="fondo"><img class="icon" src="https://media.discordapp.net/attachments/825146450232213505/999324633478205560/Demantur_Imagotype-3.png?width=1025&height=414" alt="">
  <h1 class="title">Su solicitud fue rechazada </h1>
  <hr />
<div class="title2">
<p>Tu solicitud fue rechazada y lastimosamete no cumples con los requisitos solicitados</p>
</div>
<img class="img" src="https://media.discordapp.net/attachments/861438024659501087/1015827000717492304/Imagen3.png   " alt="">
<footer>
<span class="copyright">
    Todos los derechos reservados. © 2022 Demantur
</span>
</footer>
</div>
      
  </body>
    `;

    await sendEmail({
      to: Email,
      subject: "Codigo de verificacion de Email",
      text: message,
    });

    // res.status(200).json({ success: true, message: "EMAIL ENVIADO" });
  } catch (error) {
    return next(new ErrorResponse("El EMAIL NO SE PUDO ENVIAR", 500, "error"));
  }
};

exports.ContactSuccessEmail = async (dato, Email, next) => {
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
            text-align: center;
}
 hr{
    border: 0;
    height: .3rem;
    background: #93DEFF;
    opacity: 100;
    padding: 0;
    margin-top: -2rem   ;
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
    margin-top: 16.5rem;
    height: 3rem;
}
.img{
    width: 30rem;
    float: right;
    margin-top: -5.5rem;
}
.codec{
    font-size: 5rem;
}
    </style>
  </head>
  <body>
      
      <div class="fondo"><img class="icon" src="https://media.discordapp.net/attachments/825146450232213505/999324633478205560/Demantur_Imagotype-3.png?width=1025&height=414" alt="">
                <h1 class="title">Codigo de verificacion</h1>
                <hr />
            <div class="title2">
              <p>Tu codigo de verificacion para finalizar la creacion de tu cuenta es:</p>
              
            </div>
            <br><br><br><br>
            <p class="subtitles"><strong class="codec"></strong></p>
            <img class="img" src="https://cdn.discordapp.com/attachments/861438024659501087/1014409038102007848/Imagen1.png" alt=""><br><br><br><br><br><br><br>
            <footer>
              <center><span class="copyright">
                  Todos los derechos reservados. © 2022 Demantur
              </span></center>
            </footer>
      </div>
      
  </body>
    `;

    await sendEmail({
      to: Email,
      subject: "Codigo de verificacion de Email",
      text: message,
    });

    // res.status(200).json({ success: true, message: "EMAIL ENVIADO" });
  } catch (error) {
    return next(new ErrorResponse("El EMAIL NO SE PUDO ENVIAR", 500, "error"));
  }
};