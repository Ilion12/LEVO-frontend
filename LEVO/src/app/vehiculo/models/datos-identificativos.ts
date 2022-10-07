import { Vehiculo } from "./vehiculo";

export interface DatosIdentificativos {

    id:string;
    matricula:string;
    mrca:string;
    modelo:string;
    tipoVehiculo:string;
    unidadDestino:string;
    vehiculo:Vehiculo;

}
