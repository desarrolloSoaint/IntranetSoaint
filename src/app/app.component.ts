import { Component } from '@angular/core';
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
    this.userService.sessionTime();
  }
}