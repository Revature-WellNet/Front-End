import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { Covid19VerificationService } from 'src/app/services/covid19-verification.service';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private service: FirebaseService,
    private router: Router,
    private cvService: Covid19VerificationService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
   
    const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
    const covidData = JSON.parse(localStorage.getItem('covidInfo') || '{}');

    if (userData._token == null) {
      console.log('no user data');
      return this.router.createUrlTree(['/login']);
    }  if (covidData.userId == null) {
      console.log('empty');
      //this.service.logout();
     // return this.router.createUrlTree(['/covid-verification']);
    }
    if (covidData.covid == true) {
      console.log('lock');
      return this.router.createUrlTree(['/lockout']);
    }
    //console.log("before date compare");
    if(covidData.userId){
      let now = new Date().getTime();
    let date = new Date(covidData.timestamp).getTime();
    console.log(covidData.timestamp);
    if ((now - date) >= 86400000 && (now - date) < 1210000000) {
      console.log('time');
      return this.router.createUrlTree(['/covid-verification']);
    }
  }

    return true;
  }
}
