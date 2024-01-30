import type { Person } from "src/core/domain/contexts/common/value-objects/person";

export interface IPaymentStrategy {
	perform(to: Person, from: Person, amount: number): void;
}