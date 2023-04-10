import { Component, OnInit } from '@angular/core';
import { HardcodedAuthnticationService } from '../service/hardcoded-authntication.service';

@Component({
  selector: 'app-mennu',
  templateUrl: './mennu.component.html',
  styleUrls: ['./mennu.component.css']
})
export class MennuComponent implements OnInit{
  isUserLoggedIn: boolean = false;
  constructor(public hardcodedAuthnticationService: HardcodedAuthnticationService){}

  
  ngOnInit(){
    this.isUserLoggedIn = this.hardcodedAuthnticationService.isUseLoggedIn();
  }

}
