export class InvalidTicketOwnerException extends Error {
	public constructor() {
		super("Ticket id and vehicle license does not match!");
	}
}