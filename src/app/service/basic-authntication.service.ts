import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../app.constants';



@Injectable({
  providedIn: 'root'
})
export class BasicAuthnticationService {

  constructor(private http: HttpClient) { }

  // authenticate(username: string, password: any){
  //   //console.log('before ' + this.isUseLoggedIn());
  //   if(username==="Chrysa" && password==='dummy'){
  //     sessionStorage.setItem('authenticatedUser', username)
  //     //console.log('after ' + this.isUseLoggedIn());
  //     return true;
  //   }
  //   return false;
  // }



  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser')

  }

  getAuthenticatedToken() {
    let user = sessionStorage.getItem('authenticatedUser');
    if (user) {
      return sessionStorage.getItem('token');
    } else {
      console.error();
      return null;
    }

  }

  isUseLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')

  }

  executeBasicAuthenticationService(username: string, password: any) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    // working on definition of observable. this is executed only when someone is subscribed to it. 
    //we want to make sure thta whoever is subscribe to it, they would want to see the data. 
    //that is why in these methods you need to return this data back
    //the pipe method allows us to declare what should be done if the request succeds or if it fails
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
      { headers }).pipe(
        map(
          data => {
            sessionStorage.setItem('authenticatedUser', username);
            sessionStorage.setItem('token', basicAuthHeaderString);
            return data;
          }
        )
      );
    //console.log("Execure Hello World Bean Service")
  }


  executeJWTAuthenticationService(username: string, password: any) {
    

     
    return this.http.post<any>(
      `${API_URL}/authenticate`,{
      username,
      password})
      .pipe(
        map(
          data => {
            sessionStorage.setItem('authenticatedUser', username);
            sessionStorage.setItem('token', `Bearer ${data.token}`);
            return data;
          }
        )
      );
    //console.log("Execure Hello World Bean Service")
  }


}




export class AuthenticationBean {
  constructor(public message: string) {

  }
}
