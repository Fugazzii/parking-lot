import type { ParkingTicket } from "src/core/domain/contexts/system/entities/parking-ticket";
import type { ITicketsRepository } from "src/core/domain/interfaces/tickets.repository";
import { InMemoryDatabase } from "src/infrastructure/in-memory";

export class TicketsRepository extends InMemoryDatabase
	implements ITicketsRepository {
	
	public take(): ParkingTicket {
		throw new Error("Method not implemented.");
	}

	public scan(ticket: ParkingTicket): boolean {
		throw new Error("Method not implemented.");
	}
}