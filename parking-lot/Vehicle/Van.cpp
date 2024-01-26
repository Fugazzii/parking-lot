#include "Vehicle.h"

class Truck : Vehicle
{
public:
	Truck(string &licenseNo)
	{
		this->licenseNo = licenseNo;
	}

	~Truck()
	{
		cout << "Truck deleted";
	}
};