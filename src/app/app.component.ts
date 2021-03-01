import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Soaint-Intranet-Frontend';

  constructor(public translate: TranslateService) {

    translate.addLangs(['es','en']);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('es');

    const browserLang = translate.getBrowserLang();

    translate.use(browserLang.match(/es|en/) ? browserLang : 'es');

}
}


