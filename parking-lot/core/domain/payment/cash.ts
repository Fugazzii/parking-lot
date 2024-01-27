import { Payment } from "./payment";

export class Cash extends Payment {
    public initiateTransaction(): boolean {
		return false;
	}
}