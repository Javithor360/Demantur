exports.sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({ success: true, token })
};

