import { Vehicle } from "./vehicle/vehicle";
import { Payment } from "./payment/payment";
import { Entrance } from "./entrance";
import { Exit } from "./exit";

export class ParkingTicket {
    private ticketNo: number;
    private timestamp: Date;
    private exit: Date;
    private amount: number;
    private status: boolean;

    private vehicle: Vehicle;
    private payment: Payment;
    private entrance: Entrance;
    private exitIns: Exit;    
}