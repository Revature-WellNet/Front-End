import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tokenize } from "@angular/compiler/src/ml_parser/lexer";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app'
import { Observable } from "rxjs";
@Injectable()
export class Apihttpintercept implements HttpInterceptor {
    constructor(public router: Router) {
    }
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  if (!req.headers.has('Authorization')) {
               
                    const user = firebase.auth().currentUser;
                     if(user != null){
                        user.getIdToken(true).then(data => {
                        req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + data) });
                       
                        console.log(req)
                        return next.handle(req)
                    });
                         
                  }
               
            }
          
    return next.handle(req)
    
    }

    
}