import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import { Data } from '@angular/router';

export class Carnets{
  nom:string;
  lieux:string; 
  duree:number;
  profondeur:number;
  temperature_air:number;
  temperature_eau:number;
  deco:boolean;
  type_plongee:string;
  palier:string;
  info:string;
  date:Date;
  carnetID: string;

  constructor(data : any)
  {
  this.nom = data.nom;
  this.lieux= data.lieux; 
  this.duree = data.duree;
  this.profondeur = data.profondeur;
  this.temperature_air = data.temperature_air;
  this.temperature_eau = data.temperature_eau;
  this.deco = data.deco;
  this.type_plongee = data.type_plongee;
  this.palier = data.palier;
  this.info = data.info;
  this.date = data.date;
  this.carnetID = data.carnetID;
  }
}

export class UserInfo
{
  nom:string;
  prenom:string;
  email:string;
  date_de_naissance:Date;
  lieux_de_naissance:string;
  rue:string;
  numero:number;
  code_postal:number;
  ville:string;
  pays:string;
  niveau: string;
  numero_padi:number;
  nom_assurance:string;
  numero_assurance:string;

  constructor(data : any)
  {
    this.nom = data.nom;
    this.prenom = data.prenom;
    this.email = data.email;
    this.date_de_naissance = data.date_de_naissance;
    this.lieux_de_naissance = data.lieux_de_naissance;
    this.rue = data.rue;
    this.numero = data.numero;
    this.code_postal = data.code_postal;
    this.ville = data.ville;
    this.pays = data.pays;
    this.niveau = data.niveau;
    this.numero_padi = data.numero_padi;
    this.nom_assurance = data.nom_assurance;
    this.numero_assurance = data.numero_assurance;
  }
}

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

export class Formations{
  id: number;
  nom: string;
  duree: string;
  prix: number;
  prerequi: number;
  materiel: string;
  image: string;
  intro: string;
  infos: string;
  lieux: string;
  inclus: string;
  non_inclus: string;
  photo1:string;
  photo2: string;
  photo3: string;
  video:string;
  id_facture: number;

  constructor(data: any)
  {
      this.id = data.id;
      this.nom = data.nom;
      this.duree = data.duree;
      this.prix = data.prix;
      this.prerequi = data.prerequi;
      this.materiel = data.materiel;
      this.image = data.image;
      this.intro =data.intro;
      this.infos = data.infos;
      this.lieux = data.lieux;
      this.inclus = data.inclus;
      this.non_inclus = data.non_inclus;
      this.photo1 = data.photo1;
      this.photo2 = data.photo2;
      this.photo3 = data.photo3;
      this.video = data.video;
      this.id_facture = data.id_facture;      
  }
}

export class Speciality{
  id: number;
  nom: string;
  duree: string;
  prix: number;
  prerequi: number;
  materiel: string;
  image: string;
  intro: string;
  infos: string;
  lieux: string;
  inclus: string;
  non_inclus: string;
  photo1:string;
  photo2: string;
  photo3: string;
  video:string;
  id_facture: number;

  constructor(data: any)
  {
      this.id = data.id;
      this.nom = data.nom;
      this.duree = data.duree;
      this.prix = data.prix;
      this.prerequi = data.prerequi;
      this.materiel = data.materiel;
      this.image = data.image;
      this.intro =data.intro;
      this.infos = data.infos;
      this.lieux = data.lieux;
      this.inclus = data.inclus;
      this.non_inclus = data.non_inclus;
      this.photo1 = data.photo1;
      this.photo2 = data.photo2;
      this.photo3 = data.photo3;
      this.video = data.video;
      this.id_facture = data.id_facture;      
  }
}


@Injectable({
  providedIn: 'root'
})
export class SiteDePlongeeService {

  constructor(private _httpClient : HttpClient) { }

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

  // getInfoUser(): Observable<any>{
  //   return this._httpClient.get(
  //     "http://localhost:3000/user/infos"
  //   ) 
  // }


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
    this._httpClient.post('http://localhost:3000/updateUtilisateur', myForm2)
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
        (data) => {
          console.log(data)
        }
      )
  }

  postCreateEvent(event : any)
  {
    this._httpClient.post(
      "http://localhost:3000/event/",event)
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

  deleteCarnet(id :any){
    this._httpClient.delete(
      `http://localhost:3000/delete/carnet/${id}`)
      .subscribe(
      (data) => {
        console.log(data)
      }
    )
  }


}