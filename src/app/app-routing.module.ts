import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { FormModificationComponent } from './form-modification/form-modification.component';
import { HomeComponent } from './home/home.component';
import { InfosCarrieresComponent } from './infos-carrieres/infos-carrieres.component';
import { SitePlongeeComponent } from './site-plongee/site-plongee.component';

const routes: Routes = [
  {path : '', component: HomeComponent, pathMatch : 'full'},
  { path:'app-home', component: HomeComponent},
  { path:'app-form-inscription', component: FormInscriptionComponent},
  { path:'app-form-modification', component: FormModificationComponent },
  { path :'app-site-plongee/app-infos-carrieres/:id',component: InfosCarrieresComponent},
  { path:'app-site-plongee', component: SitePlongeeComponent},
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
