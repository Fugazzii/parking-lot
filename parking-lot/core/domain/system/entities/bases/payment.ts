import { PaymentStatus } from "@domain/system/enums/payment-status.enum";

export interface IPayment {
    get amount(): number;
    get status(): PaymentStatus;
    get timestamp(): Date;
    initiateTransaction(): boolean;
}
