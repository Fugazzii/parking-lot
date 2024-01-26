class ParkingSpot
{
private:
	int id;
	bool isFree;

public:
	virtual bool getIsFree();
};

class LargeSpot : ParkingSpot
{
};

class Handicapped : ParkingSpot
{
};

class Compact : ParkingSpot
{
};

class Motorcycle : ParkingSpot
{
};