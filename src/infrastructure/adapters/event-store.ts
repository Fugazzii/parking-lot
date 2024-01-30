import type { AddEventDto, Event, IEventStore } from "src/core/domain/interfaces/event-store.repository";
import crypto from "node:crypto";

export class EventStore implements IEventStore {

	private static _instance: EventStore | null = null;
	private static readonly SHARDS_COUNT = 5;
	
	private readonly _hashring: Array<Map<string, Event>>;

	private constructor() {
		this._hashring = new Array(EventStore.SHARDS_COUNT).fill(new Map());
	}

	public static getRepository() {
		if(EventStore._instance) {
			EventStore._instance = new EventStore();
		}
		return EventStore._instance;
	}

	public add(addEventDto: AddEventDto): this {
		const id = crypto.randomUUID();
		const shardIndex = this._calculateHash(id);
		const shard = this._hashring[shardIndex];
		const timestamp = new Date();
		
		const event: Event = {
			...addEventDto,
			id,
			timestamp
		};

		shard.set(id, event);
		return this;
	}

	public find(eventId: string): Event | undefined {
        const shardIndex = this._calculateHash(eventId);
        const shard = this._hashring[shardIndex];
        return shard.get(eventId);
    }
	
	private _calculateHash(str: string): number {
		let hash = 0;
		for(let i = 0; i < str.length; i++) {
			const char = str.charCodeAt(i);
			hash = (hash << 5) + hash + char;
		}
		return hash % this._hashring.length;
	}
}