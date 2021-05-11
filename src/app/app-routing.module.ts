import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { CarnetComponent } from './carnet/carnet.component';
import { FormCarnetComponent } from './form-carnet/form-carnet.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { FormModificationComponent } from './form-modification/form-modification.component';
import { FormUpdateCarnetComponent } from './form-update-carnet/form-update-carnet.component';
import { FormationComponent } from './formation/formation.component';
import { HomeComponent } from './home/home.component';
import { InfosCarrieresComponent } from './infos-carrieres/infos-carrieres.component';
import { InfosFormationComponent } from './infos-formation/infos-formation.component';
import { InfosSpecialiteComponent } from './infos-specialite/infos-specialite.component';
import { LoginComponent } from './login/login.component';
import { ResolverInfosCarrieresService } from './shared/api/resolver-infos-carrieres.service';
import { ResolverInfosSpecialiteService } from './shared/api/resolver-infos-specialite.servec';
import { ResolverInfosFormationService } from './shared/api/resolver-infos_formation.service';
import { ResolverUpdateCarnetService } from './shared/api/resolver-update_carnet.service';
import { SitePlongeeComponent } from './site-plongee/site-plongee.component';

const routes: Routes = [
  {path : '', component: HomeComponent, pathMatch : 'full'},
  { path:'app-home', component: HomeComponent},
  { path:'app-login/app-form-inscription', component: FormInscriptionComponent},
  { path:'app-form-modification', component: FormModificationComponent },
  { path :'app-site-plongee/app-infos-carrieres/:id', resolve : {datas : ResolverInfosCarrieresService} , component: InfosCarrieresComponent},
  { path:'app-site-plongee', component: SitePlongeeComponent},
  { path:'app-infos-carrieres', component: InfosCarrieresComponent},
  { path:'app-login', component: LoginComponent},
  { path:'app-agenda', component: AgendaComponent},
  { path:'app-formation', component: FormationComponent},
  { path:'app-formation/app-infos-formation/:id',resolve :{datas: ResolverInfosFormationService}, component: InfosFormationComponent},
  { path:'app-formation/app-infos-specialite/:id', resolve:{datas:ResolverInfosSpecialiteService}, component: InfosSpecialiteComponent},
  { path:'app-carnet', component: CarnetComponent},
  { path:'app-carnet/app-form-carnet', component: FormCarnetComponent},
  { path :'app-carnet/app-infos-carrieres/:id', resolve : {datas : ResolverInfosCarrieresService} , component: InfosCarrieresComponent},
  { path : 'app-carnet/app-form-update-carnet/:id', resolve : {datas: ResolverUpdateCarnetService}, component:FormUpdateCarnetComponent}
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
