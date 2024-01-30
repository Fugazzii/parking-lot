import type { Entrance } from "./entrance";
import type { Exit } from "./exit";
import type { Transaction } from "./txs/transaction";
import { InvalidTicketOwnerException } from "../errors/invalid-ticket-owner";
import { OutdateTicketException } from "../errors/outdate-ticket";
import type { Person } from "@domain/contexts/common/value-objects/person";
import { TicketStillActiveException } from "../errors/ticket-still-active";
import type { IVehicle } from "@domain/contexts/customer/entities/vehicle";

export class ParkingTicket {

    private readonly _owner: Person;
    private readonly startTime: Date;
    private endTime: Date | null;
    private readonly ticketNo: string;
    private isActive: boolean;
    private exit: Exit | null;

    public constructor(
        private readonly _vehicle: IVehicle,
        private readonly entrance: Entrance,
    ) {
        this._owner = _vehicle.owner;
        this.startTime = new Date();
        this.endTime = null;
        this.ticketNo = _vehicle.licenseNo;
        this.isActive = true;
        this.exit = null;
    }

    public validateTicket(vehicle: IVehicle, exit: Exit) {
        if(vehicle.licenseNo !== this.ticketNo) {
            throw new InvalidTicketOwnerException();
        }
        if(!this.isActive) {
            throw new OutdateTicketException();
        }

        this.endTime = new Date();
        this.isActive = false;
        this.exit = exit;
        exit.validateTicket(this);
    }

    public get owner() {
        return this._owner;
    }

    public get vehicle() {
        return this._vehicle;
    }

    public get hours() {
        if(!this.endTime) {
            throw new TicketStillActiveException();
        }

        const minutesIssued = this.endTime.getMinutes() - this.startTime.getMinutes();
        return Math.floor(minutesIssued / 60);
    }
}