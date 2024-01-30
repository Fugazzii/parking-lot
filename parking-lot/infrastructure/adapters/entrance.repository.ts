import { IEntranceRepository } from "@domain/ports/entrance.repository";
import { InMemoryDatabase } from "infrastructure/in-memory";

export class EntranceRepository extends InMemoryDatabase 
	implements IEntranceRepository {}