import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RoomsComponent } from './components/rooms/rooms.component';

import { Covid19VerificationComponent } from './covid19-verification/covid19-verification.component';
import { LockoutComponent } from './lockout/lockout.component';



@NgModule({
  declarations: [
    AppComponent,

    RoomsComponent,

    Covid19VerificationComponent,
    LockoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
