import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import * as puppeteer from 'puppeteer';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
message='Some Welcome Message'
welcomeMessageFromService:string | undefined
name = ''
  constructor(
    private route: ActivatedRoute,
    private service:WelcomeDataService){

  }


  


  ngOnInit(){
    //console.log(this.message)
    //console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
    
  }

 
  

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    //console.log('last line of getWelcomeMessage')
    //console.log("get Welcome Message")
  }

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldServixeWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    //console.log('last line of getWelcomeMessage')
    //console.log("get Welcome Message")
  }

  handleSuccessfulResponse(response: any){
    //console.log(response);
    //console.log(response.message);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error:any){
    //console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }

}
