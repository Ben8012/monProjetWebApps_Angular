import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html'
})
export class FormInscriptionComponent implements OnInit {

  myForm : any
  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder) {

  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      
        createNomUtilsateur : ["Benji", [Validators.required]],   
        createPrenomUtilsateur : ["Tata", [Validators.required]], 
        createEmailUtilsateur : ["tata@mail.com", [Validators.required]], 
        createPasswordlUtilsateur : ["test1234", [Validators.required]], 
        createRuelUtilsateur : ["du sexe", [Validators.required]], 
        createNumerolUtilsateur : ["45", [Validators.required]],
        createVillelUtilsateur : ["bxl", [Validators.required]], 
        createPayslUtilsateur : ["bel", [Validators.required]],  
        createCodePostalUtilsateur : ["6100", [Validators.required]], 
        createDateDeNaissanceUtilsateur : ["01-06-1991", [Validators.required]], 
        createLieuDeNaissanceUtilsateur : ["la louière", [Validators.required]],
        createNumeroPadiUtilsateur : ["13245678", [Validators.required]],
        createNiveauActuelUtilsateur : ["0", [Validators.required]], 
        createNomAssurancelUtilsateur : ["Tarlouze.com", [Validators.required]],   
        createNumeroAssurancelUtilsateur : ["4242", [Validators.required]]   
              
    })
  }

  onSubmit()
  {
    if(this.myForm.valid)
    {
      this.apiService.postCreateUtilisateur(this.myForm.value)
    }
  }



}
