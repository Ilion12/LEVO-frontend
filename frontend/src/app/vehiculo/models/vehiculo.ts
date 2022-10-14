import { DatosTecnicosInteres } from "./datos-tecnicos-interes";
import { Mantenimiento } from "./mantenimiento";
import { MantenimientoPreventivo } from "./mantenimiento-preventivo";

export interface Vehiculo {
    [x: string]: any;

    id: string;
    fechaAlta:Date;
    matricula:string;
    marca:string;
    modelo:string;
    tipoVehiculo:string;
    unidadDestino:string;
    fechaAdjudicacion:Date;
    datosTecnicosInteres:DatosTecnicosInteres;
    mantenimientoPreventivo:MantenimientoPreventivo;
    mantenimiento:Mantenimiento[];
    kilometrosActuales: number;
    mesesActuales:number;
}
