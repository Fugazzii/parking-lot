import type { IUsecase } from "../../usecase.interface";

export class AddAgent implements IUsecase<undefined, boolean> {
	public execute(): Promise<boolean> {
		return new Promise(() => {});
	}
}