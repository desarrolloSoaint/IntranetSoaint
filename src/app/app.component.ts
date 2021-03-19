import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/Auth/auth.service';
import { TokenService } from './Services/Token/token.service';
import { UserServiceService } from './Services/User/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SOAINT Control de Acceso';

  constructor(private userService:UserServiceService) {
  }

  ngOnInit() {
  }
}