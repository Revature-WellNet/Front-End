import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-auth/login/login.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { Covid19VerificationComponent } from './covid19-verification/covid19-verification.component';
import { LockoutComponent } from './lockout/lockout.component';

const routes: Routes = [
  {path: "",  redirectTo: "/registration", pathMatch: "full"},
  {path: "registration", component: RegistrationComponent},
  {path: "nurse", component: NurseComponent},
  {path: "doctor", component: DoctorComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profileEdit', component: ProfileEditComponent},
  {path: "doctor", component: DoctorComponent},
  {path: 'covid-verification', component:Covid19VerificationComponent, pathMatch: 'full'},
  {path: 'lockout', component:LockoutComponent, pathMatch: 'full'},
  {path: "login", component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}