import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [{
    titulo: 'Main',
    icono: 'mdi mdi-guage',
    submenu: [
      {titulo: 'Main2', url: '/'},
      {titulo: 'ProgressBar', url: '/progress'},
      {titulo: 'Graphics', url: '/graphic1'},
      // {titulo: 'Main', url: '/'},

    ]
  }];

  constructor() { }
}
