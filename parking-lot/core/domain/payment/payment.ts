import type { PaymentStatus } from "./payment-status.enum";

export abstract class Payment {
	public constructor(
		private readonly _amount: number,
		private readonly _status: PaymentStatus,
		private readonly _timestamp: Date 
	) {}

    public abstract initiateTransaction(): boolean;
}
