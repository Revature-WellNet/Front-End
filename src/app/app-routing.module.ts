import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './components/doctor/doctor.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path: "",  redirectTo: "/registration", pathMatch: "full"},
  {path: "registration", component: RegistrationComponent},
  {path: "nurse", component: NurseComponent},
  // {path: "doctor", component: DoctorComponent},
  {path: "profileEdit", component: ProfileComponent},
  {path: "profile", component: ProfileEditComponent},
  {path: "doctor", component: DoctorComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
