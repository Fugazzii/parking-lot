export class Person {
	public constructor(
		private readonly _name: string,
    	private readonly _address: string,
    	private readonly _phone: string,
    	private readonly _email: string
	) {}

	public get name		() { return this._name; 	}
	public get address	() { return this._address; 	}
	public get phone	() { return this._phone; 	}
	public get email	() { return this._email; 	}
}