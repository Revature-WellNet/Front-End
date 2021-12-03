import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FirebaseService } from './firebase.service';
@Injectable()
export class Apihttpintercept implements HttpInterceptor {
    public API_KEY: string = environment.firebase.apiKey;
    constructor(public router: Router, private service: FirebaseService) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        return this.service.userInfo.pipe(
            take(1),
            exhaustMap((user) => {

                if (!user) {
                    console.warn("User attempting to send an HTTP request without stored credentials. Sending request without attached headers.")
                    return next.handle(req);
                } 
                // else  if (req.url.includes('https://securetoken.googleapis.com/v1/token?key=' +
                // this.API_KEY)) {
                //             if(user.token!=null){
                //         const modifiedReq = req.clone({
                //             headers: req.headers
                //                 .set('auth',  user.token)
                //                 .set('Content-Type', 'application/x-www-form-urlencoded')  
                //                 .set('Access-Control-Allow-Origin', '*')
                //                // .set('Access-Control-Max-Age', '3600')                           
                //         });
                //         console.log("in refreshi")
                //         return next.handle(modifiedReq);
                //     }
                //     return next.handle(req);
                // }
                
                else {
                    console.log("Intercepting request: " + req.url);
                    const modifiedReq = req.clone({
                        headers: req.headers
                            .set('Authorization', 'Bearer ' + user.token)
                            .set('Content-Type', 'application/json')
                            .set('Access-Control-Allow-Origin', '*')
                            .set('Access-Control-Allow-Headers', 'Content-Type')

                    });
                //    console.log(modifiedReq)
                    return next.handle(modifiedReq)
                }
            })
        );
    }
}
