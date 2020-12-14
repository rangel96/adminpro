import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { UsuarioI } from '../../interfaces/usuarios';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styles: [
  ]
})
export class HeadbarComponent implements OnInit {
  // Variables
  usuario: UsuarioI = JSON.parse(localStorage.getItem('usuario'));




  constructor(private usuarioSvc: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  logout() {
    // Mensaje de reguridad

    // Limpia la memoria cache
    localStorage.clear();

    // Limpiar el valor de usuario de service
    this.usuarioSvc.usuario = null;

    // Regresalo a login
    this.router.navigateByUrl('/login');

  }

  obtenerDatos(){
    if (!this.usuario){
      this.usuario = this.usuarioSvc.usuario;
    }
  }

}
