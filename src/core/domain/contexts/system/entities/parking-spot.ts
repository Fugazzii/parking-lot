import type { IVehicle } from "src/core/domain/contexts/customer/entities/bases/vehicle";

export interface IParkingSpot {
	get id(): number,
	get isFree(): boolean,
	get vehicle(): IVehicle
	
    assignVehicle(vehicle: IVehicle): boolean; 
    removeVehicle(): boolean;
}