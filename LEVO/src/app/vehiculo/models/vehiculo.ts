import { DatosIdentificativos } from "./datos-identificativos";
import { DatosTecnicosInteres } from "./datos-tecnicos-interes";
import { Mantenimiento } from "./mantenimiento";
import { MantenimientoPreventivo } from "./mantenimiento-preventivo";

export interface Vehiculo {

    id: string;
    datosIdentificativos:DatosIdentificativos;
    datosTecnicosInteres:DatosTecnicosInteres;
    mantenimientoPreventivo:MantenimientoPreventivo;
    mantenimmiento:Mantenimiento[];
}
