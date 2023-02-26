import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeguridadComponent } from './view/seguridad/seguridad.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { Router, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { NoPasteDirective } from './directives/no-paste.directive';
import { TokenInterceptor } from './auth/token.interceptor';
import { MenuComponent } from './view/webpart/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    SeguridadComponent,
    MainLayoutComponent,
    DashboardComponent,
    OnlyNumbersDirective,
    NoPasteDirective,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
  ],
  providers: [ DatePipe,
    { provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
