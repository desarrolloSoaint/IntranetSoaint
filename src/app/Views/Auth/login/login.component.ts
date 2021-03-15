import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { DataService } from 'src/app/Services/Data/data.service';
import { SpinnerService } from 'src/app/Services/Spinner/spinner.service';
import { TokenService } from 'src/app/Services/Token/token.service';
import { UserServiceService } from 'src/app/Services/User/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  titles: any;
  inputs: any;
  button: any;
  error = [];

  public loginForm = {
    email:null,
    password:null
  };


  constructor(
    private dataService:DataService,
    private userService:UserServiceService,
    private tokenService:TokenService,
    private authService: AuthService,
    private router: Router,
    private spinnerService:SpinnerService
  ) { 
    this.titles = ['Inicio de Sesion'];
    this.button = {title: "Entrar",size:"btn-lg"};
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

  onLoginSubmit(){
    this.loginForm.email = this.dataService.getValue("email");
    this.loginForm.password = this.dataService.getValue("password");
    this.userService.login(this.loginForm).subscribe(
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
  }
}