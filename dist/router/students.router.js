"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const student_controller_1 = require("../controllers/student.controller");
const validar_campos_1 = require("../middlewares/validar-campos");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
exports.router = router;
router
    .post('/login', [
    (0, express_validator_1.check)('email', 'El correo no es valido').isEmail(),
    validar_campos_1.validarCampos
], student_controller_1.login);
