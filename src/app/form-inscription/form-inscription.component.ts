import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';

@Component({
  selector: 'app-form-inscription',
  styleUrls: ['form-inscription.component.scss'],
  templateUrl: './form-inscription.component.html'
})
export class FormInscriptionComponent implements OnInit {

  myForm : any
  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder, private router:Router) {

  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      
        createNomUtilsateur : ["", [Validators.required]],   
        createPrenomUtilsateur : ["", [Validators.required]], 
        createEmailUtilsateur : ["@gmail.com", [Validators.required, Validators.email, Validators.minLength(8)]], 
        createPasswordlUtilsateur : ["", [Validators.required, Validators.minLength(4)]], 
        createRuelUtilsateur : ["de la croix", [Validators.required]], 
        createNumerolUtilsateur : ["7", [Validators.required]],
        createVillelUtilsateur : ["Magique Ville", [Validators.required]], 
        createPayslUtilsateur : ["Belgique", [Validators.required]],  
        createCodePostalUtilsateur : ["009", [Validators.required]], 
        createDateDeNaissanceUtilsateur : ["1980-12-10", [Validators.required]], 
        createLieuDeNaissanceUtilsateur : ["Magique Ville", [Validators.required]],
        createNumeroPadiUtilsateur : ["454519", [Validators.required]],
        createNiveauActuelUtilsateur : ["", [Validators.required]], 
        createNomAssurancelUtilsateur : ["DAN", [Validators.required]],   
        createNumeroAssurancelUtilsateur : ["80808", [Validators.required]]   
              
    },
    {
      //validators : customValidatorsPourMotDePasseParExemple
    })

    //console.log(this.myForm)
  }

  onSubmit()
  {
    if(this.myForm.valid)
    {
      this.apiService.postCreateUtilisateur(this.myForm.value)
      this.router.navigate(['/app-formation'])
    }
  }



}
