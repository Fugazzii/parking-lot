import type { IVehicle } from "../bases/vehicle";

export class Motorcycle implements IVehicle {
	
	public constructor(
		private readonly _licenseNo: string
	) {}

	public get licenseNo(): string {
		return this._licenseNo;
	}

	public assignTicket(): void {
		throw new Error("Method not implemented.");
	}

}