import type { Person } from "src/core/domain/contexts/common/value-objects/person";
import type { TransactionStatus } from "../../enums/transaction-status.enum";
import type { IPaymentStrategy } from "./payment.strategy.interface";

export class Transaction {

    public constructor(
        private readonly _from: Person,
        private readonly _to: Person,
        private readonly _amount: number,
        private readonly _status: TransactionStatus,
        private readonly _timestamp: Date
    ) {}

    public perform(paymentStrategy: IPaymentStrategy): void {
        paymentStrategy.perform(this._to, this._from, this._amount);
    }
    
    public get amount(): number { 
        return this._amount; 
    }

    public get status(): TransactionStatus { 
        return this._status; 
    }

    public get timestamp(): Date { 
        return this._timestamp; 
    }

}
