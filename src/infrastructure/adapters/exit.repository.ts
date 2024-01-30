import type { IExitRepository } from "src/core/domain/interfaces/exit.repository";
import { InMemoryDatabase } from "src/infrastructure/in-memory";

export class ExitRepository extends InMemoryDatabase 
	implements IExitRepository {}