import type { ParkingSpot } from "./parking-spot/parking-spot";

export class DisplayBoard {
	private readonly _parkingSpots: Map<string, Array<ParkingSpot>>

	public constructor(private readonly _id: number) {
		this._parkingSpots = new Map();
	}
}