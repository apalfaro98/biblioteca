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
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const config_1 = require("../database/config");
const admin_router_1 = require("../router/admin.router");
const students_router_1 = require("../router/students.router");
const connect_history_api_fallback_1 = __importDefault(require("connect-history-api-fallback"));
class Server {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        // conectar db
        this.dataBaseConect();
        // middlewares
        this.middlewares();
        // rutas de la aplicacion
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, connect_history_api_fallback_1.default)({
            rewrites: [
                {
                    from: /^\/api\/.*$/,
                    to: function (context) {
                        return `${context.parsedUrl.pathname}`;
                    }
                }
            ]
        }));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static(path_1.default.resolve(__dirname, '../public')));
    }
    dataBaseConect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.dbConnection)();
        });
    }
    routes() {
        this.app.use('/api/admin', admin_router_1.router);
        this.app.use('/api/student', students_router_1.router);
    }
    startServer() {
        this.app.listen(this.port, () => {
            console.log('Escuchando puerto', this.port);
        });
    }
}
exports.default = Server;
