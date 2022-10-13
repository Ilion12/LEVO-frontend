import { Vehiculo } from "./vehiculo";

export class DatosTecnicosInteresImpl {

    id!: string;
    bastidor!: string;
    color!: string;
    combustible!: string;
    cambio!: string;
    capacidadDeposito!: number;
    lubricanteMotor!: string;
    capacidadCarter!: number;
    presionNeumaticosDelanteros!: number;
    presionNeumaticosTraseros!: number;
    tipoCubiertas!: string;
    numeroBaterias!: number;
    voltajeBaterias!: number;
    amperajeBaterias!: number;
    amperiosHoraBaterias!: number;
    calificacionMedioambiental!: string;
    vehiculo!: Vehiculo;

    constructor(){}
}
