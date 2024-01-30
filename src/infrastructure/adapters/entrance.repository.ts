import type { IEntranceRepository } from "src/core/domain/interfaces/entrance.repository";
import { InMemoryDatabase } from "src/infrastructure/in-memory";

export class EntranceRepository extends InMemoryDatabase 
	implements IEntranceRepository {}