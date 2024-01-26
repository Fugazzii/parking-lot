#include "Vehicle.h"

class Motorcycle : Vehicle
{
public:
	Motorcycle(string &licenseNo)
	{
		this->licenseNo = licenseNo;
	}

	void assignTicket()
	{
	}

	~Motorcycle()
	{
		cout << "Motorcycle deleted";
	}
};