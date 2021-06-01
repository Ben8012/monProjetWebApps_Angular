import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SiteDePlongeeService } from './site-de-plongee.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverInfosSpecialiteService implements Resolve<any>{

  constructor(public serve :  SiteDePlongeeService) { }


  resolve(route : ActivatedRouteSnapshot)
  {
    return this.serve.getOneSpeciality(route.params.id).pipe()
  }
}
