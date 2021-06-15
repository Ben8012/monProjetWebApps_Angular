import { Component, OnInit } from '@angular/core';
import { SiteDePlongeeService } from '../../shared/api/api.service';

@Component({
  selector: 'app-validate-password',
  templateUrl: './validate-password.component.html'
  
})
export class ValidatePasswordComponent implements OnInit {

newPassword=[]
  constructor(private apiService : SiteDePlongeeService) { }

  ngOnInit(): void {
    this.newPassword=JSON.parse(localStorage.getItem('formNewpassword')??'')
    this.apiService.postNewPasswordOK(this.newPassword)
   
  }

}
