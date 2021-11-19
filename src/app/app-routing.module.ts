import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { NurseComponent } from './components/nurse/nurse.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path: "",  redirectTo: "/registration", pathMatch: "full"},
  {path: "registration", component: RegistrationComponent},
  {path: "nurse", component: NurseComponent},
  // {path: "doctor", component: DoctorComponent},
  {path: "profile", component: ProfileComponent},
  {path: "diagnosis", component: DiagnosisComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
