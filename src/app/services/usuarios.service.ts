import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UsuarioI, UsuarioTokenI } from '../interfaces/usuarios';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { AbstractControl } from '@angular/forms';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  // Informacion que viaja entre paginas
  urlAPI = environment.base_url;
  usuario: UsuarioI; // Perfil del usuario logueado
  // editUsuario: UsuarioI; // Perfil del usuario a editar


  constructor(private http: HttpClient,) {
  }

  // GetAll Obtener todos los usuarios
  getAllUsers(): Observable<UsuarioTokenI> {
    const path = `${this.urlAPI}usuarios`;
    return this.http.get<UsuarioTokenI>(path);
  }

  // GetbyID Obtener un usuario
  getUserId(idUser: number): Observable<UsuarioTokenI> {
    const path = `${this.urlAPI}usuarios/id/${idUser}`;
    return this.http.get<UsuarioTokenI>(path);
  }

  // GetbyEmail Obtener un usuario
  getUserEmail(email: AbstractControl) {
    const path = `${this.urlAPI}auth/reset`;
    return this.http.post(path, { email }); // Sera GET o sera PUT??, con GET marca error :/
  }

  // CreateUser Agregar un usuario
  addUser(newUser: UsuarioI): Observable<UsuarioTokenI> {
    const path = `${this.urlAPI}usuarios`;
    return this.http.post<UsuarioTokenI>(path, newUser);
  }

  // UpdateUser Editar usuario
  updateUser(user: UsuarioI): Observable<UsuarioTokenI> {
    const path = `${this.urlAPI}usuarios/${user.idUsuario}`;
    return this.http.put<UsuarioTokenI>(path, user);
  }

  // DeleteUser Elimina el usuario
  deleteUser(idUser: number): Observable<UsuarioTokenI> {
    const path = `${this.urlAPI}usuarios/${idUser}`;
    return this.http.delete<UsuarioTokenI>(path);
  }

  // Login native
  login(userLogin: UsuarioI): Observable<UsuarioTokenI> {
    const path = `${this.urlAPI}auth/login`;
    return this.http.post<UsuarioTokenI>(path, userLogin);
  }

  // Login Google
  // tslint:disable-next-line:typedef
  googleLogin(token) {
    const path = `${this.urlAPI}auth/google`;
    return this.http.post(path, { token }).pipe(tap((value: any) => {
        if (value.status) {
          localStorage.setItem('token', value.data);
        }
      }),
    );
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    const path = `${this.urlAPI}auth/token`;
    return this.http.post(path, null ,{ headers: { 'x-token': token } }).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.data.token);
      }),
      map((resp: any) => {
        if (resp.status) {
          return true;
        } else {
          return false;
        }
      }),
      catchError((error) => of(false))
    );
  }

}
