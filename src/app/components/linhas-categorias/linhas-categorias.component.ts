import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaLinhas } from 'src/app/models/categoria-linhas.model';
import { Linha } from 'src/app/models/linha.model';

@Component({
  selector: 'app-linhas-categorias',
  templateUrl: './linhas-categorias.component.html',
  styleUrls: ['./linhas-categorias.component.scss']
})
export class LinhasCategoriasComponent implements OnInit {

  public categorias: Array<Categoria>;
  public categoriasLinhas: Array<CategoriaLinhas>;

  public linha: Linha;
  public categoria: Categoria;

  public activeIds: Array<string>;

  constructor() {

    this.categoriasLinhas = new Array<CategoriaLinhas>();
    this.linha = new Linha();

    this.categorias = new Array<Categoria>();
    this.categorias.push(new Categoria("7e169217-19c2-44e0-82a4-638802f0f759", "Categoria A"));
    this.categorias.push(new Categoria("29c050a8-0b94-4b3c-976d-915805a1ed1c", "Categoria B"));
    this.categorias.push(new Categoria("1b64b97a-3b7d-4fc9-bec5-e9616a2f078d", "Categoria C"));

    this.activeIds = new Array<string>();

    this.categoria = this.categorias[0];
  }

  ngOnInit() {
  }

  inserir() {

    let categoriaLinhas = this.categoriasLinhas.find(x => x.categoria.id == this.categoria.id);
    if (categoriaLinhas) {
      categoriaLinhas.linhas.push(JSON.parse(JSON.stringify(this.linha)));
      this.linha = new Linha();
    }
    else {
      categoriaLinhas = new CategoriaLinhas();
      categoriaLinhas.categoria = JSON.parse(JSON.stringify(this.categoria));
      categoriaLinhas.linhas.push(JSON.parse(JSON.stringify(this.linha)));
      this.linha = new Linha();
      this.categoriasLinhas.push(categoriaLinhas);
    }

    this.activeIds.length = 0;
    this.activeIds.push("panel-" + categoriaLinhas.categoria.id);
  }

  excluir(categoriaLinha: CategoriaLinhas, linhaTemp: Linha) {
    var index = categoriaLinha.linhas.indexOf(linhaTemp);
    if (index > -1) {
      categoriaLinha.linhas.splice(index, 1);
    }

    if (categoriaLinha.linhas.length < 1) {
      var idx = this.categoriasLinhas.indexOf(categoriaLinha);
      if (idx > -1) {
        this.categoriasLinhas.splice(idx, 1);
      }
    }
  }
}
