/**
 * Aggregate Root
 */
import type { IVehicle } from "./contexts/customer/entities/vehicle";
import { ConflictException } from "./contexts/common";
import type { IParkingSpot } from "./contexts/system/entities/parking-spot";
import type { Entrance } from "./contexts/system/entities/entrance";
import type { Exit } from "./contexts/system/entities/exit";
import { ParkingTicket } from "./contexts/system/entities/parking-ticket";
import type { ParkingRate } from "./contexts/system/services/parking-rate.service";
import { EventType, type AddEventDto, type IEventStore } from "./interfaces/event-store.repository";

export class ParkingLot {

    private constructor(
        private id: number,
        private name: string,
        private address: string,
        private parkingRate: ParkingRate,
        private readonly eventStore: IEventStore,
    ) {}

    public addEntrance(id: string, entrance: Entrance): this {
        if(!!this.eventStore.find(id)) {
            throw new ConflictException("Id already exists");
        }

        const event: AddEventDto = {
            type: EventType.EntranceAdded,
            data: entrance
        };

        this.eventStore.add(event);
        return this;
    }
    
    public addExit(id: string, exit: Exit): this {
        if(!!this.eventStore.find(id)) {
            throw new ConflictException("Id already exists");
        }

        const event: AddEventDto = {
            type: EventType.ExitAdded,
            data: exit
        };

        this.eventStore.add(event);
        return this;
    }

    public getParkingTicket(vehicle: IVehicle, entrance: Entrance): ParkingTicket {
        return new ParkingTicket(vehicle, entrance);
    }

    public isFull(spot: IParkingSpot): boolean {
        return spot.isFree;
    }
}