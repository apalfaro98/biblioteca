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
exports.existeAdmin = void 0;
const admin_schema_1 = __importDefault(require("../schemas/admin.schema"));
const existeAdmin = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    const existeAdmin = yield admin_schema_1.default.findOne({ usuario });
    if (!existeAdmin) {
        throw new Error(`El usuario ${usuario} no existe`);
    }
});
exports.existeAdmin = existeAdmin;
