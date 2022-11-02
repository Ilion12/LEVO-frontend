import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, Subject, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Usuario } from "../usuario/models/usuario";
import { UsuarioImpl } from "../usuario/models/usuario-impl";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;

  usuario!: Usuario;
 
  roleAs!: string;
 
  private host: string = environment.host;
  private urlEndpoint: string = `${this.host}usuarios/search/buscar-usuario?`;

  constructor(private http:HttpClient) { }

  login(usuario:string, contraseña:string): Observable<any> {
    var subject=new Subject();
    this.getUser(usuario,contraseña).subscribe(response=>{
    this.isLogin = true;
    this.usuario=response;
    this.roleAs = this.usuario.rol;
    localStorage.setItem('usuario', this.usuario.usuario);
    localStorage.setItem('STATE', 'true');
    localStorage.setItem('ROLE', this.roleAs);console.log(response)
   subject.next({ success: this.isLogin, role: this.roleAs });
    });//validacion del codigo de estado: 200 o 404
    return subject.asObservable();
    
  }

  logout() {
    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem('STATE', 'false');
    localStorage.setItem('ROLE', '');
    return of({ success: this.isLogin, role: '' });
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  getRole() {
    this.roleAs = this.usuario.rol;
    return this.roleAs;
  }

  getUser(usuario:string, contrasena:string):Observable<any>{
    return this.http.get<any>(`${this.urlEndpoint}usuario=${usuario}&contraseña=${contrasena}`).pipe( catchError((e) =>{
      if(e.status ===404) {
        return throwError(()=> new Error (e));
      }
      if(e.roor.mensaje){
        console.error(e.error.mensaje);
      }
      return throwError(()=> new Error(e));
    })
    );
  }
  mapearUsuario(usuarioApi:any): UsuarioImpl{
    let usuario: Usuario =new UsuarioImpl();
    usuario.usuario=usuarioApi.usuario;
    usuario.contrasena=usuarioApi.contraseña;
    usuario.rol=usuarioApi.rol;
    return usuario;
  }

}