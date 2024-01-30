import type { Person } from "@domain/contexts/common/value-objects/person";
import type { VehicleType } from "../enums/vehicle-type";

export interface IVehicle {
	get type(): VehicleType;
	get owner(): Person;
	get licenseNo(): string;
}