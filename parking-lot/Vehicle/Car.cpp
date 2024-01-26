#include "Vehicle.h"

class Car : Vehicle
{
public:
	Car(string &licenseNo)
	{
		this->licenseNo = licenseNo;
	}

	~Car()
	{
		cout << "Car deleted";
	}
};