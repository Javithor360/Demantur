exports.getPrivateData = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "tienes acceso a la informacion privada de esta ruta",
    })
}