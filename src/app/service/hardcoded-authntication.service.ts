import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthnticationService {

  constructor() { }

  authenticate(username: string, password: any){
    //console.log('before ' + this.isUseLoggedIn());
    if(username==="Chrysa" && password==='dummy'){
      sessionStorage.setItem('authenticatedUser', username)
      //console.log('after ' + this.isUseLoggedIn());
      return true;
    }
    return false;
  }

  isUseLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')

  }
}
