export class Address {
	public constructor(
		private readonly _zipCode: number,
		private readonly _address: string,
    	private readonly _city: string,
    	private readonly _state: string,
    	private readonly _country: string
	) {}
}