import type { DisplayBoard } from "../entities/display-board";
import type { Entrance } from "../entities/entrance";
import type { Exit } from "../entities/exit";
import type { ParkingSpot } from "../entities/parking-spot/parking-spot";
import type { AccountStatus } from "../value-objects/account-status.enum";
import type { Person } from "../value-objects/person";
import { Account } from "./account";

export class Admin {
	private readonly account: Account;
  
	public constructor(username: string, password: string, status: AccountStatus, person: Person) {
	  this.account = new Account(username, password, status, person);
	}
  
	public addParkingSpot(spot: ParkingSpot): void {
	  // Logic to add a parking spot
	}
  
	public addDisplayBoard(displayBoard: DisplayBoard): void {
	  // Logic to add a display board
	}
  
	public addEntrance(entrance: Entrance): void {
	  // Logic to add an entrance
	}
  
	public addExit(exit: Exit): void {
	  // Logic to add an exit
	}
  }
  