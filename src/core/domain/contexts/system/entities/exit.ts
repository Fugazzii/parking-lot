import { EventType, type AddEventDto, type IEventStore } from "@domain/interfaces/event-store.repository";
import { ParkingTicket } from "./parking-ticket";
import { Transaction } from "./txs/transaction";
import { administrator } from "@domain/contexts/admin/entities/admin";
import { ParkingRate } from "../services/parking-rate.service";
import { TransactionStatus } from "../enums/transaction-status.enum";

export class Exit { 
	public constructor(
		private readonly _id: number,
		private readonly eventStore: IEventStore
	) {}

	public scanTicket(ticket: ParkingTicket): Transaction {
		const ticketScannedEvent: AddEventDto = {
			type: EventType.TicketScanned,
			data: ticket
		};

		this.eventStore.add(ticketScannedEvent);

		const amount = ParkingRate.calculate(ticket.vehicle, ticket.hours);

		const transaction = new Transaction(
			ticket.owner,
			administrator.identity,
			amount,
			TransactionStatus.PENDING,
			new Date()
		);

		return transaction;
	}
}