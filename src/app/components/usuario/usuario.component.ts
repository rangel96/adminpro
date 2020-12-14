import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuariosService } from '../../services/usuarios.service';
import { MyValidation } from '../../auth/register/register.validator';
import { UsuarioI } from '../../interfaces/usuarios';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  //  ---------- PROPIEDADES EL FORMS ---------- //
  createFormGroup() {
    return new FormGroup(
      {
        nombre: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email], []),
        password: new FormControl('', Validators.required),
        password2: new FormControl('', Validators.required),
        imagen: new FormControl('usuario.imagen', Validators.required),
      },
      {
        validators: MyValidation.ValidarPassword,
        // asyncValidators: MyValidation.ValidarEmail
      }
    );
  }

  ///  ---------- VARIABLES ---------- //
  editUserForm: FormGroup;
  usuario: UsuarioI;

  ///  ---------- CONSTRUCTOR ---------- //
  constructor(private usuarioSvc: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.editUserForm = this.createFormGroup();

    this.activatedRoute.params.subscribe((params) => {// Obtener el id de la URL INICIO

      this.usuarioSvc.getUserId(params['id']).subscribe((user:any) => {// Buscar el usuario por id INICIO
             if (user.status) {
               this.usuario = user.data;
               console.log('usuario buscado por el id en params');
               console.log(this.usuario);
             } else {
               // Mandar mensaje de error y regresar a la pagina anterior
             }
           });

    });// Buscar el usuario por id FIN

  }// Obtener el id de la URL FIN

  ngOnInit(): void {
  }

  //  ---------- VALIDADORES ---------- //
  validarPassword(): boolean {
    return this.editUserForm.hasError('noSonIguales') &&
      this.editUserForm.get('password').dirty &&
      this.editUserForm.get('password2').dirty;
  }

  validarCorreo() {
  }

  //  ---------- MÉTODOS ---------- //

  getImagen() {
    const imagenNueva = this.editUserForm.get('imagen').value;
    console.log(imagenNueva);
    return imagenNueva;
  }

  cancelar() {
    this.router.navigateByUrl('/grid');
  }

  //  ---------- MÉTODOS SERVICE ---------- //
  editarUsuario() {
    console.log(this.editUserForm.value);
    /*
    this.usuarioSvc.updateUser(usuario).subscribe((res) => {
      if (res.status) {


      } else {

      }
    });
    */
  }

  eliminarUsuario() {
    console.log(this.editUserForm.value);
    /*
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        this.usuarioSvc.deleteUser(this.usuario.idUsuario).subscribe((res) => {
      if (res.status) {

      }
      else {

      }
      }



    });
    */
  }

}
