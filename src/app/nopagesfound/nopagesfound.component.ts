import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagesfound',
  templateUrl: './nopagesfound.component.html',
  styleUrls: ['/src/assets/css/pages/error-pages.css']
})
export class NopagesfoundComponent {

  constructor() { }
  year = new Date().getFullYear();

}
