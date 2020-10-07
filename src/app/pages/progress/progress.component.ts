import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['/src/assets/css/pages/progressbar-page.css']
})
export class ProgressComponent {
  progress: number = 50;

  get getPorcentaje(){
    return `${this.progress}%`;
  }

}
