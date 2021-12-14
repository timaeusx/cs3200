import React from "react";
import {useNavigate} from "react-router";
import {useLocation, useParams} from "react-router-dom";
import TransitCardService from "./TransitCardService";
import UserService from "./UserService";

const {useState, useEffect} = React;

const TransitCardFormEditor = () => {
  const {id: idtransitcards} = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState({});
  const location = useLocation();
  useEffect(() => {
    if(idtransitcards !== "new") {
      findTransitCardById(idtransitcards)
    }
  }, [idtransitcards])
  const createTransitCard = (card) => {
    TransitCardService.createTransitCard(card).then(() => navigate(-1))
  }
  const findTransitCardById = (idtransitcards) => {
    TransitCardService.findTransitCardById(idtransitcards).then(card => setCard(card))
  }
  const deleteTransitCard = (idtransitcards) => {
    TransitCardService.deleteTransitCard(idtransitcards).then(() => navigate(-1))
  }
  const updateTransitCard = (idtransitcards, newCard) => {
    TransitCardService.updateTransitCard(idtransitcards, newCard).then(() => navigate(-1))
  }
  const user = UserService.findUserById(location.state)
  console.log(user.toString())
  return (
      <div>
        <h2>Card Editor</h2>
        <label>ID</label>
        <input value={card.idtransitcards}/><br/>
        <label>Stored Value</label>
        <input onChange = {(e) => setCard(card => ({...card, storedvalue: e.target.value}))}
               value={card.storedvalue}/><br/>
        <label>Expiration</label>
        <input onChange = {(e) => setCard(card => ({...card, expiration: e.target.value}))}
               value={card.expiration}/><br/>
        <button className="btn btn-warning" onClick={() => {navigate(`/users/${user.firstname}/edit`)}}>Edit Owner</button>
        <button className="btn btn-warning" onClick={() => {navigate(-1)}}>Cancel</button>
        <button className="btn btn-danger" onClick={() => {deleteTransitCard(card.idtransitcards)}}>Delete</button>
        <button className="btn btn-primary" onClick={() => {updateTransitCard(card.idtransitcards, card)}}>Save</button>
        <button className="btn btn-success" onClick={() => {createTransitCard(card)}}>Create</button>
        <button className="btn btn-primary"  onClick = {() => navigate(`/transitcards/${card.idtransitcards}/tickets`)}>
          View Tickets
        </button>
      </div>

  )
}

export default TransitCardFormEditor;