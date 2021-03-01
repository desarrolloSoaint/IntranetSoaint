import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//App
import { AppComponent } from './app.component';

//Tags
import { TitleComponent } from './Components/html/Tags/title/title.component';
import { InputTextComponent } from './Components/html/Tags/input-text/input-text.component';
import { SubmitButtonComponent } from './Components/html/Tags/submit-button/submit-button.component';
import { SelectComponent } from './Components/html/Tags/select/select.component';
import { ClockComponent } from './Components/html/Tags/clock/clock.component';

//Elemets
import { CardComponent } from './Components/html/Elements/card/card.component';
import { SidebarComponent } from './Components/html/Elements/sidebar/sidebar.component';
import { TableComponent } from './Components/html/Elements/table/table.component';

//Views
import { LoginComponent } from './Views/Auth/login/login.component';
import { RegisterComponent } from './Views/Auth/register/register.component';
import { MainComponent } from './Views/main/main.component';
import { ConfigurationComponent } from './Views/main/configuration/configuration.component';
import { AccessControlComponent } from './Views/main/access-control/access-control.component';
import { MainMenuComponent } from './Views/main/main-menu/main-menu.component';

// External
import { NgxSpinnerModule } from 'ngx-spinner';
import { InterceptorService } from './Services/Interceptor/interceptor.service';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// Services
import { ClockService} from 'src/app/Services/Clock/clock.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    InputTextComponent,
    LoginComponent,
    SubmitButtonComponent,
    RegisterComponent,
    CardComponent,
    MainComponent,
    SidebarComponent,
    SelectComponent,
    ConfigurationComponent,
    AccessControlComponent,
    MainMenuComponent,
    TableComponent,
    ClockComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgxSpinnerModule,
    MDBBootstrapModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true},
    ClockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
