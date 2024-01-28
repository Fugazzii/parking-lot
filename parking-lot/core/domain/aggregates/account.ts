import { AccountStatus } from "../value-objects/account-status.enum";
import { Person } from "../value-objects/person";

export class Account {
	public constructor(
		protected readonly _username: string,
		protected _password: string,
		protected readonly _status: AccountStatus,
		protected readonly _person: Person
	) {}

	protected resetPassword(oldPassword: string, newPassword: string): void {
		if(oldPassword !== this._password) {
			throw new Error("Password does not match");
		}

		this._password = newPassword;
	}
}