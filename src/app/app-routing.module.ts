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

import { AuthGuardGuard } from './user-auth/services/auth-guard.guard';
import { StaticStyleTesterComponent } from './static-style-tester/static-style-tester.component';
import { AddAllergiesVaccinesComponent } from './components/add-allergies-vaccines/add-allergies-vaccines.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

import { MainFloorComponent } from './components/main-floor/main-floor.component';
import { EmergencyFloorComponent } from './components/emergency-floor/emergency-floor.component';
import { PtFloorComponent } from './components/pt-floor/pt-floor.component';
import { TraumaFloorComponent } from './components/trauma-floor/trauma-floor.component';
import { FloorsComponent } from './components/floors/floors.component';

export const routes: Routes = [
  {path: "",  redirectTo: "login", pathMatch: "full"},
  {path: "registration", component: RegistrationComponent},
  {path:"patientcheckin", canActivate:[AuthGuardGuard], component:PatientCheckInComponent},
  {path: "nurse", canActivate:[AuthGuardGuard], component: NurseComponent},
  {path: "doctor", canActivate:[AuthGuardGuard], component: DoctorComponent},
  {path: "profile", canActivate:[AuthGuardGuard], component: ProfileComponent},
  {path: "diagnosis", canActivate:[AuthGuardGuard], component: DiagnosisComponent},
  {path: "checkin", canActivate:[AuthGuardGuard], component: PatientCheckInComponent},
  {path: "addAllergiesVaccines", canActivate:[AuthGuardGuard], component: AddAllergiesVaccinesComponent},
  {path: 'profileEdit', canActivate:[AuthGuardGuard], component: ProfileEditComponent},
  {path: 'covid-verification', component:Covid19VerificationComponent, pathMatch: 'full'},
  {path: 'lockout', component:LockoutComponent, pathMatch: 'full'},
  {path: "login", component:LoginComponent}, 
  {path: "rooms", canActivate:[AuthGuardGuard], component:RoomsComponent},
  {path: 'styles', component: StaticStyleTesterComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'mainfloor', component: MainFloorComponent},
  {path: 'emergency', component: EmergencyFloorComponent},
  {path: 'trauma', component: TraumaFloorComponent},
  {path: 'physical', component: PtFloorComponent},
  {path: 'floors', component: FloorsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}