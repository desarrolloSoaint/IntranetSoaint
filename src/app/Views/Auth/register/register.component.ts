import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { DataService } from 'src/app/Services/Data/data.service';
import { RoleServiceService } from 'src/app/Services/Role/role-service.service';
import { TokenService } from 'src/app/Services/Token/token.service';
import { UserServiceService } from 'src/app/Services/User/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  titles: any;
  inputs: any;
  roles: any;
  button: any;
  error=[];

  public registerForm = {
    email:null,
    password:null,
    role_id:null
  };
  
  constructor(
    private roleService:RoleServiceService,
    private dataService:DataService,
    private userService:UserServiceService,
    private tokenService:TokenService,
    private authService: AuthService,
    private router: Router
    ) {

    this.titles = ['Registro'];
    this.button = {title: "Registrar",size:"btn-lg"};
    this.inputs = [{
      type: 'email',
      name: 'email',
      icon: 'envelope',
      placeholder: 'Correo'
    },
    {
      type: 'password',
      name: 'password',
      icon: 'key',
      placeholder: 'Contraseña'
    }];
  }

  getRolesData():any{
    this.roleService.getRoles().subscribe(res=> {
      this.roles = [{ data: res, icon:"address-card"}]      
    });
  }

  onRegisterSubmit(){
    this.registerForm.email = this.dataService.getValue("email");
    this.registerForm.password = this.dataService.getValue("password");
    this.registerForm.role_id = this.dataService.getValue("select");

    this.userService.register(this.registerForm).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.tokenService.handle(data.access_token,data.user);
    this.authService.changeAuthStatus(true);
    this.router.navigateByUrl('/main');
  }

  handleError(error){
    this.error=error.error;
  }

  ngOnInit(): void {
    this.getRolesData();
  }

}
