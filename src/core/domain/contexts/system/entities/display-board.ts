import type { IParkingSpot } from "./parking-spot";

export class DisplayBoard {
	private readonly _parkingSpots: Map<string, Array<IParkingSpot>>

	public constructor(private readonly _id: number) {
		this._parkingSpots = new Map();
	}

}