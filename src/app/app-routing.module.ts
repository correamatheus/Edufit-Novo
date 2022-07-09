import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LicoesComponent } from './views/dashboard/licoes/licoes.component';
import { EstatisticasComponent } from './views/estatisticas/estatisticas.component';
import { LoginComponent } from './views/login/login.component';
import { PerfilComponent } from './views/perfil/perfil.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'licoes', component: LicoesComponent},
  {path: 'estatisticas', component: EstatisticasComponent},
  {path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
