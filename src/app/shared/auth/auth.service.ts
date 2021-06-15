import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(
      /*public jwtHelper: JwtHelperService*/
      ) {}
  // ...
  public isAuthenticated(): boolean {
      //console.log('token')
    const token = sessionStorage.getItem('token');
    if(token) {
        const decoded = <any>jwt_decode(token);
        const exp = decoded.exp;
       // console.log(decoded);
        
        if(exp * 1000 < Date.now()) {
            return false;
        }
        return true;
    }
    // Check whether the token is expired and return
    // true or false
    return false;
  }

  public isSuperAdmin() {
    //console.log('token')
    const token = sessionStorage.getItem('token');
    if(token) {
        const decoded = <any>jwt_decode(token);
        const exp = decoded.exp;
       // console.log(decoded);
        
        if(exp * 1000 < Date.now()) {
            return false;
        }
        if(!decoded.isAdmin) {
            return false;
        }
        if(decoded.userId ===1){
            return true;
        }
    }
    
    return false;
  }
  
}