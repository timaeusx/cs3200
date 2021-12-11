# CS3200 Final Project: Modeling Transportation Ticketing
Tim Wang, Aidan Johansson

## Overview

### Problem statement
Modern transportation systems serve high volumes of passengers, and must manage fare and ticketing structures that may potentially change over time. Older transit systems made use of paper tickets and tokens to collect fares. These were often sold from physical fare counters or specialized ticket machines at stations or convenience stores. However, these solutions could be slow, as they required passengers to look for specific locations to purchase fares to their destinations, and conductors to visually verify tickets on entry or en route.

### Solution statement
The modernization of fare systems comes with a wealth of advantages. Electronic stored-value cards automate subway and bus fares, which can be flexibly adjusted, and electronic tickets can be quickly and easily purchased and verified digitally. As with most modernization projects, this solution requires the infrastructure to support it. Databases can play an important role in storing and serving passenger and ticket data, as they are flexible and scale well. This project models some aspects of a ticketing system that might be used in a public municipal and regional rail transportation system. It is loosely based on the Massachusetts Bay Transportation Authority's CharlieCard stored-value and Commuter Rail ticketing systems.

### Typical users
A flexible, scalable approach to storing passenger and ticketing information is of critical importance to any fare system. Therefore, the model explored in this project would be of most interest to municipal, regional, or inter-regional transportation authorities and system operators.

## Data models and relationships

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
