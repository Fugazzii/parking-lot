#include <iostream>
#include <unordered_map>
#include <string>
#include <vector>
#include <cstdlib>
#include <ctime>
#include "ParkingSpot.h"

using namespace std;

class DisplayBoard 
{
private:
	int id;
	unordered_map<string, vector<ParkingSpot>>* parkingSpot;

	int generateId() {
		std::srand(static_cast<unsigned int>(std::time(nullptr)));
		return rand() % 90000 + 10000;
	}

public:
	DisplayBoard() 
	{
		this->id = this->generateId();
		parkingSpot = new unordered_map<string, vector<ParkingSpot>>();
	}

	void addParkingSpot(const string* spotType, vector<ParkingSpot>& spots)
	{

	}

	void showFreeSlot()
	{
		
	}

	~DisplayBoard()
	{

	}
};