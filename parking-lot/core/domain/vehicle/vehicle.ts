export abstract class Vehicle {
	public constructor(private readonly licenseNo: string) {}

	protected abstract assignTicket();
}