import type { Person } from "@domain/contexts/common/value-objects/person";
import type { VehicleType } from "../enums/vehicle-type";
import type { IVehicle } from "./vehicle";

export class Car implements IVehicle {	
	public constructor(
		private readonly _type: VehicleType,
		private readonly _owner: Person,
		private readonly _licenseNo: string	
	) {}
	
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