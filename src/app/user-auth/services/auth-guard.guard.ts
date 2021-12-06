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
  constructor(private service:FirebaseService, private router:Router, private cvService : Covid19VerificationService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { 
    const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
    const covidData = JSON.parse(localStorage.getItem('covidInfo') || '{}');
    console.log("covid data: " + JSON.stringify(covidData));
    if((userData._token==null) ){
      console.warn("User is attempting to route to an authorized page: '" + route.url + "' without logging in and authenticating. Rerouting to login.");
      return this.router.createUrlTree(['/login']);
    }
    if(covidData == null)
    {
      console.warn("User is attempting to route to an authorized page: '" + route.url + "' without a covid verification form entry. Rerouting to 'covid-verification'.");
      return this.router.createUrlTree(['covid-verification']);
    }
    if(covidData.covid == true)
    {
      console.warn("User has COVID and is attempting to route an authorized page: '" + route.url + "'. Rerouting to 'lockout'.");
      return this.router.createUrlTree(['lockout']);
    }
    
    let now = new Date().getTime();
    let date = new Date(covidData.timestamp).getTime();
    if( now - date >= 86400000)
    {
      console.warn("User is attempting to route to a page with an expired covid verification form entry. Rerouting to 'covid-verification.'");
      return this.router.createUrlTree(['covid-verification']);
    }  
  
    return true;
  }
}
