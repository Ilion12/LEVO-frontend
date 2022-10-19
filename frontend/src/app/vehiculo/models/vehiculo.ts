import { DatosTecnicosInteres } from "./datos-tecnicos-interes";
import { Mantenimiento } from "./mantenimiento";
import { MantenimientoPreventivo } from "./mantenimiento-preventivo";

export interface Vehiculo {

    id?: string;
    fechaAlta?:Date;
    matricula?:string;
    marca?:string;
    modelo?:string;
    tipoVehiculo?:string;
    unidadDestino?:string;
    fechaAdjudicacion?:Date;
    datosTecnicosInteres?:DatosTecnicosInteres|string;
    mantenimientoPreventivo?:MantenimientoPreventivo|string;
    mantenimiento?:Mantenimiento[];
    kilometrosActuales?: number;
    mesesActuales?:number;
}
