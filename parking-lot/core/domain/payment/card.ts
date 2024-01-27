import { Payment } from "./payment";

export class Card extends Payment {
    public initiateTransaction(): boolean {
		return false;
	}
}