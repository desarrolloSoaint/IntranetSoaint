import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../Token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginGuardService implements CanActivate{

  constructor(private tokenService:TokenService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.tokenService.loggedIn()) {
      this.router.navigate(['/main'])
      return false
    } else {
      return true
    }
  }
}
