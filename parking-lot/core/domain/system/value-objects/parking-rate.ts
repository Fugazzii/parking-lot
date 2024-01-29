export class ParkingRate {
	public constructor(
		private readonly hours: number,
		private readonly rate: number	
	) {}
  
	public calculate(): number {
		return this.hours * this.rate;
	}
}