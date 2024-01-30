export enum EventType {
	SpotAdded,
	AgentAdded,
	RateModified,
	PanelAddedOrModified,
	AccountUpdated,
	UserLoggedIn,
	UserLoggedOut,
	AccountViewed,
	TicketTaken,
	TicketScanned,
	TicketPaid,
	VehicleParked,
	SpotRemoved,
	AvailableSpotsShown,
	EntranceAdded,
	ExitAdded
};

export type Event = {
	id: string;
	type: EventType;
	data: JSON;
	timestamp: Date;
};

export type AddEventDto = {
	type: EventType;
	data: object;
};

export interface IEventStore {
	add(addEventDto: AddEventDto): this;
	find(eventId: string): Event | undefined;
}