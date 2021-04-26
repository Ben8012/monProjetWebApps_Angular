import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SiteDePlongee, SiteDePlongeeService } from '../shared/api/site-de-plongee.service'
import { environment } from '../../environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { FileService } from './file.service';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-infos-carrieres',
  templateUrl: './infos-carrieres.component.html',
  
})
export class InfosCarrieresComponent implements OnInit {

  public OneSiteDePlongee!:SiteDePlongee
  public env : string = ""
  public id : any 
  plan: any;

  constructor(private siteDePlongeeService:SiteDePlongeeService,private route: ActivatedRoute,private http: HttpClient,private fileService: FileService) {}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.env = environment.sitePlongeeImg
    this.getSiteDePlongee()
    
    
  }

  getSiteDePlongee(){
   
    return this.siteDePlongeeService.getOneSite(this.id)
    .subscribe(
      OneSiteDePlongee =>{
      
        this.OneSiteDePlongee = OneSiteDePlongee    
        console.log (this.OneSiteDePlongee)  
      }
    )   
  }

  downloadPlan() {
    
		this.fileService.downloadFile('plan/'+this.OneSiteDePlongee.plan).subscribe((response: any) => { //when you use stricter type checking
			let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
			const url = window.URL.createObjectURL(blob);
			//window.open(url);
			//window.location.href = response.url;
			fileSaver.saveAs(blob, this.OneSiteDePlongee.plan);
		
		}), (error: any) => console.log('Error downloading the file'), 
                 () => console.info('File downloaded successfully');
  }
}
