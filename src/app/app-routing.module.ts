import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { CarnetComponent } from './components/carnet/carnet.component';
import { ChoixFormationComponent } from './components/choix-formation/choix-formation.component';
import { ChoixSpecialiteeComponent } from './components/choix-specialitee/choix-specialitee.component';
import { FormCarnetComponent } from './components/form-carnet/form-carnet.component';
import { FormInscriptionComponent } from './components/form-inscription/form-inscription.component';
import { FormUpdateInscriptionComponent } from './components/form-update-inscription/form-update-inscription.component';
import { FormUpdateCarnetComponent } from './components/form-update-carnet/form-update-carnet.component';
import { FormationComponent } from './components/formation/formation.component';
import { HomeComponent } from './components/home/home.component';
import { InfosCarrieresComponent } from './components/infos-carrieres/infos-carrieres.component';
import { InfosFormationComponent } from './components/infos-formation/infos-formation.component';
import { InfosSpecialiteComponent } from './components/infos-specialite/infos-specialite.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResolverCalendarEventService } from './shared/resolvers/reslover-calendar-event.service';
import { ResolverChoixFormationService } from './shared/resolvers/resolver-choix-formation.service';
import { ResolverChoixSpecialiteeService } from './shared/resolvers/resolver-choix-specialitee.service';
import { ResolverGetListEventService } from './shared/resolvers/resolver-get-list-event.service';
import { ResolverInfosCarrieresService } from './shared/resolvers/resolver-infos-carrieres.service';
import { ResolverInfosSpecialiteService } from './shared/resolvers/resolver-infos-specialite.service';
import { ResolverInfosFormationService } from './shared/resolvers/resolver-infos_formation.service';
import { ResolverProfileService } from './shared/resolvers/resolver-profile.service';
import { ResolverUpdateCarnetService } from './shared/resolvers/resolver-update_carnet.service';
import { SitePlongeeComponent } from './components/site-plongee/site-plongee.component';
import { AuthGuardService as AuthGuard } from './shared/auth/auth-guard.service';
import { SuperAdminGuard } from './shared/auth/super-admin.guard';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { ValidatePasswordComponent } from './components/validate-password/validate-password.component';

const routes: Routes = [
  { path : '', component: HomeComponent, pathMatch : 'full'},

  { path:'app-home', component: HomeComponent},

  { path:'app-login/app-form-inscription', component: FormInscriptionComponent},

  { path:'app-profile/:id/app-form-update-inscription/:id',
   resolve :{
              datas: ResolverProfileService
    },
    component: FormUpdateInscriptionComponent },

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
  
  { path :'app-login/app-new-password', component: NewPasswordComponent},

  { path:'app-validate-password', component: ValidatePasswordComponent},

  { path :'app-validate-password/app-login', component: LoginComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
