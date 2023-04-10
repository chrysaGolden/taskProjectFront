import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthnticationService } from '../service/basic-authntication.service';
import { HardcodedAuthnticationService } from '../service/hardcoded-authntication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = 'Chrysa'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin=false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(private router: Router,
    private hardcodeAuthenticationService: HardcodedAuthnticationService,
    private basicAuthenticationService: BasicAuthnticationService
    ){

  }

  handleLogin(){
    //console.log(this.username);

    // if(this.username==="Chrysa" && this.password==='dummy'){
      if(this.hardcodeAuthenticationService.authenticate(this.username,this.password)){
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin=false
    } else {this.invalidLogin=true
    }
  }

  handleBasicAuthLogin(){
    //console.log(this.username);

    // if(this.username==="Chrysa" && this.password==='dummy'){
      this.basicAuthenticationService.executeBasicAuthenticationService(this.username,this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin=false
          },
          error => {
            console.log(error)
            this.invalidLogin=true
          }
        )
    
  }

  handleJWTAuthLogin(){
      this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin=false
          },
          error => {
            console.log(error)
            this.invalidLogin=true
          }
        )
    
  }

}
