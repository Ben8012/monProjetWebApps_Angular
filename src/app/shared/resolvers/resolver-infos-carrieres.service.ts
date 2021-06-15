import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

import { SiteDePlongeeService } from '../api/api.service';


@Injectable({
  providedIn: 'root'
})
export class ResolverInfosCarrieresService implements Resolve<any>{

  constructor( public serve : SiteDePlongeeService ) { }


  resolve(route : ActivatedRouteSnapshot)
  {
    return this.serve.getOneSite(route.params.id).pipe()
  }
}
