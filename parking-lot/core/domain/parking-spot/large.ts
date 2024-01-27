import { Vehicle } from "../vehicle/vehicle";
import { ParkingSpot } from "./parking-spot";

export class Large extends ParkingSpot {
	public override assignVehicle(vehicle: Vehicle): boolean {
		return false;
	}
}