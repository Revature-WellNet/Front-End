import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
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
import { RegisterComponent } from './user-auth/register/register.component';
import { AuthGuardGuard } from './user-auth/services/auth-guard.guard';

const routes: Routes = [
  {path: "",  redirectTo: "/login", pathMatch: "full"},
  {path: "registration", component: RegistrationComponent},
  {path:"patientcheckin", canActivate:[AuthGuardGuard], component:PatientCheckInComponent},
  {path: "nurse", canActivate:[AuthGuardGuard], component: NurseComponent},
  {path: "doctor", canActivate:[AuthGuardGuard], component: DoctorComponent},
  {path: "profile", canActivate:[AuthGuardGuard], component: ProfileComponent},
  {path: "diagnosis", canActivate:[AuthGuardGuard], component: DiagnosisComponent},
  {path: "checkin", canActivate:[AuthGuardGuard], component: PatientCheckInComponent},
 
  {path: 'profileEdit', canActivate:[AuthGuardGuard], component: ProfileEditComponent},
  {path: 'covid-verification', canActivate:[AuthGuardGuard], component:Covid19VerificationComponent, pathMatch: 'full'},
  {path: 'lockout', canActivate:[AuthGuardGuard], component:LockoutComponent, pathMatch: 'full'},
  {path: "login", component:LoginComponent}, 
  {path:"rooms", canActivate:[AuthGuardGuard], component:RoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}