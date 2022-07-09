import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CabecalhoComponent } from './views/cabecalho/cabecalho.component';
import { LicoesComponent } from './views/dashboard/licoes/licoes.component';
import { EstatisticasComponent } from './views/estatisticas/estatisticas.component';
import { PerfilComponent } from './views/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CabecalhoComponent,
    LicoesComponent,
    EstatisticasComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
