export class TicketStillActiveException extends Error {
	public constructor() {
		super("Ticket is still present, end session first.");
	}
}