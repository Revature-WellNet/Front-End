// import {Injectable} from "@angular/core";
// import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
// import {Observable, of, throwError} from "rxjs";
// import {catchError, map} from 'rxjs/operators';
// import { Router } from '@angular/router';
// import firebase from 'firebase/compat/app'

// @Injectable()
// export class AppHttpInterceptor implements HttpInterceptor {
//     constructor(public router: Router) {
//     }
//    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//    console.log(req);
//     if (!req.headers.has('Authorization')) {
//             console.log('header not working')
//           let  idToken  = '';
//                 const user = firebase.auth().currentUser;
//                 if(user != null){
//                    idToken = 'Bearer ' + user.getIdToken(true);
//                    console.log(idToken);
//                    console.log("inside intercept")
//                    req = req.clone({ headers: req.headers.set('Authorization',  idToken).set('Content-Type', 'application/json') });
//               }
           
//         }
       
//         return next.handle(req).pipe(
//             catchError((error) => {
       
//               let handled: boolean = false;
//               console.error(error);
//               if (error instanceof HttpErrorResponse) {
//                 if (error.error instanceof ErrorEvent) {
//                   console.error("Error Event");
//                 } else {
//                   console.log(`error status : ${error.status} ${error.statusText}`);
//                   switch (error.status) {
//                     case 401:      //login
//                         alert("Username/password is invalid")
//                       this.router.navigateByUrl("/login");
//                       console.log(`redirect to login`);
//                       handled = true;
//                       break;
//                     case 403:     //forbidden
//                     alert("Please log in...")
//                       this.router.navigateByUrl("/login");
//                       console.log(`redirect to login`);
//                       handled = true;
//                       break;
//                   }
//                 }
//               }
//               else {
//                 console.error("Other Errors");
//               }
       
//               if (handled) {
//                 console.log('return back ');
//                 return of(error);
//               } else {
//                 console.log('throw error back to to the subscriber');
//                 return throwError(error);
//               }
       
//             })
//         )
//     }
// }