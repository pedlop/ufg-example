import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

// usado para criar o fake backend
import { fakeBackendProvider } from './../_server/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

import { ToastModule } from './shared/toast/toast.module';
import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';
import { TarefaModule } from './tarefas/tarefa.module';
import { AutenticarModule } from './shared/autenticar/autenticar.module';
import { PerfilUsuarioModule } from './shared/perfil-usuario/perfil-usuario.module';
import { FormControlErrorModule } from './shared/form-control-error/form-control-error.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ToastModule,
    HeaderModule,
    FooterModule,
    TarefaModule,
    AutenticarModule,
    PerfilUsuarioModule,
    FormControlErrorModule,
    AppRoutingModule
  ],
  providers: [
    // 'providers' usados para criar o 'fake backend'
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
