import type { IVehicle } from "@domain/contexts/customer/entities/vehicle";
import { VehicleType } from "@domain/contexts/customer/enums/vehicle-type";

export class ParkingRate {

	public static readonly vehicles = {
		[VehicleType.Car]: 1,
		[VehicleType.Motorcycle]: 0.2,
		[VehicleType.Truck]: 2,
		[VehicleType.Van]: 1.5
	};

	public static calculate(vehicleType: IVehicle, hours: number): number {
		return ParkingRate.vehicles[vehicleType.type] * hours;
	}

}