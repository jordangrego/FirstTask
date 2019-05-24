import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinhasComponent } from './components/linhas/linhas.component';
import { LinhasCategoriasComponent } from './components/linhas-categorias/linhas-categorias.component';


@NgModule({
  declarations: [
    AppComponent,
    LinhasComponent,
    LinhasCategoriasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
