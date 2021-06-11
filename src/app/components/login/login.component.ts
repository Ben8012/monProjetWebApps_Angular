import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SiteDePlongeeService } from '../../shared/api/api.service';
declare var $ : any;


@Component({
  selector: 'app-login',
  styleUrls: ['login.component.scss'],
  templateUrl: './login.component.html',
  
  
})
export class LoginComponent implements OnInit {

  myForm3 : any
 
  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder, private router:Router) {

  }

  ngOnInit(): void {
    this.myForm3 = this.formBuilder.group({
      
      login : ["@gmail.com", [Validators.required,Validators.email, Validators.minLength(8)]],   
      password : ["0000", [Validators.required,Validators.minLength(4)]] 
    })
   
    $('[data-toggle="popover"]').popover();
  }

  onSubmit()
  {
    if(this.myForm3.valid)
    {
      this.apiService.postLogin(this.myForm3.value)
    }
    this.router.navigate(['/app-formation'])
  }
 


}
