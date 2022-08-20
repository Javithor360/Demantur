const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const AdminSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Password: {
        type: String,
        required: true,
        select: false
    }
}, { timestamps: true });

AdminSchema.pre('save', async function (next) {
    if (!this.isModified('Password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.Password = await bcrypt.hash(this.Password, salt);
    next();
});

AdminSchema.methods.matchPasswords = async function (Password) {
    return await bcrypt.compare(Password, this.Password);
};

AdminSchema.methods.getSignedToken = function () {
    return jwt.sign({
        admin: {
            id: this._id,
            name: this.Name
        }
    }, process.env.JWT_SECRET, { expiresIn: '1y' })
};

module.exports = mongoose.model("Admin", AdminSchema);