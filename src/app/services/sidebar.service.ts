import { Injectable } from '@angular/core';
import { UsuarioI } from '../interfaces/usuarios';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  usuario: UsuarioI = this.usuarioSvc.usuario;

  menu: any = [
    {
      titulo: 'Pages',
      icono: 'mdi mdi-guage',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Graphics', url: '/graphic1' },
        { titulo: 'Promesas', url: '/promesas' },
        { titulo: 'Rxjs', url: '/rxjs' },
        // {titulo: 'Main', url: '/'},
      ]
    },
    {
      titulo: 'Entidades',
      icono: 'application icon', //Buscar el icono adecuado para esto xd
      submenu: [
        /*{ titulo: 'Estudiantes', url: '/estudiantes' },
        { titulo: 'Materias', url: '/materias' },
        { titulo: 'Profesores', url: '/profesores' },*/
        { titulo: 'Usuario', url: '/grid' },
        // {titulo: 'Main', url: '/'},
      ]
    }
  ];

  /*entidades: any = [{
    titulo: 'Entidades',
    icono: 'application icon', //Buscar el icono adecuado para esto xd
    submenu: [
      {titulo: 'Estudiantes', url: '/estudiantes'},
      {titulo: 'Materias', url: '/materias'},
      {titulo: 'Profesores', url: '/profesores'},
      // {titulo: 'Main', url: '/'},
    ]
  }];*/


  constructor(private usuarioSvc: UsuariosService) {
  }
}
