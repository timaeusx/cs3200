import {useState, useEffect} from "react";
import {useNavigate} from "react-router"
import {useLocation, useParams} from "react-router-dom";
import UserService from "./UserService";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
})

const TransitCardList = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const [transitcards, setTransitCards] = useState([]);
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

  const user = UserService.findUserById(location.state)
  console.log("Getting user with ID: " + location.state)
  console.log(user.id)
  return(
    <div>
      <h1>
        {user.firstname}'s Cards
      </h1>
      <button className = "btn btn-primary"
              onClick = {() => navigate("/transitcards/new/edit")}>
        New Card...
      </button>
      <ul>
        {
          transitcards.map(transitcard =>
              <li key={transitcard.idtransitcards}>
                Card #{transitcard.idtransitcards}
                <button className = "btn btn-primary"
                        onClick = {() => navigate(`/transitcards/${transitcard.idtransitcards}/edit`, {state : user.id})}>
                  Edit
                </button>
                {tickets.length > 0 &&
                <button className = "btn btn-primary"
                        onClick = {() => navigate(`/transitcards/${transitcard.idtransitcards}/tickets`, {state : user.id})}>
                  Tickets
                </button>}
                <ul>
                  <li>
                    Stored Value:&nbsp;
                    {formatter.format(transitcard.storedvalue)}
                  </li>
                  <li>
                    Expiration:&nbsp;{transitcard.expiration}
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
export default TransitCardList;