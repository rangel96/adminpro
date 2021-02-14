import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioI, UsuarioTokenI } from '../../interfaces/usuarios';
import { Router } from '@angular/router';
import { Usuario } from '../../../model/usuario';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  public users: UsuarioI[];
  public title: string;

  constructor(private usuariosSvc: UsuariosService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.usuariosSvc.getAllUsers().subscribe((result: any) => {
      if (result.status) {
        this.users = result.data.usuario;
        this.title = result.msg;
      }
      else {
        // Mensaje de fallido
        Swal.fire({
          icon: 'warning',
          title: 'Oops... Revisar el servidor',
          text: 'No se puede obtener la lista de usuarios',
          showConfirmButton: false,
          timer: 1000
        });
        this.router.navigateByUrl('/login');
      }
    });
  }

  getUser(id: number) {
    this.usuariosSvc.getUserId(id).subscribe((usuarioResult: any) => {
      if (usuarioResult.status) {
        this.router.navigate(['/usuario', id]);
      }
      else {
        // Mensaje de fallido
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'No se puede obtener los datos del usuario',
          showConfirmButton: false,
          timer: 1000
        });
      }
    }); // Fin Subscribe
  } // Fin del metodo GetUser

  eliminarUsuario(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuariosSvc.deleteUser(id).subscribe(usuarioResult => { // Subscribe Start
          if (usuarioResult.status) {
            this.getAllUsers();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              showConfirmButton: false,
              timer: 700
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `Something went wrong! Try again.
                      Or server error`,
              showConfirmButton: false,
              timer: 700
            });
          }
        });// Subscribe end
      }
    });

  }
}
