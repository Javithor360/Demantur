const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const EmployeeSchema = new mongoose.Schema({
    EmployeeId: {
        type: Number,
        required: true,
        trim: false,
        unique: true
    },
    FirstNames: {
        type: String,
        required: true,
        trim: true
    },
    LastNames: {
        type: String,
        required: true,
        trim: true
    },
    Dui: {
        type: String,
        required: true,
        trim: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
        select: false,
    },
    History: {
        Action: String,
        Details: Object
    }
}, { timestamps: true });

EmployeeSchema.pre('save', async function (next) {
    if (!this.isModified('Password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.Password = await bcrypt.hash(this.Password, salt);
    next();
});

EmployeeSchema.methods.matchPasswords = async function (Password) {
    return await bcrypt.compare(Password, this.Password);
}

EmployeeSchema.methods.getSignedToken = function () {
    return jwt.sign({
        user: {
            id: this._id,
            Email: this.Email,
        }
    }, process.env.JWT_SECRET, { expiresIn: '1y' })
};

module.exports = mongoose.model("Employee", EmployeeSchema);