import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UsuariosI, UsuarioI, NewUsuarioI, AuthLocalI, AuthGoogleI, InterfaceUsuario, InterfaceUsuarios, TokenI } from '../interfaces/usuarios';
import { Observable } from 'rxjs';
import { TokenStoreService } from './security/token-store.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private urlAPI = 'http://localhost:3000/api/';
  private urlExample = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient, private tokenSvc: TokenStoreService) {
  }

  // GetAll Obtener todos los usuarios
  getAllUsers(): Observable<UsuariosI[]> {
    const path = this.urlAPI + 'usuarios/';
    return this.http.get<UsuariosI[]>(path);
  }

  // GetbyID Obtener un usuario
  getUser(idUser: number): Observable<UsuarioI> {
    const path = this.urlAPI + 'usuarios/' + idUser;
    return this.http.get<UsuarioI>(path);
  }

  // CreateUser Agregar un usuario DUDA****************************
  addUser(newUser: NewUsuarioI): Observable<UsuarioI> {
    const path = this.urlAPI + 'usuarios/';
    return this.http.post<UsuariosI>(path, newUser);
  }

  // UpdateUser Editar usuario DUDA****************************
  updateUser(user: UsuarioI): Observable<UsuarioI[]> {
    const path = this.urlAPI + 'usuarios/' + user.idUsuario;
    return this.http.put<UsuariosI[]>(path, user);
  }

  // DeleteUser Elimina el usuario
  deleteUser(idUser: number): Observable<{}> {
    const path = `${this.urlAPI}usuarios/${idUser}`;
    return this.http.delete(path);
  }

  // Login native
  /*login(userLogin: AuthLocalI) {
    const path = `${this.urlAPI}auth/login`;
    this.http.post<any>(path, userLogin).subscribe(res => {
      this.tokenSvc.dispatch(res.token);
    });
  }*/

  login(userLogin: AuthLocalI): Observable<InterfaceUsuario> {
    const path = `${this.urlAPI}auth/login`;
    return this.http.post<any>(path, userLogin);
  }

  // Login Google
  // tslint:disable-next-line:typedef
  googleLogin(token: AuthGoogleI) {
    const path = `${this.urlAPI}auth/google`;
    return this.http.post(path, token);
  }

}
