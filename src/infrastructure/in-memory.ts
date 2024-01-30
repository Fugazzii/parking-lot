export class InMemoryDatabase {

	private readonly _storage: Map<string, unknown>;

	public constructor() {
		this._storage = new Map();
	}

	public save<T>(key: string, value: T) {
		this._storage.set(key, value);
	}

	public get<T>(key: string): T {
		const value: T | undefined = this._storage.get(key) as T | undefined;
		
		if(!value) {
			throw new Error("Not found");
		}

		return value;
	}

	public remove(key: string): boolean {
		return this._storage.delete(key);
	}
}