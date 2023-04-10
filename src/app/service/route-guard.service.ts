import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthnticationService } from './hardcoded-authntication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  constructor(public hardcodedAuthnticationService: HardcodedAuthnticationService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthnticationService.isUseLoggedIn())
      return true;
    this.router.navigate(['login']);
    //route user to login
    return false;
  };

}
