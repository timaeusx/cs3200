import {useState, useEffect} from "react";
import {useNavigate} from "react-router"
import {useParams} from "react-router-dom";

const TicketList = () => {

  const navigate = useNavigate();
  const params = useParams();

  const [tickets, setTickets] = useState([]);
  const findTicketsById = () =>
      fetch(`http://localhost:8080/api/transitcards/${params.id}/tickets`)
      .then(res => res.json())
      .then(tickets => setTickets(tickets));
  useEffect(findTicketsById, [params.id])

  return(
    <div>
      <h1>
        Tickets
      </h1>
      <button className = "btn btn-primary"
              onClick = {() => navigate("/tickets/new/edit")}>
        New Ticket...
      </button>
      <ul>
        {
          tickets.map(ticket =>
              <li key={ticket.idtickets}>
                Ticket #{ticket.idtickets}
                <button className = "btn btn-primary"
                        onClick = {() => navigate(`/tickets/${ticket.idtickets}/edit`)}>
                  Edit
                </button>
                <ul>
                  <li>
                    Expiration:&nbsp;{ticket.expiration}
                  </li>
                  <li>
                    {ticket.monthlypass && <label>Monthly Pass Zone</label>}
                    {!ticket.monthlypass && <label>Single Use Zone</label>}
                    &nbsp;
                    {ticket.origin}&nbsp;to&nbsp;{ticket.destination}
                  </li>
                </ul>
              </li>
          )
        }
      </ul>
      <button onClick={() => {navigate(-1)}}>Back</button>
    </div>
  );
};

export default TicketList;