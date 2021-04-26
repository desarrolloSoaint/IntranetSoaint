// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { UserServiceService } from '../User/user-service.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class RefreshTokenInterceptorService implements HttpInterceptor{

//   constructor(private userService: UserServiceService) { }
//   // Implementaciòn del metodo
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
//     return next.handle(req).pipe(catchError((errorResponse: HttpErrorResponse)=>{
//       const error = (typeof errorResponse.error !== 'object')? JSON.parse(errorResponse.error): errorResponse;
//       if(errorResponse.status === 401 && error.error === 'token_expired'){
//         this.userService.sessionTime()
//       }
    
//       return Observable.throw(errorResponse);
//     }))
//   }
// }