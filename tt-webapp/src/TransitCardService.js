// Declare URL where server listens for HTTP requests
const USERS_URL = "http://localhost:8080/api/users"
const TCS_URL = "http://localhost:8080/api/transitcards"

// Create a transit card for a user
export const createTransitCardForUser = (uid, tc) =>
    fetch(`${USERS_URL}/${uid}/transitcards`, {
      method: 'POST',
      body: JSON.stringify(tc),
      headers: {
        'content-type': 'application/json'}
    }).then(response => response.json())

// Retrieve all transit cards from the server
export const findAllTransitCards = () =>
    fetch(TCS_URL).then(response => response.json())

// Retrieve a single transit card by their ID
export const findTransitCardById = (id) =>
    fetch(`${TCS_URL}/${id}`).then(response => response.json())

// Delete a transit card by their ID
export const deleteTransitCard = (id) =>
    fetch(`${TCS_URL}/${id}`,{method: "DELETE"})

// Create a new transit card
export const createTransitCard = (tc) =>
    fetch(TCS_URL, {
      method: 'POST',
      body: JSON.stringify(tc),
      headers: {
        'content-type' : 'application/json'
      }}).then(response => response.json())

// Update a transit card by their ID
export const updateTransitCard = (id, tc) =>
    fetch(`${TCS_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(tc),
      headers: {
        'content-type' : 'application/json'
      }}).then(response => response.json())

// Export all functions as the API to this service
const services = {
  createTransitCardForUser,
  findAllTransitCards,
  findTransitCardById,
  deleteTransitCard,
  createTransitCard,
  updateTransitCard
}
export default services;