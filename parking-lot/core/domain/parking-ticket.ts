import { Vehicle } from "./vehicle/vehicle";
import { Payment } from "./payment/payment";
import { Entrance } from "./entrance";
import { Exit } from "./exit";

export class ParkingTicket {
    public constructor(
        private readonly ticketNo: number,
        private readonly timestamp: Date,
        private readonly exit: Date,
        private readonly amount: number,
        private readonly status: boolean,
    
        private readonly vehicle: Vehicle,
        private readonly payment: Payment,
        private readonly entrance: Entrance,
        private readonly exitIns: Exit,        
    ) {}
}