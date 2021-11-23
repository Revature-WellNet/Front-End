import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './user-auth/login/login.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { Covid19VerificationComponent } from './covid19-verification/covid19-verification.component';
import { LockoutComponent } from './lockout/lockout.component';
import { PatientCheckInComponent } from './components/patient-check-in/patient-check-in.component';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';

const routes: Routes = [
  {path: "",  redirectTo: "/registration", pathMatch: "full"},
  {path: "registration", component: RegistrationComponent},
  {path: "login", component: LoginComponent},
  {path: "lockout", component: LockoutComponent},
  {path: "nurse", component: NurseComponent},
  // {path: "doctor", component: DoctorComponent},
  {path: "profile", component: ProfileComponent},
  {path: "diagnosis", component: DiagnosisComponent},
  {path: "checkin", component: PatientCheckInComponent},
  {path: "doctor", component: DoctorComponent},
  {path: "profile", component: ProfileComponent},
  {path: "diagnosis", component: DiagnosisComponent},
  {path: "checkin", component: PatientCheckInComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profileEdit', component: ProfileEditComponent},
  {path: 'covid-verification', component:Covid19VerificationComponent, pathMatch: 'full'},
  {
    path:"rooms",
    component:RoomsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}