#include "Vehicle.h"

class Truck : Vehicle
{
public:
	Truck(string &licenseNo)
	{
		this->licenseNo = licenseNo;
	}

	void assignTicket()
	{
	}

	~Truck()
	{
		cout << "Truck deleted";
	}
};