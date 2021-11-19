import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NurseComponent } from './components/nurse/nurse.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path: "",  redirectTo: "/registration", pathMatch: "full"},
  {path: "registration", component: RegistrationComponent},
  {path: "nurse", component: NurseComponent},
  // {path: "doctor", component: DoctorComponent},
  {path: "profile", component: ProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
