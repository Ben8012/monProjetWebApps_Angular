import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteDePlongeeService } from '../../shared/api/api.service';
import { DateUtils} from '../../shared/utils/date.utils'

@Component({
  selector: 'app-form-update-inscription',
  styleUrls: ['form-update-inscription.component.scss'],
  templateUrl: './form-update-inscription.component.html'
})
export class FormUpdateInscriptionComponent implements OnInit {

  myForm2 : any
  OneProfile: any
  id : any

  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder, public router :Router,private route: ActivatedRoute,private http: HttpClient,) 
  {
    this.OneProfile = this.route.snapshot.data["datas"]
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    let date = new Date(this.OneProfile[0].date_de_naissance);
    let format = DateUtils.format(date);

    this.myForm2 = this.formBuilder.group({
        updateNomUtilsateur : [this.OneProfile[0].nom,  [Validators.required]],   
        updatePrenomUtilsateur : [this.OneProfile[0].prenom,  [Validators.required]], 
        updateEmailUtilsateur : [this.OneProfile[0].email,  [Validators.required,Validators.email, Validators.minLength(8)]], 
        updatePasswordlUtilsateur : [,  [Validators.required]], 
        updateRuelUtilsateur : [this.OneProfile[0].rue,  [Validators.required]], 
        updateNumerolUtilsateur : [this.OneProfile[0].numero,  [Validators.required]],
        updateVillelUtilsateur : [this.OneProfile[0].ville,  [Validators.required]], 
        updatePayslUtilsateur : [this.OneProfile[0].pays,  [Validators.required]],  
        updateCodePostalUtilsateur : [this.OneProfile[0].code_postal,  [Validators.required]], 
        updateDateDeNaissanceUtilsateur : [format,  [Validators.required]], 
        updateLieuDeNaissanceUtilsateur : [this.OneProfile[0].lieu_de_naissance,  [Validators.required]],
        updateNumeroPadiUtilsateur : [this.OneProfile[0].numero_padi, ],
        updateNiveauActuelUtilsateur : [this.OneProfile[0].niveau,  [Validators.required]], 
        updateNomAssurancelUtilsateur : [this.OneProfile[0].nom_assurance,  ],   
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
