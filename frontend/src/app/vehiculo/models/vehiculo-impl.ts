
import { DatosTecnicosInteres } from "./datos-tecnicos-interes";
import { Mantenimiento } from "./mantenimiento";
import { MantenimientoPreventivo } from "./mantenimiento-preventivo";

export class VehiculoImpl {

    id!: string;
    datosTecnicosInteres!: DatosTecnicosInteres;
    mantenimientoPreventivo!: MantenimientoPreventivo;
    mantenimiento!: Mantenimiento[];
    fechaAlta!: Date;
    kilometrosActuales!: number;
    mesesActuales!: number;
    matricula!: string;
    marca!: string;
    modelo!: string;
    tipoVehiculo!: string;
    unidadDestino!: string;
    fechaAdjudicacion!: Date;

        constructor(){}
}
