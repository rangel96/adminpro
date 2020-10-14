import {Component} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['/src/assets/css/pages/progressbar-page.css']
})
export class ProgressComponent {
  progress1: number = 25;
  progress2: number = 25;

  get getPorcentaje1() {
    return `${this.progress1}%`;
  }

  get getPorcentaje2() {
    return `${this.progress2}%`;
  }

  /*otherMethod(value: number){
    // tslint:disable-next-line:triple-equals
    if (value == 1){
      value = this.getPorcentaje1;
    }
  }*/

}
