// Interface Usuario
export class UsuarioI {
  idUsuario?: number;
  nombre?: string;
  email: string;
  password: string;
  imagen?: string;
  local?: boolean;
  google?: boolean;
  activo?: boolean;
}

export interface UsuarioTokenI {
  status: boolean,
  msg: string,
  data: { usuario?: UsuarioI, token?: string }
}
