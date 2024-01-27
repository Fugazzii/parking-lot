import { Entrance } from "./entrance";
import { Exit } from "./exit";
import { ParkingRate } from "./parking-rate";
import { ParkingTicket } from "./parking-ticket";
import { Vehicle } from "./vehicle/vehicle";
import { ParkingSpot } from "./parking-spot/parking-spot";

export class ParkingLot {
    private id: number;
    private name: string;
    private address: string;
    private parkingRate: ParkingRate;

    private readonly _entrance: Map<string, Entrance>;
    private readonly _exit: Map<string, Exit>;
    private readonly _tickets: Map<string, ParkingTicket>;

    private static parkingLot: ParkingLot | null = null;

    private constructor() {}

    public static getInstance(): ParkingLot {
        if (ParkingLot.parkingLot == null) {
            ParkingLot.parkingLot = new ParkingLot();
        }
        return ParkingLot.parkingLot;
    }

    public addEntrance(entrance: Entrance): boolean {
		return false;
	}
    public addExit(exit: Exit): boolean {
		return false;
	}

    public getParkingTicket(vehicle: Vehicle): ParkingTicket {
		throw [];
	}

    public isFull(type: ParkingSpot): boolean {
		return true
	}
}