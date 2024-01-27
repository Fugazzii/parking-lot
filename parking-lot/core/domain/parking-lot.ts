import { Entrance } from "./entrance";
import { Exit } from "./exit";
import { ParkingRate } from "./parking-rate";
import { ParkingTicket } from "./parking-ticket";
import { Vehicle } from "./vehicle/vehicle";
import { ParkingSpot } from "./parking-spot/parking-spot";

export class ParkingLot {
    private readonly _entrance: Map<string, Entrance>;
    private readonly _exit:     Map<string, Exit>;
    private readonly _tickets:  Map<string, ParkingTicket>;

    private static parkingLot: ParkingLot | null = null;

    private constructor(
      private id: number,
      private name: string,
      private address: string,
      private parkingRate: ParkingRate  
    ) {
      this._entrance    = new Map();
      this._exit        = new Map();
      this._tickets     = new Map();
    }

    public static getInstance(
        id: number,
        name: string,
        address: string,
        parkingRate: ParkingRate  
    ): ParkingLot {
        if (ParkingLot.parkingLot == null) {
          ParkingLot.parkingLot = new ParkingLot(id, name, address, parkingRate);
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