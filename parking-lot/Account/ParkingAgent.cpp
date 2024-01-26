#include "Account.h"

class ParkingAgent : public Account
{
public:
	string username;
	string password;
	AccountStatus status;
	Person* person;

	ParkingAgent(
		const string& username,
		const string& password,
		AccountStatus status,
		Person* person
	) : Account(username, password, status, person)
	{
	}

	~ParkingAgent() {}
};