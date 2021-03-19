import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { TokenService } from 'src/app/Services/Token/token.service';
import { UserServiceService } from 'src/app/Services/User/user-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  user: any = {};
  role: any = {};
  body: any;

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserServiceService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getUser();
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.userService.logout();
    this.tokenService.remove();
    this.authService.changeAuthStatus(false);
    this.router.navigateByUrl('/login')
  }

  getUser(){
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user){
      this.body = {
        email: this.user.email
      };
      
      this.userService.getUserRole(this.body).subscribe(res=>{
        this.role = res;
        localStorage.setItem('role',this.role.type);
      });
    }    
  }

  isControlAccessView(){
    return this.router.url.includes('/access-control/');
  }

}
