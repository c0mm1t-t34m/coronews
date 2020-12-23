import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
    }
    else{
      document.body.setAttribute('color-theme','light');
    }
  }

}
