import type { Vehicle } from "@domain/customer/entities/vehicle/vehicle";

export interface IParkingSpot {
	get id(): number,
	get isFree(): boolean,
	get vehicle(): Vehicle
	
    assignVehicle(vehicle: Vehicle): boolean; 
    removeVehicle(): boolean;
}