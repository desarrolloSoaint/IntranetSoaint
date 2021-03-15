import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,HttpResponse,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { TokenService } from '../Token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(tokenService: TokenService) { }
  // Implementaciòn del metodo
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Obtenemos el token del sessioStorage
    const token: string = localStorage.getItem('token');

    let request = req;
	//Validamos si el token existe
    if (token) {
      //Clonamos el token y lo mandamos en la cabecera de todas las peticiones HTTP
      request = req.clone({
        setHeaders: {
          //Autorizaciòn de tipo Bearer + token
          //El tipo de autorizaciòn depende del back
          Authorization: `Bearer ${ token }`
        }
      });
    }
    return next.handle(request)
  }
}




