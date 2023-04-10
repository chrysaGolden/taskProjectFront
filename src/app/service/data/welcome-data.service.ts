import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean{
  constructor(public message:string){ }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient 
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
    //console.log("Execure Hello World Bean Service")
  }

  executeHelloWorldServixeWithPathVariable(name: string){
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    //   })

    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`,
    //{headers}
    );
    //console.log("Execure Hello World Bean Service")
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username = 'Chrysa'
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

}



// Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/Chrysa' 
// from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
