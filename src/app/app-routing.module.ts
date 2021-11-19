import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Covid19VerificationComponent } from './covid19-verification/covid19-verification.component';
import { LockoutComponent } from './lockout/lockout.component';

const routes: Routes = [
  {path: 'covid-verification', component:Covid19VerificationComponent, pathMatch: 'full'},
  {path: 'lockout', component:LockoutComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
