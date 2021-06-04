import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';
import { UserInfo} from '../shared/api/class.service'
import { UserSessionService } from '../shared/api/user-session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  
})
export class ProfileComponent implements OnInit {

  public oneProfile : any
  public id : any

  constructor(private siteDePlongeeService:SiteDePlongeeService,private route: ActivatedRoute,private http: HttpClient, public router : ActivatedRoute,private userSessionService : UserSessionService)
  { 
    this.oneProfile = this.router.snapshot.data["datas"]
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    //console.log(this.oneProfile)
  }

  deleteProfile(id : any){
    this.siteDePlongeeService.deleteUtilisateur(id)
    this.userSessionService.clearSession()
    window.location.reload()
  }

}
