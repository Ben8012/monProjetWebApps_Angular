import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SiteDePlongeeService } from './site-de-plongee.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverGetListEventService implements Resolve<any>{

  constructor(private siteDePlongee : SiteDePlongeeService) { }

    dataReturn : any[] = []

  resolve()
  {
      return new Promise((resolve, reject) => {
        this.siteDePlongee.getFormation().subscribe(
            (dataForm) => {
                this.dataReturn.push(dataForm)

                this.siteDePlongee.getSpeciality().subscribe(
                    (dataSpec) => {
                        this.dataReturn.push(dataSpec)    

                        this.siteDePlongee.getSite().subscribe(
                            (dataSite) => {
                                this.dataReturn.push(dataSite)   
                                resolve(this.dataReturn)     
                            }
                        )
                    }
                )
            }
        )
      })
  }
}