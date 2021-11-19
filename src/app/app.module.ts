import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ButtonComponent } from './components/button/button.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { HttpClientModule } from '@angular/common/http';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RegistrationComponent,
    NurseComponent,
    ButtonComponent,
    NurseComponent,
    DiagnosisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
