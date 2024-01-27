export interface IUsecase<I, O> {
	execute(args: I): Promise<O>;
}