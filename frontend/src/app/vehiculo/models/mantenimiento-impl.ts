import { Vehiculo } from "./vehiculo";

export class MantenimientoImpl {

    id!: string;
    fechaMantenimiento!: Date;
    kilometrosMantenimiento!: number;
    observaciones!: string;
    liquidoFrenos!: boolean;
	operacionesSistematicas!: boolean;
	filtroAire!: boolean;
	filtroAireHabitaculo!: boolean;
	filtroCombustible!: boolean;
	filtroAntipolen!: boolean;
	correaDistribucion!: boolean;
	kitDistribucion!: boolean;
	reglajeProyectores!: boolean;
	pHLiquidoRefrigeracion!: boolean;
	liquidoRefrigeracion!: boolean;
	correaArrastreAccesorios!: boolean;
	kitCorreaArrastreAccesorios!: boolean;
	anticongelante!: boolean;
	aceiteTransmision!: boolean;
	bujiasEncendido!: boolean;
	vehiculo!:string;

    constructor(){}
}
