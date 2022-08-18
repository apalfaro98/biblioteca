"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const estudiante_schema_1 = __importDefault(require("../schemas/estudiante.schema"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, email, carrera, libros, anio, carnet, } = req.body;
    const estudiante = new estudiante_schema_1.default({
        nombre,
        apellido,
        email,
        carrera,
        libros,
        anio,
        carnet,
    });
    const existe = yield estudiante_schema_1.default.findOne({
        $or: [
            { email },
            { carnet },
        ]
    });
    if (existe) {
        return res.status(400).json({
            ok: false,
            sms: `El correo: ${email} ya existe o carnet: ${carnet}`,
            existe
        });
    }
    yield estudiante.save();
    res.json({
        ok: true,
        sms: 'Agregado correctamente',
        estudiante
    });
});
exports.login = login;
