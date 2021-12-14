// Declare URL where server listens for HTTP requests
const TCS_URL = "http://localhost:8080/api/transitcards"
const TICKETS_URL = "http://localhost:8080/api/tickets"

// Create a transit card for a user
export const createTicketForTransitCard = (tcid, ticket) =>
    fetch(`${TCS_URL}/${tcid}/tickets`, {
      method: 'POST',
      body: JSON.stringify(ticket),
      headers: {
        'content-type': 'application/json'}
    }).then(response => response.json())

// Retrieve all tickets from the server
export const findAllTickets = () =>
    fetch(TICKETS_URL).then(response => response.json())

// Retrieve a single ticket by their ID
export const findTicketById = (id) =>
    fetch(`${TICKETS_URL}/${id}`).then(response => response.json())

// Delete a ticket by their ID
export const deleteTicket = (id) =>
    fetch(`${TICKETS_URL}/${id}`,{method: "DELETE"})

// Create a new ticket
export const createTicket = (ticket) =>
    fetch(TICKETS_URL, {
      method: 'POST',
      body: JSON.stringify(ticket),
      headers: {
        'content-type' : 'application/json'
      }}).then(response => response.json())

// Update a ticket by their ID
export const updateTicket = (id, ticket) =>
    fetch(`${TICKETS_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(ticket),
      headers: {
        'content-type' : 'application/json'
      }}).then(response => response.json())

// Export all functions as the API to this service
const services = {
  createTicketForTransitCard,
  findAllTickets,
  findTicketById,
  deleteTicket,
  createTicket,
  updateTicket
}
export default services;