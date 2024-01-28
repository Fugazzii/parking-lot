import { Vehicle } from "../../entities/vehicle/vehicle";

export abstract class ParkingSpot {
	public constructor(
		private readonly _id: number,
		private readonly _isFree: boolean,
		private readonly _vehicle: Vehicle
	) {}
	
    public abstract assignVehicle(vehicle: Vehicle): boolean; 
    public removeVehicle(): boolean {
		return false;
    } 

	public get isFree() { return this._isFree; }
}