import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../shared/api/class.service';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
 
})
export class AllUsersComponent implements OnInit {

  allUsers:UserInfo[]=[]
  isAdmin : boolean =false
  

  constructor(private siteDePlongeeService:SiteDePlongeeService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.siteDePlongeeService.getUsers()
    .subscribe(
      allUsers =>{
        this.allUsers = allUsers;
      }
    )
  }

  postDroitAdmin(userId : any){
    this.isAdmin=!this.isAdmin
    let datas = new Array (this.isAdmin,userId) 
    this.siteDePlongeeService.postDroitAdmin(datas)
    this.getUsers()
  }

  deleteUser(id: number){
    this.siteDePlongeeService.deleteUtilisateur(id)
  }
}
