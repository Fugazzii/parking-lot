import type { Person } from "src/core/domain/contexts/common/value-objects/person";
import type { IPaymentStrategy } from "../payment.strategy.interface";
import type { ITransactionRepository } from "src/core/domain/interfaces/transaction.repository";

export class CardStrategy implements IPaymentStrategy {
	
	public constructor(
		private readonly transactionRepository: ITransactionRepository
	) {}
	
	public perform(to: Person, from: Person, amount: number): void {
		return this.transactionRepository.insert({ to, from, amount });
	}

}