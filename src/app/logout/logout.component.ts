import { Component, OnInit } from '@angular/core';
import { HardcodedAuthnticationService } from '../service/hardcoded-authntication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  constructor(public hardcodeAuthenticationService: HardcodedAuthnticationService){}

  ngOnInit(): void {
    this.hardcodeAuthenticationService.logout();      
  }

}
