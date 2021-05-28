import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';

@Component({
  selector: 'app-form-modification',
  templateUrl: './form-modification.component.html'
})
export class FormModificationComponent implements OnInit {

  myForm2 : any
  OneProfile: any
  id : any

  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder, public router :Router,private route: ActivatedRoute,private http: HttpClient,) 
  {
    this.OneProfile = this.route.snapshot.data["datas"]
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.myForm2 = this.formBuilder.group({
        updateNomUtilsateur : [this.OneProfile[0].nom, ],   
        updatePrenomUtilsateur : [this.OneProfile[0].prenom, ], 
        updateEmailUtilsateur : [this.OneProfile[0].email,], 
        updatePasswordlUtilsateur : [this.OneProfile[0].mot_de_passe,], 
        updateRuelUtilsateur : [this.OneProfile[0].rue, ], 
        updateNumerolUtilsateur : [this.OneProfile[0].numero, ],
        updateVillelUtilsateur : [this.OneProfile[0].ville, ], 
        updatePayslUtilsateur : [this.OneProfile[0].pays, ],  
        updateCodePostalUtilsateur : [this.OneProfile[0].code_postal, ], 
        updateDateDeNaissanceUtilsateur : [this.OneProfile[0].date_de_naissance, ], 
        updateLieuDeNaissanceUtilsateur : [this.OneProfile[0].lieu, ],
        updateNumeroPadiUtilsateur : [this.OneProfile[0].numero_padi, ],
        updateNiveauActuelUtilsateur : [this.OneProfile[0].niveau, ], 
        updateNomAssurancelUtilsateur : [this.OneProfile[0].nom_assurance, ],   
        updateNumeroAssurancelUtilsateur : [this.OneProfile[0].numero_assurance, ]   
              
    })
  }

  onSubmit()
  {
    if(this.myForm2.valid)
    {
      this.myForm2.value.id = this.OneProfile[0].id
      this.apiService.postUpdateUtilisateur(this.myForm2.value)
      this.router.navigate(['app-profile/'+this.OneProfile[0].id])
    }
  }

}
