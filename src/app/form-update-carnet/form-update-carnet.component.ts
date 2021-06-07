import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SiteDePlongeeService} from '../shared/api/site-de-plongee.service';
import {  Carnets, SiteDePlongee } from '../shared/api/class.service';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { DateUtils } from '../utils/date.utils';
import { UserSessionService } from '../shared/api/user-session.service';

@Component({
  selector: 'app-form-update-carnet',
  templateUrl: './form-update-carnet.component.html',
  
})
export class FormUpdateCarnetComponent implements OnInit {

  formUpdateCarnet : any
  sites: SiteDePlongee[]=[]
  deco: boolean=false
  OneCarnet!:Carnets
  user:any

  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder, private route:ActivatedRoute,private siteDePlongeeService:SiteDePlongeeService, private router : Router , private userSessionService : UserSessionService) 
  {
    this.OneCarnet = this.route.snapshot.data['datas']
   }

  ngOnInit(): void {
    this.user = this.userSessionService.user

    let date = new Date(this.OneCarnet.date);
    let format = DateUtils.format(date);
    this.formUpdateCarnet = this.formBuilder.group({
    
      nom : [this.OneCarnet.nom, [Validators.required]], 
      lieux : [this.OneCarnet.siteId, [Validators.required]], 
      duree : [this.OneCarnet.duree, [Validators.required]],  
      profondeur : [this.OneCarnet.profondeur, [Validators.required]], 
      temperature_air : [this.OneCarnet.temperature_air],  
      temperature_eau : [this.OneCarnet.temperature_eau], 
      deco : [this.OneCarnet.deco,], 
      type_plongee : [this.OneCarnet.type_plongee, [Validators.required]], 
      palier : [this.OneCarnet.palier],
      info : [this.OneCarnet.info], 
      date : [format, [Validators.required]],  
      userId : this.OneCarnet.userId
    })

    this.getSiteDePlongee()
    
  }

  onSubmit()
  {
    if(this.formUpdateCarnet.valid)
    {
      this.formUpdateCarnet.value.id = this.OneCarnet.carnetId
      this.apiService.postUpdateCarnet(this.formUpdateCarnet.value) 
      this.router.navigate(['/app-carnet/'+ this.OneCarnet.userId])
    }
  }

  getSiteDePlongee(){
    this.siteDePlongeeService.getSite()
    .subscribe(
      sites =>{
        this.sites = sites
      }
    )
  }

}
