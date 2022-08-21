const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 25,
        unique: true,
    },
    point: {
        type: Number,
        min: 0,
        max: 9999,
        required: true
    },
    achived: {
        type: Array,
        default: []
    },
    email: {
        type: String,
        max: 50,
    },
    password: {
        type: String,
        min: 6,
        max: 50
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    desc: {
        type: String,
        max: 70
    },
    city: {
        type: String,
        max: 50
    },
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);