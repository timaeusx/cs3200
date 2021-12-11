# CS3200 Final Project: Modeling Transportation Ticketing

## Tim Wang, Aidan Johansson 

### Overview

This project models some aspects of a ticketing system that might be used in a public municipal and regional rail transportation system. It is loosely based on the Massachusetts Bay Transportation Authority's CharlieCard stored-value and Commuter Rail ticketing systems. The various data models and their real-world analogues are as follows:

### User data model

A `User` represents a passenger riding within the system. It has first and last names, a username and password, email address, and a date of birth.

### TransitCard data model

A `TransitCard` represents a stored-value card used to pay for subway and bus fares, like a CharlieCard. It has a stored value, and expiration dates.

### Ticket data model

A `Ticket` represents a train ticket, allowing access to services that carry passengers from one `Zone` to another, like a CharlieTicket. It has an expiration date, as well as origin and destination zones.

### Zone enumeration

A `Zone` represents a geographical region. It may be labeled `1A` or numbered from `1` to `10`, with the special zone `1A` representing areas within the urban core, and the numbered zones representing surrounding environs. The distance between zones is used to determine ticket fare classes.

### Relationships
- `User` has a one-to-many relationship with `TransitCard`
- `TransitCard` has a one-to-many relationship with `Ticket`

A UML diagram can be found [here](/diagram.pdf).

### To-do list
Nothing for now!
