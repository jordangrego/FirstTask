import { Component, OnInit } from '@angular/core';
import { Linha } from 'src/app/models/linha.model';

@Component({
  selector: 'app-linhas',
  templateUrl: './linhas.component.html',
  styleUrls: ['./linhas.component.scss']
})
export class LinhasComponent implements OnInit {

  public linha: Linha;
  public linhas: Array<Linha>;

  constructor() {
    this.linha = new Linha();
    this.linhas = new Array<Linha>();
  }

  ngOnInit() {
  }

  inserir() {
    this.linhas.push(JSON.parse(JSON.stringify(this.linha)));
    this.linha = new Linha();
  }

  excluir(linha: Linha) {
    var index = this.linhas.indexOf(linha);
    if (index > -1) {
      this.linhas.splice(index, 1);
    }
  }
}
