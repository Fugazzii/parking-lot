import type { ParkingTicket } from "src/core/domain/contexts/system/entities/parking-ticket";

export interface ITicketsRepository {
	take(): ParkingTicket;
	scan(ticket: ParkingTicket): boolean;
}