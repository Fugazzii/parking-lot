import type { IUsecase } from "../../usecase.interface";

export class AddSpot implements IUsecase<unknown, unknown> {
	public execute(args: unknown): Promise<unknown> {
		return new Promise(() => {});
	}
}