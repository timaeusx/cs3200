import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom"

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
})

const TransitCardList = () => {
  const [transitcards, setTransitCards] = useState([]);
  const params = useParams();
  const findTransitCardsById = () =>
      fetch(`http://localhost:8080/api/users/${params.id}/transitcards`)
      .then(res => res.json())
      .then(transitcards => setTransitCards(transitcards));
  useEffect(findTransitCardsById, [params.id])
  const [tickets, setTickets] = useState([]);
  const findTickets = () =>
      fetch(`http://localhost:8080/api/transitcards/${params.id}/tickets`)
      .then(res => res.json())
      .then(tickets => setTickets(tickets))
  useEffect(findTickets, [params.id])
  return(
    <div>
      <h1>
        Cards
      </h1>
      <ul>
        {
          transitcards.map(transitcard =>
              <li key={transitcard.idtransitcards}>
                Card #{transitcard.idtransitcards}
                <ul>
                  <li>
                    Stored Value:&nbsp;
                    {formatter.format(transitcard.storedvalue)}
                  </li>
                  <li>
                    Expiration:&nbsp;{transitcard.expiration}
                  </li>
                  {tickets.length > 0 &&
                  <li key={transitcard.idtransitcards}>
                    <Link to={`/transitcards/${transitcard.idtransitcards}`}>
                      Tickets
                    </Link>
                  </li>}
                </ul>
              </li>
          )
        }
      </ul>
    </div>
  );
};
export default TransitCardList;