#include <string>
#include "Payment.cpp"

using namespace std;

class ParkingTicket 
{
private:
	int ticketNo;
	string timestamp;
	string exit;
	double amount;
	Payment payment;

public:
	ParkingTicket(
		int ticketNo,
		const string& timestamp,
		const string& exit,
		double amount,
		Payment payment
	) : ticketNo(ticketNo), timestamp(timestamp), exit(exit), amount(amount), payment(payment) 
	{}
};