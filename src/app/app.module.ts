import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FirebaseService } from './user-auth/services/firebase.service';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ButtonComponent } from './components/button/button.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { PatientCheckInComponent } from './components/patient-check-in/patient-check-in.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { NurseService } from './services/nurse.service';


import { RoomsComponent } from './components/rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//imported
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';

import { Covid19VerificationComponent } from './covid19-verification/covid19-verification.component';
import { LockoutComponent } from './lockout/lockout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Apihttpintercept } from './user-auth/services/apihttpintercept';
import { StaticStyleTesterComponent } from './static-style-tester/static-style-tester.component';
import { AddAllergiesVaccinesComponent } from './components/add-allergies-vaccines/add-allergies-vaccines.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { WellnetLogoComponent } from './wellnet-logo/wellnet-logo.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ForumPostComponent } from './components/forum-post/forum-post.component';
import { PostComponent } from './components/post/post.component';
import { ReversePipe } from './models/reverse.pipe';



@NgModule({
  declarations: [
    AppComponent,

    ProfileComponent,
    RegistrationComponent,
    NurseComponent,
    ButtonComponent,
    NurseComponent,
    DiagnosisComponent,
    PatientCheckInComponent,
    ProfileEditComponent,
    DoctorComponent,
    RoomsComponent,
    Covid19VerificationComponent,
    LockoutComponent,
    NavbarComponent,
    StaticStyleTesterComponent,
    AddAllergiesVaccinesComponent,
    ForgetPasswordComponent,
    WellnetLogoComponent,
    SideBarComponent,
    ForumPostComponent,
    PostComponent,
    ReversePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    UserAuthModule,
    HttpClientModule,
    NgbModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: Apihttpintercept,
    multi: true
},
FirebaseService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
