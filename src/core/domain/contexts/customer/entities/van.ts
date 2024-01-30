import type { Person } from "@domain/contexts/common/value-objects/person";
import { VehicleType } from "../enums/vehicle-type";
import type { IVehicle } from "./vehicle";

export class Van implements IVehicle {	

	private readonly _type: VehicleType;

	public constructor(
		private readonly _owner: Person,
		private readonly _licenseNo: string	
	) {
		this._type = VehicleType.Van;
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