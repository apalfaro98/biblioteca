"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const adminsSchema = new mongoose_1.Schema({
    usuario: {
        type: String,
        unique: true,
        required: [true, 'El usuario es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    }
});
exports.default = (0, mongoose_1.model)('Admin', adminsSchema);
