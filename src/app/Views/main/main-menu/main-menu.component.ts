import { Component, OnInit } from '@angular/core';
import { RuleService } from 'src/app/Services/Rule/rule.service';
import { ScheduleService } from 'src/app/Services/Schedule/schedule.service';
import { UserServiceService } from 'src/app/Services/User/user-service.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  role: any;
  user: any;
  body: any;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getRole();
  }

  getRole(){
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user){
      this.body = {
        email: this.user.email
      };
      
      this.userService.getUserRole(this.body).subscribe(res=>{
        this.role = res;
      });
    }    
  }
}