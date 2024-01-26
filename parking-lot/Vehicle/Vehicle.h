#include <iostream>
#include <string>

using namespace std;

class Vehicle
{
protected:
	string licenseNo;

public:
	virtual void assignTicket();
};