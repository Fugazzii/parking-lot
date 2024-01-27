import { ParkingTicket } from "./parking-ticket";

export class Exit {
  
	public constructor(private readonly _id: number) {}

	public validateTicket(ticket: ParkingTicket): void {}
}