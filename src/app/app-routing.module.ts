import Urls from './constans/Urls';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguridadComponent } from './view/seguridad/seguridad.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { AgentecomercialComponent } from './view/agentecomercial/agentecomercial.component';

const APP_ROUTES: Routes = [

  { path: '', component: SeguridadComponent },

  { path: 'login', component: SeguridadComponent },
  
  {
    path: '', /*canActivate: [LoginGuardianService],*/ component: MainLayoutComponent,
    children: [
      { path: Urls.DASHBOARD, component: DashboardComponent },
      { path: Urls.AGTCOMERCIAL, component: AgentecomercialComponent }
      
    ],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
