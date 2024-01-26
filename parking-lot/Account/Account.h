#include <string>
#include "Person.cpp"

using namespace std;

enum AccountStatus
{
	Active,
	Closed,
	Canceled,
	Blacklisted,
	None
};

class Account
{
protected:
	string username;
	string password;
	AccountStatus status;
	Person* person;

	Account(
		const string& username,
		const string& password,
		AccountStatus status,
		Person* person
	) : username(username), password(password), status(status), person(person)
	{
	}
};