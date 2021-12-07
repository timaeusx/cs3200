import React from "react";
import {useNavigate} from "react-router";
import {useParams} from "react-router-dom";
import TicketService from "./TicketService";

const {useState, useEffect} = React;

const TicketFormEditor = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState({});
  useEffect(() => {
    if(id !== "new") {
      findTicketById(id)
    }
  }, [id])
  const createTicket = (ticket) => {
    TicketService.createTicket(ticket).then(() => navigate(-1))
  }
  const findTicketById = (id) => {
    TicketService.findTicketById(id).then(ticket => setTicket(ticket))
  }
  const deleteTicket = (id) => {
    TicketService.deleteTicket(id).then(() => navigate(-1))
  }
  const updateTicket = (id, newTicket) => {
    TicketService.updateTicket(id, newTicket).then(() => navigate(-1))
  }
  return (
      <div>
        <h2>Ticket Editor</h2>
        <label>ID</label>
        <input value={ticket.idtickets}/><br/>
        <label>Expiration</label>
        <input onChange = {(e) => setTicket(ticket => ({...ticket, expiration: e.target.value}))}
               value={ticket.expiration}/><br/>
        <label>Stored Value</label>
        <input onChange = {(e) => setTicket(ticket => ({...ticket, monthlypass: e.target.value}))}
               value={ticket.monthlypass}/><br/>
        <label>Origin Zone</label>
        <input onChange = {(e) => setTicket(ticket => ({...ticket, origin: e.target.value}))}
               value={ticket.origin}/><br/>
        <label>Destination Zone</label>
        <input onChange = {(e) => setTicket(ticket => ({...ticket, destination: e.target.value}))}
               value={ticket.destination}/><br/>
        <button className="btn btn-warning" onClick={() => {navigate(-1)}}>Cancel</button>
        <button className="btn btn-danger" onClick={() => {deleteTicket(ticket.id)}}>Delete</button>
        <button className="btn btn-primary" onClick={() => {updateTicket(ticket.id, ticket)}}>Save</button>
        <button className="btn btn-success" onClick={() => {createTicket(ticket)}}>Create</button>
      </div>
  )
}

export default TicketFormEditor;