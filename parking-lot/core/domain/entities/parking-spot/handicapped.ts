import { Vehicle } from "../../entities/vehicle/vehicle";
import { ParkingSpot } from "./parking-spot";

export class Handicapped extends ParkingSpot {
	public override assignVehicle(vehicle: Vehicle): boolean {
		return false;
	}
}