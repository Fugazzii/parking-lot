# Use Case Diagram

## Actors

### Primary Actors
- Customer
- Parking Agent

### Secondary Actors
- Admin
- System

---------------------

## Use Cases

### Admin
Add spot: To add a parking spot
Add agent: To add a new agent
Add/modify rate: To add/modify hourly rate
Add entry/exit panel: To add and update exit/entry panel at each entry/exit
Update account: To update account details and payment information
Login/Logout: To login/logout to/from agent or admin account
View account: To view account details like payment status or unpaid amount

### Customer
Take ticket: To take a ticket at the entrance, that contains information regarding the vehicle and its entrance time
Scan ticket: To scan the ticket at the exit and get the parking fee
Pay ticket: To pay the parking fee at the exit panel via cash or a credit card
Cash: To pay the parking fee via cash
Credit card: To pay the parking fee via credit card
Park vehicle: To park the vehicle at the assigned destination

### Parking agent
Update account: To update account details and payment information
Login/Logout: To log in/log out to/from the agent or admin account
View account: To view account details like payment status or unpaid amount
Take ticket: To take a ticket at the entrance, that contains information regarding the vehicle and its entrance time
Scan ticket: To scan the ticket at the exit and get the parking fee
Pay ticket: To pay the parking fee at the exit panel via cash or a credit card
Cash: To pay the parking fee via cash
Credit card: To pay the parking fee via credit card
Park vehicle: To park the vehicle at the assigned destination

### System
Assigning parking spots to vehicles: To check the vehicle type and associate a free spot according to it
Remove spot: To remove a parking spot if it is not available for parking
Show full: To display the status of the parking lot as full
Show available: To show the details of available parking spots

