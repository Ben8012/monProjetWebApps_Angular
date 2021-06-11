import { Component, OnInit } from '@angular/core';
import  { VgApiService }  from  '@videogular/ngx-videogular/core';
import { VgPlayerComponent } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public preload : string = 'auto' 
  public api !: VgApiService 
  
 

  constructor() { }

  ngOnInit(): void {
    this.onPlayerReady
  }

  onPlayerReady(api: VgApiService) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.ended.subscribe(
        () => {
            // Set the video to the beginning
            this.api.getDefaultMedia().currentTime = 0;
        }
    );
  }

  
}
