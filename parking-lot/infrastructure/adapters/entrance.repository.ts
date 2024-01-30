import type { IEntranceRepository } from "@domain/interfaces/entrance.repository";
import { InMemoryDatabase } from "infrastructure/in-memory";

export class EntranceRepository extends InMemoryDatabase 
	implements IEntranceRepository {}