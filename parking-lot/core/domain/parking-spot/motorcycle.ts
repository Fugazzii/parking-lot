import { Vehicle } from "../vehicle/vehicle";
import { ParkingSpot } from "./parking-spot";

export class Motorcycle extends ParkingSpot {
	public override assignVehicle(vehicle: Vehicle): boolean {
		return false;
	}
}