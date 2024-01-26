#include <string>
using namespace std;

class Person
{
public:
	string name;
	string streetAddress;
	string city;
	int zipcode;
	string country;

	Person(
		string &name,
		string &streetAddress,
		string &city,
		int zipcode,
		string &country
	)
	{
		this->name = name;
		this->streetAddress = streetAddress;
		this->city = city;
		this->zipcode = zipcode;
		this->country = country;
	}
};