import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesserviceService } from './clientes/clientesservice.service';
import { HttpClientModule } from '@angular/common/http';
import { PesquisarFilterPipe } from './pipes/pesquisar.pipe';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { CadClientesComponent } from './clientes/cad-clientes/cad-clientes.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
/* import { CommonModule } from '@angular/common'; */


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    PesquisarFilterPipe,
    CampoControlErroComponent,
    CadClientesComponent,
    LoginComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  /*   CommonModule */
  ],
  exports: [
    ClientesComponent
  ],
 /*  entryComponents: [ClientesComponent], */
  providers: [ClientesserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
