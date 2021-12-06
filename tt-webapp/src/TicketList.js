import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const params = useParams();
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
      <ul>
        {
          tickets.map(ticket =>
              <li key={ticket.idtickets}>
                Ticket ID:&nbsp;{ticket.idtickets}
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
    </div>
  );
};
export default TicketList;