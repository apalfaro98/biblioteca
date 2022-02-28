export default class Books {

    _id: number;
    _titulo: string;
    _categoria: string;
    _total: number;

    constructor(titulo: string, categoria: string, total: number) {
        
        this._id = 1;
        this._titulo = titulo;
        this._categoria = categoria;
        this._total = total;

    }

}