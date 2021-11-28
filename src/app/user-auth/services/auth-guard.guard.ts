import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private service:FirebaseService, private router:Router){}
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
 
  if((userData._token==null) ){
  
    return this.router.createUrlTree([''])
   
  }
 
  return true;
  }
  
}
