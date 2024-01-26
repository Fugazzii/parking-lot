#include "Account.h"
#include "ParkingSpot.h"

class Admin : public Account
{
public:
	string username;
	string password;
	AccountStatus status;
	Person* person;

	Admin(
		const string& username,
		const string& password,
		AccountStatus status,
		Person* person
	) : Account(username, password, status, person)
	{
	}

	bool addParkingSpot(const string& floorName, ParkingSpot& spot)
	{
		return false;
	}

	bool addDisplayBoard(const string& floorName /* Display Board*/)
	{
		return false;
	}

	bool addEntrance(/*Entrance*/)
	{
		return false;
	}

	bool addExit(/*Exit*/)
	{
		return false;
	}

	~Admin() {}
};