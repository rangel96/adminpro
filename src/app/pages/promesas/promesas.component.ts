import { Component, OnInit } from '@angular/core';
import {resolve} from 'url';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const promesa = new Promise((resolve, reject) => {
      if (true){
        resolve("Hola mundo");
      }else {
        reject('Algo salio ml');
      }
    });

    promesa.then(
      (mensaje)=>{
        console.log(mensaje);
      })
      .catch((error)=> {console.log(error);});

    console.log("xd");
  }

}
