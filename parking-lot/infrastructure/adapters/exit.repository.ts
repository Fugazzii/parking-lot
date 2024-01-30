import type { IExitRepository } from "@domain/interfaces/exit.repository";
import { InMemoryDatabase } from "infrastructure/in-memory";

export class ExitRepository extends InMemoryDatabase 
	implements IExitRepository {}