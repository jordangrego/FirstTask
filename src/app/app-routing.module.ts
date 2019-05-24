import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinhasComponent } from './components/linhas/linhas.component';
import { LinhasCategoriasComponent } from './components/linhas-categorias/linhas-categorias.component';

const routes: Routes =
  [
    { path: '', component: LinhasComponent },
    { path: 'linhas', component: LinhasComponent },
    { path: 'linhasCategorias', component: LinhasCategoriasComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
