import type { Person } from "src/core/domain/contexts/common/value-objects/person";

export type NewTransactionDto = {
	from: Person;
	to: Person;
	amount: number;
}

export interface ITransactionRepository {
	insert(newTransactionDto: NewTransactionDto): void;
}