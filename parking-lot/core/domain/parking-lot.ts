/**
 * Aggregate Root
 */
import { Entrance } from "./entities/entrance";
import { Exit } from "./entities/exit";
import { ParkingRate } from "./value-objects/parking-rate";
import { ParkingTicket } from "./entities/parking-ticket";
import { Vehicle } from "./entities/vehicle/vehicle";
import type { ParkingSpot } from "./entities/parking-spot/parking-spot";

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