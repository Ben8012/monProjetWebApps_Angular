import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import { Data } from '@angular/router';
import { Carnets, EventsPlongee } from './class.service';
import { UserSessionService } from './user-session.service';

@Injectable({
  providedIn: 'root'
})
export class SiteDePlongeeService {

  constructor(private _httpClient : HttpClient, 
    private userSessionService : UserSessionService) { }

//Les GET

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

  getFormation(): Observable<any>{
    return this._httpClient.get(
      'http://localhost:3000/formations'
    )
  }

  getOneFormation(id:any): Observable<any>{
    return this._httpClient.get(
      "http://localhost:3000/formation/"+id
    ) 
  }

  getSpeciality():Observable<any>{
    return this._httpClient.get(
      'http://localhost:3000/speciality'
    )
  }

  getOneSpeciality(id:any): Observable<any>{
    return this._httpClient.get(
      "http://localhost:3000/speciality/"+id
    ) 
  }

  getCarnet():Observable<any>{
    return this._httpClient.get(
      'http://localhost:3000/carnets'
    )
  }

  getOneCarnet(id:any): Observable<any>{
    return this._httpClient.get(
      "http://localhost:3000/carnet/"+id
    ) 
  }

  getOneProfile(id:any): Observable<any>{
    return this._httpClient.get(
      "http://localhost:3000/user/infos/"+id
    ) 
  }

  getEvent():Observable<any>{
    return this._httpClient.get(
      'http://localhost:3000/events'
    )
  }

  getEventByTitle(title:any):Observable<any>{
    return this._httpClient.get(
      'http://localhost:3000/events/title/'+title
    )
  }

  getEventBySpeciality(speciality:any):Observable<any>{
    return this._httpClient.get(
      'http://localhost:3000/events/speciality/'+speciality
    )
  }


//les POST
  
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
    this._httpClient.post('http://localhost:3000/user/update', myForm2)
    .subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

  deleteUtilisateur(id: any)
  {
    console.log(id)
      this._httpClient.delete(
        `http://localhost:3000/user/delete/${id}`)
        .subscribe(
        (data) => {
          console.log(data)
        }
      )
  }


  postLogin(myForm3 : any)
  {
     this._httpClient.post(
      "http://localhost:3000/user/login/",myForm3)
      .subscribe(
        (data: any) => {
          this.userSessionService.saveSession(data.token)
        }
      )
  }

  postCreateEvent(event : any)
  {
    event.start=event.start.toISOString().slice(0, 19).replace('T', ' ');
    event.end=event.end.toISOString().slice(0, 19).replace('T', ' ');
    this._httpClient.post(
      "http://localhost:3000/event/",event)
      .subscribe(
        (data) => {
          console.log(data)
        }
      )
  }

  postUpdateEvent(data : any)
  {
    console.log(data)
    this._httpClient.post(
      "http://localhost:3000/update/event/", data)
      .subscribe(
        (data) => {
          console.log(data)
        }
      )
  }

  deleteEvent(id: any)
  {
      this._httpClient.delete(
        `http://localhost:3000/delete/event/${id}`)
        .subscribe(
        (data) => {
          console.log(data)
        }
      )
  }

  postFormCarnet(formCarnet : any)
  {
    this._httpClient.post(
      "http://localhost:3000/carnet/",formCarnet)
      .subscribe(
        (data) => {
          console.log(data)
        }
      )
  }

  

  postMTMCarnetSite(TwoId : any)
  {
    this._httpClient.post(
      "http://localhost:3000/carnet/mtm",TwoId)
      .subscribe(
        (data) => {
          console.log(data)
        }
      )
  }

  postUpdateCarnet(data : Carnets)
  {
    this._httpClient.post(
      "http://localhost:3000/update/carnet", data)
      .subscribe(
        (data) => {
          console.log(data)
        }
      )
  }

  deleteCarnet(id :any){
    this._httpClient.delete(
      `http://localhost:3000/delete/carnet/${id}`)
      .subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

  postEnvoisMail(data :any)
  {
    console.log(data)
    this._httpClient.post('http://localhost:3000/mail/formation', data)
    .subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

}
