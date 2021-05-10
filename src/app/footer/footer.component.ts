import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goFb(){
    window.open("https://www.facebook.com/groups/342660476729885");
  }

}
