/**
 * Aggregate Root
 */
import type { IVehicle } from "./contexts/customer/entities/bases/vehicle";
import { ConflictException } from "./contexts/common";
import type { IEntranceRepository } from "./ports/entrance.repository";
import type { IParkingSpot } from "./contexts/system/entities/bases/parking-spot";
import type { Entrance } from "./contexts/system/entities/entrance";
import type { Exit } from "./contexts/system/entities/exit";
import type { ParkingTicket } from "./contexts/system/entities/parking-ticket";
import type { ParkingRate } from "./contexts/system/value-objects/parking-rate";

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
      // private readonly entranceRepository: IEntranceRepository,
      // private readonyl exitRepository: 
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

    public addEntrance(id: string, entrance: Entrance): void {
        if(!!this._entrance.get(id)) {
          throw new ConflictException("Id already exists");
        }
        this._entrance.set(id, entrance);
	  }
    public addExit(id: string, exit: Exit): void {
      if(!!this._exit.get(id)) {
        throw new ConflictException("Id already exists");
      }
      this._exit.set(id, exit);
    }

    public getParkingTicket(vehicle: IVehicle): ParkingTicket {
        throw [];
	  }

    public isFull(type: IParkingSpot): boolean {
	  	  return true
    }
}