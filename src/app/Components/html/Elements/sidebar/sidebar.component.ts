import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { TokenService } from 'src/app/Services/Token/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService,
              private router: Router,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getUser();
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.tokenService.remove();
    this.authService.changeAuthStatus(false);
    this.router.navigateByUrl('/login')
  }

  getUser():void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
