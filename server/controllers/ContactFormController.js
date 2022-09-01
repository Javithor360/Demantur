const ErrorResponse = require("../utils/ErrorMessage");

const usersContactForm = async (req, res, next) => {
    try {
        
        const { name, dui, mail, cellnum, TextMessage } = req.body;
        
        if (!name || !dui || !mail || !cellnum || !TextMessage) {
            return next(
                new ErrorResponse("Por favor rellene todos los campos", 400, "error")
            );
        }
        if (
            !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                mail
            )
        ) {
            return next(
                new ErrorResponse("Por favor ingrese un Email valido", 400, "error")
            );
        }
        if (!/\D*\(?(\d{3})?\)?\D*(\d{4})\D*(\d{4})/.test(cellnum)) {
            return next(
                new ErrorResponse("Por favor ingrese un numero valido", 400, "error")
            );
        }

        ContactEmail(name, dui, mail, cellnum, TextMessage, res, next)
        
        res.status(200).json({ success: true, data: true});

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: error.message });
    }
}
module.exports = { usersContactForm };