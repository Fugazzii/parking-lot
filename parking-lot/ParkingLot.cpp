#include <string>
#include "ParkingTicket.cpp"
#include <Address.cpp>

using namespace std;

class ParkingLot
{
public:
	int id;
	string name;
	Address address;

	bool addEntrance()
	{
		return false;
	}

	bool addExit()
	{
		return false;
	}

	ParkingTicket getParkingTicket()
	{
		
	}

	bool isFull()
	{
		return false;
	}

};