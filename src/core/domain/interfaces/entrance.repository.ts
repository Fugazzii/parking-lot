export interface IEntranceRepository {
	save<T>(key: string, value: T): void;
	get<T>(key: string): T;
	remove(key: string): boolean;
}