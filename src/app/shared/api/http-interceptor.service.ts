import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>
  {
    let token = /*va chercher ton token et met le ici */ ""
    if(token != "")
    {
      let clone = req.clone({
        setHeaders : {
          'Authorization' : `Bearer ${token}`
        }
      })
      return next.handle(clone)
    }
    
    return next.handle(req)
  }
}
