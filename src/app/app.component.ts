import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { AuthService } from './Services/Auth/auth.service';
import { TokenService } from './Services/Token/token.service';
import { UserServiceService } from './Services/User/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Soaint-Intranet-Frontend';

  constructor(
              public translate: TranslateService,
              private userService:UserServiceService,
              private tokenService: TokenService,
              private authService: AuthService,
              private router: Router) {

    translate.addLangs(['es','en']);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('es');

    const browserLang = translate.getBrowserLang();

    translate.use(browserLang.match(/es|en/) ? browserLang : 'es');
  }
  ngOnInit() {
    const timer = JSON.parse(localStorage.getItem('timer'));
    if (timer && (Date.now() > timer)) {
      this.userService.logout();
      this.tokenService.remove();
      this.authService.changeAuthStatus(false);
      this.router.navigateByUrl('/login')
    }
  }
}


