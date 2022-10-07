import { Vehiculo } from "./vehiculo";

export interface DatosIdentificativos {

    id:string;
    matricula:string;
    marca:string;
    modelo:string;
    tipoVehiculo:string;
    unidadDestino:string;
    vehiculo:Vehiculo;
    fechaAdjudicacion:Date;

}
