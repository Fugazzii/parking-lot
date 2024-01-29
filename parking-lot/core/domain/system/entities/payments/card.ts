import type { IPayment } from "@domain/system/entities/bases/payment";
import type { PaymentStatus } from "@domain/system/enums/payment-status.enum";

export class Card implements IPayment {
	public constructor(
		private readonly _amount: number,
		private readonly _status: PaymentStatus,
		private readonly _timestamp: Date	
	) {}
	
	public get amount(): number { return this._amount;}
	public get status(): PaymentStatus { return this._status;}
	public get timestamp(): Date { return this._timestamp;}

    public initiateTransaction(): boolean {
		return false;
	}
}