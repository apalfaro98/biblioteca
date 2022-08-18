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
exports.deleteStudent = exports.deleteBook = exports.returnBook = exports.pedirBook = exports.showBooks = exports.showStudents = exports.add_book = exports.login = void 0;
const admin_schema_1 = __importDefault(require("../schemas/admin.schema"));
const books_schemas_1 = __importDefault(require("../schemas/books.schemas"));
const estudiante_schema_1 = __importDefault(require("../schemas/estudiante.schema"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario, password } = req.body;
    const existeAdmin = yield admin_schema_1.default.findOne({ usuario });
    if (!existeAdmin) {
        return res.status(400).json({
            ok: false,
            sms: `No existe el admin: ${usuario}`,
        });
    }
    if (existeAdmin.password != password) {
        return res.status(400).json({
            ok: false,
            sms: 'password incorrecta'
        });
    }
    return res.json({
        ok: true,
        admin: existeAdmin
    });
});
exports.login = login;
const add_book = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { titulo, cantidad, categoria, autor } = req.body;
    // verificar si existe
    const query = { titulo: titulo };
    const existeBook = yield books_schemas_1.default.findOne(query);
    // si existe agregarlo a la cantidad
    if (existeBook) {
        const update = {
            disponible: existeBook.disponible + cantidad,
            cantidad: cantidad + existeBook.cantidad,
        };
        const bookActualizado = yield books_schemas_1.default.findOneAndUpdate(query, update);
        return res.json({
            ok: true,
            sms: 'Libro actualizado correctamente',
            bookActualizado
        });
    }
    const book = new books_schemas_1.default({
        titulo: titulo,
        cantidad,
        disponible: cantidad,
        categoria,
        autor
    });
    // sino agregar libro nuevo
    yield book.save();
    res.json({
        ok: true,
        sms: 'Libro agregado correctamente',
        book
    });
});
exports.add_book = add_book;
const showStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [total, estudiantes] = yield Promise.all([
        estudiante_schema_1.default.countDocuments(),
        estudiante_schema_1.default.find(),
    ]);
    res.json({
        ok: true,
        total,
        estudiantes
    });
});
exports.showStudents = showStudents;
const showBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [total, books] = yield Promise.all([
        books_schemas_1.default.countDocuments(),
        books_schemas_1.default.find(),
    ]);
    res.json({
        ok: true,
        total,
        books
    });
});
exports.showBooks = showBooks;
const pedirBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { titulo = '', email = '' } = req.body;
    const [book, estudiante] = yield Promise.all([
        books_schemas_1.default.findOne({ titulo }),
        estudiante_schema_1.default.findOne({ email })
    ]);
    if (!book)
        return res.status(400).json({
            ok: false,
            sms: `No existe el libro: ${titulo}`
        });
    if (book.disponible == 0)
        return res.status(400).json({
            ok: false,
            sms: `Libro: ${titulo} no tiene disponibles`
        });
    if (!estudiante)
        return res.status(400).json({
            ok: false,
            sms: `No existe estudiante con email: ${email}`
        });
    if (estudiante.libros.includes(titulo))
        return res.status(400).json({
            ok: false,
            sms: `El estudiante: ${estudiante.nombre}, ya tiene el libro: ${titulo}`
        });
    estudiante.libros.push(titulo);
    yield Promise.all([
        books_schemas_1.default.findOneAndUpdate({ titulo }, { disponible: book.disponible - 1 }),
        estudiante_schema_1.default.findOneAndUpdate({ email }, estudiante)
    ]);
    res.json({
        ok: true,
        sms: 'Prestamo realizado correctamente'
    });
});
exports.pedirBook = pedirBook;
const returnBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { titulo = '', email = '' } = req.body;
    const [book, estudiante] = yield Promise.all([
        books_schemas_1.default.findOne({ titulo }),
        estudiante_schema_1.default.findOne({ email })
    ]);
    if (!book)
        return res.status(400).json({
            ok: false,
            sms: `No existe el libro: ${titulo}`
        });
    if (!estudiante)
        return res.status(400).json({
            ok: false,
            sms: `No existe estudiante con email: ${email}`
        });
    if (!estudiante.libros.includes(titulo))
        return res.status(400).json({
            ok: false,
            sms: `El estudiante ${estudiante.nombre} no tiene el libro: ${titulo}`
        });
    yield Promise.all([
        books_schemas_1.default.findOneAndUpdate({ titulo }, { disponible: book.disponible + 1 }),
        estudiante_schema_1.default.findOneAndUpdate({ email }, { libros: estudiante.libros.filter(b => b != titulo) })
    ]);
    res.json({
        ok: true,
        sms: 'Devolucion realizado correctamente'
    });
});
exports.returnBook = returnBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { titulo, cantidad } = req.body;
    const book = yield books_schemas_1.default.findOne({ titulo });
    if (!book)
        return res.status(400).json({
            ok: false,
            sms: `No existe el libro: ${titulo}`
        });
    if (book.disponible < cantidad)
        return res.status(400).json({
            ok: false,
            sms: 'No puedes dar baja a mas libros de los que tienes disponibles'
        });
    const query = { disponible: book.disponible - cantidad, cantidad: book.cantidad - cantidad };
    yield books_schemas_1.default.findOneAndUpdate({ titulo }, query);
    res.json({
        ok: true,
        sms: `libro eliminados correctamentes`
    });
});
exports.deleteBook = deleteBook;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const estudiante = yield estudiante_schema_1.default.findOne({ email });
    if (!estudiante)
        return res.status(400).json({
            ok: false,
            sms: `No existe estudiante con correo: ${email}`
        });
    if (estudiante.libros.length > 0)
        return res.status(400).json({
            ok: false,
            sms: `El estudiante ${estudiante.nombre} tiene aun libros prestados.`
        });
    const resp = yield estudiante_schema_1.default.findOneAndDelete({ email });
    res.json({
        ok: true,
        sms: `estudiante eliminado correctamente`
    });
});
exports.deleteStudent = deleteStudent;
