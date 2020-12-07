import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UsuarioI, UsuarioTokenI } from '../interfaces/usuarios';
import { Observable } from 'rxjs';
import { TokenStoreService } from './security/token-store.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private urlAPI = 'http://localhost:3000/api/';

  constructor(private http: HttpClient, private tokenSvc: TokenStoreService) {
  }

  // GetAll Obtener todos los usuarios
  getAllUsers(): Observable<UsuarioI[]> {
    const path = this.urlAPI + 'usuarios/';
    return this.http.get<UsuarioI[]>(path);
  }

  // GetbyID Obtener un usuario
  getUser(idUser: number): Observable<UsuarioI> {
    const path = this.urlAPI + 'usuarios/' + idUser;
    return this.http.get<UsuarioI>(path);
  }

  // CreateUser Agregar un usuario DUDA****************************
  addUser(newUser: UsuarioI): Observable<UsuarioTokenI> {
    const path = this.urlAPI + 'usuarios/';
    return this.http.post<UsuarioTokenI>(path, newUser);
  }

  // UpdateUser Editar usuario DUDA****************************
  updateUser(user: UsuarioI): Observable<UsuarioI[]> {
    const path = this.urlAPI + 'usuarios/' + user.idUsuario;
    return this.http.put<UsuarioI[]>(path, user);
  }

  // DeleteUser Elimina el usuario
  deleteUser(idUser: number): Observable<{}> {
    const path = `${this.urlAPI}usuarios/${idUser}`;
    return this.http.delete(path);
  }

  // Login native with token
  /*login(userLogin: AuthLocalI) {
    const path = `${this.urlAPI}auth/login`;
    this.http.post<any>(path, userLogin).subscribe(res => {
      this.tokenSvc.dispatch(res.token);
    });
  }*/

  // Login native
  login(userLogin: UsuarioI): Observable<UsuarioTokenI> {
    const path = `${this.urlAPI}auth/login`;
    return this.http.post<UsuarioTokenI>(path, userLogin);
  }

  // Login Google
  // tslint:disable-next-line:typedef
  /*googleLogin(token: AuthGoogleI) {
    const path = `${this.urlAPI}auth/google`;
    return this.http.post(path, token);
  }*/

}
