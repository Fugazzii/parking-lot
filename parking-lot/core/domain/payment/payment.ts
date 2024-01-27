export enum PaymentStatus {
	COMPLETED, 
	FAILED, 
	PENDING, 
	UNPAID, 
	REFUNDED
}

export abstract class Payment {
	public constructor(
		private readonly _amount: number,
		private readonly _status: PaymentStatus,
		private readonly _timestamp: Date 
	) {}

    public abstract initiateTransaction(): boolean;
}
