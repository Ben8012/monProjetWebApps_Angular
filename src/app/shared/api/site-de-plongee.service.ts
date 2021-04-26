import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import * as fileSaver from '@file-saver';



export class SiteDePlongee
{
    id: number;
    nom: string;
    plan: string;
    rue: string;
    numero: number;
    code_postal: number;
    ville: string;
    niveau_min: string;
    photo: string;
    info: string;
    site_web:string;
 
    constructor(data: any)
    {
        this.id = data.id;
        this.nom = data.nom;
        this.plan = data.plan;
        this.rue = data.rue;
        this.numero = data.numero;
        this.code_postal = data.code_postal;
        this.ville = data.ville;
        this.niveau_min = data.niveau_min;
        this.photo = data.photo;
        this.info = data.info;
        this.site_web=data.site_web;

    }
}

@Injectable({
  providedIn: 'root'
})
export class FileService{
  constructor(private http: HttpClient) {}

  downloadFile(url:string): any {
		return this.http.get("http://localhost:3000/download/"+url, {responseType: 'blob'});
  }
}


@Injectable({
  providedIn: 'root'
})
export class SiteDePlongeeService {

  constructor(private _httpClient : HttpClient, private fileService:FileService) { }

  getSite(): Observable<any>{
      return this._httpClient.get(
        'http://localhost:3000/sites'
      )
  }

  getOneSite(id:any): Observable<any>{
    return this._httpClient.get(
      "http://localhost:3000/site/"+id 
    )
  }

  
  postCreateUtilisateur(myForm : any)
  {
    this._httpClient.post('http://localhost:3000/createUtilisateur', myForm)
    .subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

  postUpdateUtilisateur(myForm2 : any)
  {
    this._httpClient.post('http://localhost:3000/updateUtilisateur', myForm2)
    .subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

  downloadPlan(name:string){

    this.fileService.downloadFile('plan/'+ name).subscribe((response: any) => { //when you use stricter type checking
			let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
			const url = window.URL.createObjectURL(blob);
			//window.open(url);
			//window.location.href = response.url;
			fileSaver.saveAs(blob, name);
		
		}), (error: any) => console.log('Error downloading the file'), 
                 () => console.info('File downloaded successfully');
  }

}
