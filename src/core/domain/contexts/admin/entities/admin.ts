import { AccountStatus } from "src/core/domain/contexts/common/enums/account-status.enum";
import { Person } from "src/core/domain/contexts/common/value-objects/person";
import { InvalidPasswordException } from "../errors/invalid-password";

export class Admin {

	public constructor(
		private readonly _username: string,
		private _password: string,
		private _status: AccountStatus,
		private readonly _person: Person
	) {}

	public get identity() {
		return this._person;
	}

	public resetPassword(oldPassword: string, newPassword: string): void {
		if(oldPassword !== this._password) {
			throw new InvalidPasswordException();
		}

		this._password = newPassword;
	}
}

const ilia = new Person("ilia", "sukhumi", "579977979", "sichinavailia@gmail.com");
export const administrator = new Admin("administrator", "admin123", AccountStatus.ACTIVE, ilia);