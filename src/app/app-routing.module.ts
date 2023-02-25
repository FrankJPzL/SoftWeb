import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [];

const APP_ROUTES: Routes = [

  { path: '', component: SeguridadComponent },

  { path: 'login', component: SeguridadComponent },
  
  {
    path: '', /*canActivate: [LoginGuardianService],*/ component: MainLayoutComponent,
    children: [
     
      
    ],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
