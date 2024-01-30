import type { ParkingTicket } from "@domain/contexts/system/entities/parking-ticket";
import type { ITicketsRepository } from "@domain/interfaces/tickets.repository";
import { InMemoryDatabase } from "infrastructure/in-memory";

export class TicketsRepository extends InMemoryDatabase
	implements ITicketsRepository {
	
	public take(): ParkingTicket {
		throw new Error("Method not implemented.");
	}

	public scan(ticket: ParkingTicket): boolean {
		throw new Error("Method not implemented.");
	}
}