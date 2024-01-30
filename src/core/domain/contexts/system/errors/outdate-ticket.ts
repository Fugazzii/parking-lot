export class OutdateTicketException extends Error {
	public constructor() {
		super("Ticket is outdated!");
	}
}