#include <string>

enum PaymentStatus {
	Completed,
	Failed,
	Pending,
	Unpaid,
	Refunded
};

class Payment
{
private:
	double amount;
	PaymentStatus status;
	std::string timestamp;

public:
	Payment(
		double amount,
		PaymentStatus status,
		const std::string& timestamp
	) : amount(amount), status(status), timestamp(timestamp)
	{}

	~Payment() {}
};

class Cash : public Payment {};

class Card : public Payment {};