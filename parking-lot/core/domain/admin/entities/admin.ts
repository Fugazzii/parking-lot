import type { AccountStatus } from "@domain/common/enums/account-status.enum";
import type { Person } from "@domain/common/value-objects/person";
import { InvalidPasswordException } from "../errors/invalid-password";

export class Admin {
	public constructor(
		private readonly _username: string,
		private _password: string,
		private _status: AccountStatus,
		private readonly _person: Person
	) {}

	public resetPassword(oldPassword: string, newPassword: string): void {
		if(oldPassword !== this._password) {
			throw new InvalidPasswordException();
		}

		this._password = newPassword;
	}
}