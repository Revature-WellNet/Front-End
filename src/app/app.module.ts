import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseService } from './user-auth/services/firebase.service';

import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { UserAuthModule } from './user-auth/user-auth.module';

import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ButtonComponent } from './components/button/button.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { NurseService } from './services/nurse.service';
import { Covid19VerificationComponent } from './covid19-verification/covid19-verification.component';
import { LockoutComponent } from './lockout/lockout.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RegistrationComponent,
    NurseComponent,
    ButtonComponent,
    NurseComponent,
    ProfileEditComponent,
    DoctorComponent,
    Covid19VerificationComponent,
    LockoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    UserAuthModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
