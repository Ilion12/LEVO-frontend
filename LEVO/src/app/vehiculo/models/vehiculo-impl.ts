import { DatosIdentificativos } from "./datos-identificativos";
import { DatosTecnicosInteres } from "./datos-tecnicos-interes";
import { Mantenimiento } from "./mantenimiento";
import { MantenimientoPreventivo } from "./mantenimiento-preventivo";

export class VehiculoImpl {

    id!: string;
    datosIdentificativos!: DatosIdentificativos;
    datosTecnicosInteres!: DatosTecnicosInteres;
    mantenimientoPreventivo!: MantenimientoPreventivo;
    mantenimiento!: Mantenimiento[];
    fechaAlta!: Date;
    kilometrosActuales!: number;
    mesesActuales!: number;

        constructor(){}
}
