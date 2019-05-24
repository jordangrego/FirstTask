import { Categoria } from './categoria.model';
import { Linha } from './linha.model';

export class CategoriaLinhas {
    categoria: Categoria;
    linhas: Array<Linha>;

    constructor() {
        this.linhas = new Array<Linha>();
    }
}
