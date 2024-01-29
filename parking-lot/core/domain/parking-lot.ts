/**
 * Aggregate Root
 */
import { Entrance } from "./system/entities/entrance";
import { Exit } from "./system/entities/exit";
import { ParkingRate } from "./parking-agent/value-objects/parking-rate";
import { ParkingTicket } from "./system/entities/parking-ticket";
import type { IParkingSpot } from "./system/entities/bases/parking-spot";
import type { IVehicle } from "./customer/entities/bases/vehicle";

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

    public getParkingTicket(vehicle: IVehicle): ParkingTicket {
        throw [];
	  }

    public isFull(type: IParkingSpot): boolean {
	  	  return true
    }
}