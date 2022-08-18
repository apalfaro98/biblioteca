"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const booksSchema = new mongoose_1.Schema({
    titulo: {
        type: String,
        required: [true, 'El titulo es requerido']
    },
    categoria: {
        type: String,
        required: [true, 'La categoria es obligoria'],
    },
    cantidad: {
        type: Number,
        required: [true, 'La cantidad es requerida']
    },
    disponible: {
        type: Number,
    },
    autor: {
        type: String,
        required: [true, 'El autor es obligatorio']
    }
});
exports.default = (0, mongoose_1.model)('libros', booksSchema);
