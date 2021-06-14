import { Component, OnInit } from '@angular/core';
import { SiteDePlongeeService } from '../api/api.service';

@Component({
  selector: 'app-validate-password',
  templateUrl: './validate-password.component.html'
  
})
export class ValidatePasswordComponent implements OnInit {

newPassword=[]
  constructor(private apiService : SiteDePlongeeService) { }

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('formNewpassword')??''))
    this.newPassword=JSON.parse(localStorage.getItem('formNewpassword')??'')
    this.apiService.postNewPasswordOK(this.newPassword)
   
  }

}
