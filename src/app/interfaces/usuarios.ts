// Interface Usuarios
export interface UsuariosI {
  idUsuario: number;
  nombre: string;
  email: string;
  password: string;
  imagen: string;
  local: boolean;
  google: boolean;
  activo: boolean;
}

export interface UsuarioI {
  idUsuario: number;
  nombre: string;
  email: string;
  password: string;
  imagen: string;
}

export interface NewUsuarioI {
  nombre: string;
  email: string;
  password: string;
  imagen: string;
}

/// Interface Auth
export interface AuthLocalI {
  email: string;
  password: string;
}

export interface AuthGoogleI {
  status: boolean,
  msg: string,
  token: string;
}

export interface InterfaceUsuario {
  status: boolean,
  msg: string,
  data: [ usuario: UsuarioI, token: TokenI ]
}

export interface InterfaceUsuarios {
  status: boolean,
  msg: string,
  data: UsuariosI
}

export interface TokenI {
  token: string;
}
