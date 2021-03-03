import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../Token/token.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{
  
  role:any;

  constructor(private tokenService:TokenService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    this.role = localStorage.getItem('role');

    if (this.tokenService.loggedIn() && this.role == 'Administrador') {
      return true
    }else {
      this.router.navigate(['/main']);
      return false;
    }
  }
}
