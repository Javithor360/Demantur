const crypto = require('crypto');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');
const { sendToken } = require('../helpers/functions');

exports.register = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.create({
            username, email, password
        });

        sendToken(user, 201, res);
    } catch (error) {
        next(error);
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorResponse('Por favor ingrese su correo y su contraseña', 400));
    }

    try {
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return next(new ErrorResponse('Credenciales invalidas', 401));
        }

        const isMatch = await user.matchPasswords(password);

        if (!isMatch) {
            return next(new ErrorResponse('Contraseña invalida', 401));
        }

        sendToken(user, 200, res);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}

exports.forgotpassword = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return next(new ErrorResponse('Este Email esta equivocado', 404));
        }

        const resetToken = user.getResetPasswordToken();

        await user.save();

        const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

        const message = `
            <h1>Tienes una solicitud para cambiar tu contraseña</h1>
            <p>Por favor ingrese a este link para cambiar su contraseña</p>
            <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `

        try {
            await sendEmail({
                to: user.email,
                subject: 'Solicitud de cambio de contraseña',
                text: message
            });

            res.status(200).json({ success: true, data: "EMAIL ENVIADO" });
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();

            return next(new ErrorResponse("El EMAIL NO SE PUDO ENVIAR", 500))
        }

    } catch (error) {
        next(error)
    }
}

exports.resetpassword = async (req, res, next) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

    try {
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() }
        })

        if (!user) {
            return next(new ErrorResponse("Token de reseteo invalido", 400))
        }

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(201).json({
            success: true,
            data: "La contraseña ha sido restablecida"
        })
    } catch (error) {
        next(error)
    }
}
