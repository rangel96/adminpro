import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioI } from '../../interfaces/usuarios';
import { Router } from '@angular/router';

declare const gapi: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  //  ---------- VARIABLES ---------- //
  menuItems: any [];
  usuario: UsuarioI = this.usuarioSvc.usuario;

  ///  ---------- CONSTRUCTOR ---------- //
  constructor(private sidebarService: SidebarService, private usuarioSvc: UsuariosService, private router: Router) {
    this.menuItems = sidebarService.menu;
    this.obtenerDatos();
  }

  ngOnInit(): void {
  }

  //  ---------- MÉTODOS ---------- //
  obtenerDatos() {
    if (!this.usuario) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }
  }

  logout() {
    // Mensaje de reguridad

    // Function signOut
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log('User signed out.');
    });

    // Limpia la memoria cache
    localStorage.clear();

    // Limpiar el valor de usuario de service
    this.usuarioSvc.usuario = null;

  }
}
