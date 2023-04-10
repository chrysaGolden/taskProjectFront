import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BasicAuthnticationService } from '../basic-authntication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthnticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username = 'Chrysa'
    // let password = 'dummy'
    //let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let userName = this.basicAuthenticationService.getAuthenticatedUser();
    
    if(basicAuthHeaderString && userName){
      request = request.clone({
        setHeaders:{
          Authorization: basicAuthHeaderString
        }
      })
    }
  return next.handle(request);
  }
}
