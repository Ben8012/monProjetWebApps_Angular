import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';

@Component({
  selector: 'app-form-modification',
  templateUrl: './form-modification.component.html'
})
export class FormModificationComponent implements OnInit {

  myForm2 : any
  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder) {

  }

  ngOnInit(): void {
    this.myForm2 = this.formBuilder.group({
        AncienNomUtilsateur : ["",],
        updateNomUtilsateur : ["Benji", ],   
        updatePrenomUtilsateur : ["Tata", ], 
        updateEmailUtilsateur : ["tata@mail.com",], 
        updatePasswordlUtilsateur : ["test1234", ], 
        updateRuelUtilsateur : ["du sexe", ], 
        updateNumerolUtilsateur : ["45", ],
        updateVillelUtilsateur : ["bxl", ], 
        updatePayslUtilsateur : ["bel", ],  
        updateCodePostalUtilsateur : ["6100", ], 
        updateDateDeNaissanceUtilsateur : ["01-06-1991", ], 
        updateLieuDeNaissanceUtilsateur : ["la louière", ],
        updateNumeroPadiUtilsateur : ["13245678", ],
        updateNiveauActuelUtilsateur : ["0", ], 
        updateNomAssurancelUtilsateur : ["Tarlouze.com", ],   
        updateNumeroAssurancelUtilsateur : ["4242", ]   
              
    })
  }

  onSubmit()
  {
    if(this.myForm2.valid)
    {
      console.log(this.myForm2)
      this.apiService.postUpdateUtilisateur(this.myForm2.value)
    }
  }

}
