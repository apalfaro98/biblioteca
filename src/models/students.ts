
export default class Students{

    _id: number;
    _nombre: string;
    _apellido: string;
    _ci: string;
    _carrera: string;
    _libros: number;


    constructor(
        nombre: string,
        apellido: string,
        ci: string,
        carrera: string,
    ){
        this._id = 3;
        this._nombre = nombre;
        this._apellido = apellido;
        this._ci = ci;
        this._carrera = carrera;
        this._libros = 0;

    }

}