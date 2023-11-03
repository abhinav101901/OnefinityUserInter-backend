const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {

        firstName: {
            type: String,
            required: true,
            min: 4,
            max: 20,
        },
        lastName: {
            type: String,
            required: true,
            min: 4,
            max: 20,
        },
        state: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        village: {
            type: String,
            required: true
        },
        panCard: {
            type: String,
            require: true
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);