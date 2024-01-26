#include "Vehicle.h"

class Motorcycle : Vehicle
{
public:
	Motorcycle(string &licenseNo)
	{
		this->licenseNo = licenseNo;
	}

	~Motorcycle()
	{
		cout << "Motorcycle deleted";
	}
};