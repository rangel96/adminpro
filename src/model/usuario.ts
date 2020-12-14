export class Usuario {
  constructor(
    public idUsuario: number,
    public nombre: string,
    public email: string,
    public password: string,
    public imagen: string,
    public local: boolean,
    public google: boolean,
    public activo: boolean,
  ) {
  }
}
