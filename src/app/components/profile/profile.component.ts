import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { SiteDePlongeeService } from '../../shared/api/api.service';
import { UserInfo} from '../../shared/class/class.service'
import { UserSessionService } from '../../shared/user_session/user-session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  
})
export class ProfileComponent implements OnInit {

  public oneProfile : any
  public id : any
  public demandeAdmin: boolean=false

  constructor(private siteDePlongeeService:SiteDePlongeeService,private route: ActivatedRoute,private http: HttpClient, public router : ActivatedRoute,private userSessionService : UserSessionService)
  { 
    this.oneProfile = this.router.snapshot.data["datas"]
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  deleteProfile(id : any){
    this.siteDePlongeeService.deleteUtilisateur(id)
    this.userSessionService.clearSession()
    window.location.reload()
  }

  postDeamndeDroitAdmin(profil : any){
    profil.demandeAdmin=true
    this.siteDePlongeeService.postDeamndeDroitAdmin(profil)
    alert('un email a été envoyé, votre demande de droit administateur va etre traité sous peu ')
    
  }
}
