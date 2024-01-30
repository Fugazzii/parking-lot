import type { Person } from "@domain/contexts/common/value-objects/person";
import { VehicleType } from "../enums/vehicle-type";
import type { IVehicle } from "./vehicle";

export class Truck implements IVehicle {	
	private readonly _type: VehicleType;

	public constructor(
		private readonly _owner: Person,
		private readonly _licenseNo: string	
	) {
		this._type = VehicleType.Truck;
	}
	
	public get type(): VehicleType {
		return this._type;
	}
	
	public get owner(): Person {
		return this._owner;
	}
	
	public get licenseNo(): string {
		return this._licenseNo;
	}
}