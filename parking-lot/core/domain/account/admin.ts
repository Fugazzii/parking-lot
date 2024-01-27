import { Account } from "./account";
import { ParkingSpot } from "../parking-spot/parking-spot";
import { DisplayBoard } from "../display-board";
import { Entrance } from "../entrance";
import { Exit } from "../exit";

export class Admin extends Account {
	public addParkingSpot(spot: ParkingSpot) {}
	public addDisplayBoard(displayBoard: DisplayBoard) {}
	public addEntrance(entrance: Entrance) {}
	public addExit(exit: Exit) {}
}