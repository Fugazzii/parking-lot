export class Address {
	public constructor(
		private readonly _zipCode: number,
		private readonly _address: string,
    	private readonly _city: string,
    	private readonly _state: string,
    	private readonly _country: string
	) {}

	public get zipCode	() { return this._zipCode; 	}
	public get address	() { return this._address; 	}
	public get city		() { return this._city; 	}
	public get state	() { return this._state; 	}
	public get country	() { return this._country; 	}
}