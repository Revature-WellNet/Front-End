import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { Covid19VerificationService } from 'src/app/services/covid19-verification.service';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private service:FirebaseService, private router:Router, private cvService : Covid19VerificationService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     return this.service.userInfo.pipe(
  //       take(1),
  //       map(res=>{
  //         //return res? true: false;
  // console.log(res)
  //         if(res){
  //           return true;
  //         }
  //         return this.router.createUrlTree([''])
  //       })
  //     )

 
  const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
  const covidData = JSON.parse(localStorage.getItem('covidInfo') || '{}');

  if((userData._token==null) ){
    console.log("no user data");
    return this.router.createUrlTree(['']);
  }
  // if(covidData.userId == null)
  // {
  //   console.log("in here>>>>???");
  //   return this.router.createUrlTree(['']);
  // }
  // if(covidData.covid == true)
  // {
  //   return this.router.createUrlTree(['lockout']);
  // }
  // console.log("before date compare");
  // let now = new Date().getTime();
  // let date = new Date(covidData.timestamp).getTime();
  // console.log("now - date: " + (now-date >= 86400000))
  // if( now - date >= 86400000)
  // {
  //   return this.router.navigate(['covid-verification']);
  // }  
 
  return true;
  }
  
}
