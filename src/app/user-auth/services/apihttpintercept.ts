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
import { FirebaseService } from './firebase.service';
@Injectable()
export class Apihttpintercept implements HttpInterceptor {
    constructor(public router: Router, private service: FirebaseService) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        
        return this.service.userInfo.pipe(
            take(1),
            exhaustMap((user) => {
                
                if (!user) {
                    return next.handle(req);
                } else {

                    
                   // console.log(user.token)
                    const modifiedReq = req.clone({
                        headers: req.headers
                            .set('Authorization', 'Bearer ' + user.token)
                            .set('Content-Type', 'application/json')
                            .set('Access-Control-Allow-Origin', '*')
                            .set('Access-Control-Allow-Headers', 'Content-Type')
                           
                    });
                    
                  
                    return next.handle(modifiedReq);

                }
            })
        );
        
    }
}