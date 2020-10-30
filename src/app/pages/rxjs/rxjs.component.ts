import {Component, OnInit} from '@angular/core';
import {observable, Observable} from 'rxjs';
import {retry} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent {

  constructor() {
    let i = -1;
    const ob$ = new Observable(observable => {
      const intervalo = setInterval(() => {
        i++;
        observable.next(i);

        if (i === 2) {
          console.log("Error")
          observable.error("es 2");
        }

        if (i === 4) {
          clearInterval(intervalo);
          observable.complete();
        }
      }, 500);
    });

    ob$.pipe(retry(2)).subscribe((valor) => {
      console.log('No. ', valor);
    },
      (error => {
        console.log("Ocurrió un error");
      }),
      () => {
      console.log("Proceso terminado");
      });
  }
}
