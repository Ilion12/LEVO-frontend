import { DatosIdentificativos } from "./datos-identificativos";
import { DatosTecnicosInteres } from "./datos-tecnicos-interes";
import { Mantenimiento } from "./mantenimiento";
import { MantenimientoPreventivo } from "./mantenimiento-preventivo";

export interface Vehiculo {
    [x: string]: any;

    id: string;
    fechaAlta:Date;
    datosIdentificativos:DatosIdentificativos;
    datosTecnicosInteres:DatosTecnicosInteres;
    mantenimientoPreventivo:MantenimientoPreventivo;
    mantenimmiento:Mantenimiento[];
    kilometrosActuales: number;
    mesesActuales:number;
}
