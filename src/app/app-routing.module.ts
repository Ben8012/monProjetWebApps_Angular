import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { CarnetComponent } from './carnet/carnet.component';
import { ChoixFormationComponent } from './choix-formation/choix-formation.component';
import { ChoixSpecialiteeComponent } from './choix-specialitee/choix-specialitee.component';
import { FormCarnetComponent } from './form-carnet/form-carnet.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { FormModificationComponent } from './form-modification/form-modification.component';
import { FormUpdateCarnetComponent } from './form-update-carnet/form-update-carnet.component';
import { FormUpdateInscriptionComponent } from './form-update-inscription/form-update-inscription.component';
import { FormationComponent } from './formation/formation.component';
import { HomeComponent } from './home/home.component';
import { InfosCarrieresComponent } from './infos-carrieres/infos-carrieres.component';
import { InfosFormationComponent } from './infos-formation/infos-formation.component';
import { InfosSpecialiteComponent } from './infos-specialite/infos-specialite.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ResolverCalendarEventService } from './shared/api/reslover-calendar-event.service';
import { ResolverChoixFormationService } from './shared/api/resolver-choix-formation.service';
import { ResolverChoixSpecialiteeService } from './shared/api/resolver-choix-specialitee.service';
import { ResolverGetListEventService } from './shared/api/resolver-get-list-event.service';
import { ResolverInfosCarrieresService } from './shared/api/resolver-infos-carrieres.service';
import { ResolverInfosSpecialiteService } from './shared/api/resolver-infos-specialite.service';
import { ResolverInfosFormationService } from './shared/api/resolver-infos_formation.service';
import { ResolverProfileService } from './shared/api/resolver-profile.service';
import { ResolverUpdateCarnetService } from './shared/api/resolver-update_carnet.service';
import { SitePlongeeComponent } from './site-plongee/site-plongee.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { SuperAdminGuard } from './auth/super-admin.guard';

const routes: Routes = [
  { path : '', component: HomeComponent, pathMatch : 'full'},

  { path:'app-home', component: HomeComponent},

  { path:'app-login/app-form-inscription', component: FormInscriptionComponent},

  { path:'app-profile/:id/app-form-modification/:id',
   resolve :{
              datas: ResolverProfileService
    },
    component: FormModificationComponent },

  { path :'app-site-plongee/app-infos-carrieres/:id', resolve : 
    {
      datas : ResolverInfosCarrieresService
    }, component: InfosCarrieresComponent},

  { path:'app-site-plongee', component: SitePlongeeComponent},
  { path:'app-infos-carrieres', component: InfosCarrieresComponent},
  { path:'app-login', component: LoginComponent},
  
  { path:'app-agenda',resolve :
    {
    datas1 : ResolverCalendarEventService,
    dates2 : ResolverProfileService,
    data : ResolverGetListEventService
    },  component: AgendaComponent},

  { path:'app-formation', component: FormationComponent},

  { path:'app-formation/app-infos-formation/:id',resolve :
    {
      datas: ResolverInfosFormationService
    }, component: InfosFormationComponent },

  { path:'app-formation/app-infos-specialite/:id', resolve:
    {
    datas:ResolverInfosSpecialiteService
    }, component: InfosSpecialiteComponent },

  { path:'app-carnet/:id', component: CarnetComponent, canActivate: [AuthGuard]},

  { path:'app-carnet/:id/app-form-carnet', component: FormCarnetComponent, canActivate: [AuthGuard]},

  { path :'app-carnet/:id/app-infos-carrieres/:id', canActivate: [AuthGuard], resolve :
    {
     datas : ResolverInfosCarrieresService
    }, component: InfosCarrieresComponent},

  { path : 'app-carnet/:id/app-form-update-carnet/:id', canActivate: [AuthGuard], resolve : 
    {
      datas: ResolverUpdateCarnetService
    }, component:FormUpdateCarnetComponent},

  { path : 'app-login/app-form-update-inscription',component: FormUpdateInscriptionComponent, canActivate: [AuthGuard]},

  { path : 'app-formation/app-infos-formation/:id/app-choix-formation/:nom',resolve : 
    {
      datas: ResolverChoixFormationService
    },component: ChoixFormationComponent , canActivate: [AuthGuard]},

  { path : 'app-formation/app-infos-specialite/:id/app-choix-specialitee/:nom',resolve :  
    {
      datas: ResolverChoixSpecialiteeService
    },component: ChoixSpecialiteeComponent , canActivate: [AuthGuard]},

  { path : 'app-profile/:id', resolve :
    {
      datas: ResolverProfileService
    },component:ProfileComponent , canActivate: [AuthGuard]},

  { path : 'app-all-users', component: AllUsersComponent,  canActivate: [SuperAdminGuard]},

  { path : 'app-agenda/app-login', component: LoginComponent},
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
