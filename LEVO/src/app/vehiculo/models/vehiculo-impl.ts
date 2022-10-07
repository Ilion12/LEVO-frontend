import { DatosIdentificativos } from "./datos-identificativos";
import { DatosTecnicosInteres } from "./datos-tecnicos-interes";
import { Mantenimiento } from "./mantenimiento";
import { MantenimientoPreventivo } from "./mantenimiento-preventivo";

export class VehiculoImpl {

    id!: number;
    kilometrosActuales!: number;
    mesesActuales!: number;
    datosIdentificativos!: DatosIdentificativos;
    datosTecnicosInteres!: DatosTecnicosInteres;
    mantenimientoPreventivo!: MantenimientoPreventivo;
    mantenimmiento!: Mantenimiento[];

        constructor(){}
}
