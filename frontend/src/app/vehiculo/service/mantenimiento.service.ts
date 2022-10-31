import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Mantenimiento } from "../models/mantenimiento";
import { MantenimientoImpl } from "../models/mantenimiento-impl";

@Injectable({
  providedIn: "root",
})
export class MantenimientoService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}mantenimientosrealizados`;

  constructor(private http: HttpClient) {}

  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf("/");
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

  getMantenimientos(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerMantenimientos(respuestaApi: any): Mantenimiento[] {
    const mantenimientos: Mantenimiento[] = [];
    respuestaApi._embedded.mantenimientosrealizados.forEach((a: any) => {
      mantenimientos.push(this.mapearMantenimiento(a));
    });
    return mantenimientos;
  }

  mapearMantenimiento(mantenimientoApi: any): MantenimientoImpl {
    let mantenimiento: Mantenimiento = new MantenimientoImpl();
    mantenimiento.id = this.getId(mantenimientoApi._links.mantenimientorealizado.href);
    mantenimiento.observaciones = mantenimientoApi.comentarios;
    mantenimiento.aceiteTransmision = mantenimientoApi.aceiteTransmision;
    mantenimiento.anticongelante = mantenimientoApi.anticongelante;
    mantenimiento.bujiasEncendido = mantenimientoApi.bujiasEncendido;
    mantenimiento.correaArrastreAccesorios = mantenimientoApi.correaArrastreAccesorios;
    mantenimiento.correaDistribucion = mantenimientoApi.correaDistribucion;
    mantenimiento.filtroAireHabitaculo = mantenimientoApi.filtroAireHabitaculo;
    mantenimiento.filtroAire = mantenimientoApi.filtroAire;
    mantenimiento.filtroAntipolen = mantenimientoApi.filtroAntipolen;
    mantenimiento.filtroCombustible = mantenimientoApi.filtroCombustible;
    mantenimiento.kitCorreaArrastreAccesorios = mantenimientoApi.kitCorreaArrastreAccesorios;
    mantenimiento.kitDistribucion = mantenimientoApi.kitDistribucion;
    mantenimiento.liquidoFrenos = mantenimientoApi.liquidoFrenos;
    mantenimiento.liquidoRefrigeracion = mantenimientoApi.liquidoRefrigeracion;
    mantenimiento.operacionesSistematicas = mantenimientoApi.operacionesSistematicas;
    mantenimiento.pHLiquidoRefrigeracion = mantenimientoApi.pHLiquidoRefrigeracion;
    mantenimiento.reglajeProyectores = mantenimientoApi.reglajeProyectores;
    return mantenimiento;
  }

  crearMantenimiento(mantenimiento: Mantenimiento): Observable<any> {
    return this.http
    .post(`${this.urlEndPoint}`, mantenimiento)
    .pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.roor.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  deleteMantenimiento(id: string): Observable<Mantenimiento> {
    return this.http
    .delete<Mantenimiento>(`${this.urlEndPoint}/${id}`)
    .pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.roor.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  updateMantenimmiento(mantenimiento: Mantenimiento): Observable<any> {
    return this.http
      .patch<any>(`${this.urlEndPoint}/${mantenimiento.id}`, mantenimiento)
      .pipe(
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

  getmantenimientosVehiculo(id: string): Observable<any> {
    return this.http
    .get<any>(`${this.urlEndPoint}/${id}`)
    .pipe(
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
