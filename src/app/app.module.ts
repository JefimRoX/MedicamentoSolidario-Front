import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuarioInsertComponent } from './usuario/usuario-insert/usuario-insert.component';
import { CommonModule } from '@angular/common';
import { PontoColetaInsertComponent } from './PontoColeta/ponto-coleta-insert/ponto-coleta-insert.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { PontoColetaListComponent } from './PontoColeta/ponto-coleta-list/ponto-coleta-list/ponto-coleta-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    UsuarioListComponent,
    LoginComponent,
    HomeComponent,
    UsuarioInsertComponent,
    PontoColetaInsertComponent,
    FormDebugComponent,
    PontoColetaListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSnackBarModule,

    NgxMaskModule.forRoot(options)
  ],
  providers: [
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
