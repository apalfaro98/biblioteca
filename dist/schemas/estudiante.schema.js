"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    carnet: {
        type: String,
        required: [true, 'El carnet es obligatorio'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    carrera: {
        type: String,
        required: true,
    },
    libros: {
        type: [],
        default: []
    },
    anio: {
        type: String,
        required: true,
    }
});
exports.default = (0, mongoose_1.model)('Estudiante', studentSchema);
