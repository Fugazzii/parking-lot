export class InvalidPasswordException extends Error {
	public constructor() {
		super("Passwords does not match!");
	}
}