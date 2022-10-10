import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatosIdentificativos } from '../models/datos-identificativos';
import { DatosIdentificativosImpl } from '../models/datos-identificativos-impl';

@Injectable({
  providedIn: 'root'
})
export class DatosIdentificativosService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}datosidentificativos`;
  constructor(private http: HttpClient) { }

  getId(url: string):string{
    let posicionFinal: number = url.lastIndexOf('/');
    let numId:string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

  getDatosIdentificativos(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
    }
  
    extraerDatosIdentificativos(respuestaApi: any): DatosIdentificativos[] {
      const datosIdentificativos: DatosIdentificativos[] = [];
      respuestaApi._embedded.datosidentificativos.forEach((a: any) => {
      datosIdentificativos.push(this.mapearDatosIdentificativos(a));
      });
      return datosIdentificativos;
    }

    mapearDatosIdentificativos(datosIdentificativosApi: any): DatosIdentificativosImpl {

      let datosIdentificativos: DatosIdentificativos = new DatosIdentificativosImpl();
      datosIdentificativos.id= this.getId(datosIdentificativosApi._links.datosIdentificativos.href);
      datosIdentificativos.matricula=datosIdentificativosApi.matricula;
      datosIdentificativos.modelo=datosIdentificativosApi.modelo;
      datosIdentificativos.marca=datosIdentificativosApi.marca;
      datosIdentificativos.tipoVehiculo=datosIdentificativosApi.tipo;
      datosIdentificativos.unidadDestino=datosIdentificativosApi.unidadDestino;
      datosIdentificativos.vehiculo=datosIdentificativosApi.this.getId(datosIdentificativosApi._links.vehiculo.href);
      datosIdentificativos.fechaAdjudicacion=datosIdentificativosApi.fechaAdjudicacion;
      return datosIdentificativos;
    }

    creardatosIdentificativos(datosIdentificativos: DatosIdentificativos): Observable<any>{
      return this.http.post(`${this.urlEndPoint}`, datosIdentificativos).pipe(
        catchError((e) =>{
          if(e.status ===400) {
            return throwError(()=> new Error (e));
          }
          if(e.roor.mensaje){
            console.error(e.error.mensaje);
          }
          return throwError(()=> new Error(e));
        })
        );
    }

    deleteDatosIdentificativos(id: string): Observable<DatosIdentificativos> {
      return this.http
        .delete<DatosIdentificativos>(`${this.urlEndPoint}/${id}`).pipe(
        catchError((e) =>{
          if(e.status ===400) {
            return throwError(()=> new Error (e));
          }
          if(e.roor.mensaje){
            console.error(e.error.mensaje);
          }
            return throwError(()=> new Error(e));
          })
        );
    }

updateDatosIdentificativos(datosIdentificativos:DatosIdentificativos): Observable<any>{
  return this.http.patch<any>(`${this.urlEndPoint}/${datosIdentificativos.id}`, datosIdentificativos).pipe(
    catchError((e) => {
      if (e.status === 400) {
        return throwError(() => new Error(e));
      }
      if (e.error.mensaje) {
        console.error(e.error.mensaje);
      }
      return throwError(() => new Error(e));
      })
    );
}

getDatosIdentificativosVehiculo(id:string): Observable<any>{
  return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
    catchError((e) => {
      if (e.status === 400) {
        return throwError(() => new Error(e));
      }
      if (e.error.mensaje) {
        console.error(e.error.mensaje);
      }
      return throwError(() => new Error(e));
    })
  );
}


}
