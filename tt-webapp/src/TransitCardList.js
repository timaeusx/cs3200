import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

const TransitCardList = () => {
  const [transitcards, setTransitCards] = useState([]);
  const params = useParams();
  const findTransitCardsById = () =>
      // TODO: Getting an error on this fetch
      fetch(`http://localhost:8080/api/users/${params.id}/transitcards`)
      .then(res => res.json())
      .then(transitcards => setTransitCards(transitcards));
  useEffect(findTransitCardsById, [])
  return(
      <ul>
        {
          transitcards.map(transitcard =>
              <li key={transitcard.idtransitcards}>
                {transitcard.storedvalue}
              </li>
          )
        }
      </ul>
  );
};
export default TransitCardList;