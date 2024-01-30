import { ParkingTicket } from "./parking-ticket";

export class Entrance {
	public constructor(private readonly _id: number) {}

	public getTicket(): ParkingTicket {
		throw [];
	}
}