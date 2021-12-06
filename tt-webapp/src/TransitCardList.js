import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

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
  return(
      <ul>
        {
          transitcards.map(transitcard =>
              <li key={transitcard.idtransitcards}>
                Card ID:&nbsp;{transitcard.idtransitcards}
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
  );
};
export default TransitCardList;