#include "Vehicle.h"

class Car : Vehicle
{
public:
	Car(string &licenseNo)
	{
		this->licenseNo = licenseNo;
	}

	void assignTicket()
	{
	}

	~Car()
	{
		cout << "Car deleted";
	}
};