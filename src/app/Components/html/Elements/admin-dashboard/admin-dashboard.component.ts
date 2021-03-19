import { Component, OnInit } from '@angular/core';
import { RuleService } from 'src/app/Services/Rule/rule.service';
import { ScheduleService } from 'src/app/Services/Schedule/schedule.service';
import { UserServiceService } from 'src/app/Services/User/user-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  count_users:any;
  count_rules:any;
  count_schedules:any;

  constructor(private userService: UserServiceService,
              private rulesService: RuleService,
              private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.userService.countOfUsers().subscribe(res=>{
      this.count_users = res
    })
    this.rulesService.countOfRules().subscribe(res=>{
      this.count_rules = res
    })
    this.scheduleService.countOfSchedules().subscribe(res=>{
      this.count_schedules = res
    })
  }

}
