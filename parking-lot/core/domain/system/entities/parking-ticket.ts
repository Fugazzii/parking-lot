import type { Vehicle } from "@domain/customer/entities/vehicle/vehicle";
import type { IPayment } from "./bases/payment";
import type { Entrance } from "./entrance";
import type { Exit } from "./exit";

export class ParkingTicket {
    public constructor(
        private readonly ticketNo: number,
        private readonly timestamp: Date,
        private readonly exit: Date,
        private readonly amount: number,
        private readonly status: boolean,
    
        private readonly vehicle: Vehicle,
        private readonly payment: IPayment,
        private readonly entrance: Entrance,
        private readonly exitIns: Exit,        
    ) {}
}