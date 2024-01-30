import type { IVehicle } from "@domain/contexts/customer/entities/bases/vehicle";
import type { IParkingSpot } from "../bases/parking-spot";

export class MotorcycleSpot implements IParkingSpot {

	public constructor(
		private readonly _id: number,
		private readonly _isFree: boolean,
		private readonly _vehicle: IVehicle
	) {}

	public get id(): number { return this._id; }
	public get isFree(): boolean { return this._isFree; }
	public get vehicle(): IVehicle { return this._vehicle; }
	
    public assignVehicle(vehicle: IVehicle): boolean {
		return false;
	}
    public removeVehicle(): boolean {
		return false;
	}

}