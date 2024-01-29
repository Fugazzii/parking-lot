import type { Vehicle } from "@domain/customer/entities/vehicle/vehicle";
import type { IParkingSpot } from "@domain/system/bases/parking-spot";

export class HandicappedSpot implements IParkingSpot {

	public constructor(
		private readonly _id: number,
		private readonly _isFree: boolean,
		private readonly _vehicle: Vehicle
	) {}

	public get id(): number { return this._id; }
	public get isFree(): boolean { return this._isFree; }
	public get vehicle(): Vehicle { return this._vehicle; }
	
    public assignVehicle(vehicle: Vehicle): boolean {
		return false;
	}
    public removeVehicle(): boolean {
		return false;
	}

}