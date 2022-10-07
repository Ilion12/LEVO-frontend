import { Vehiculo } from "./vehiculo";

export class DatosIdentificativosImpl {

    id!: string;
    matricula!: string;
    marca!: string;
    modelo!: string;
    tipoVehiculo!: string;
    unidadDestino!: string;
    vehiculo!: Vehiculo;
    fechaAdjudicacion!: Date;

    constructor(){}
}
