import React from "react";
import {useNavigate} from "react-router";
import {useParams} from "react-router-dom";
import TransitCardService from "./TransitCardService";

const {useState, useEffect} = React;

const TransitCardFormEditor = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState({});
  useEffect(() => {
    if(id !== "new") {
      findTransitCardById(id)
    }
  }, [id])
  const createTransitCard = (card) => {
    TransitCardService.createTransitCard(card).then(() => navigate(-1))
  }
  const findTransitCardById = (id) => {
    TransitCardService.findTransitCardById(id).then(card => setCard(card))
  }
  const deleteTransitCard = (id) => {
    TransitCardService.deleteTransitCard(id).then(() => navigate(-1))
  }
  const updateTransitCard = (id, newCard) => {
    TransitCardService.updateTransitCard(id, newCard).then(() => navigate(-1))
  }
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
        <button className="btn btn-warning" onClick={() => {navigate(-1)}}>Cancel</button>
        <button className="btn btn-danger" onClick={() => {deleteTransitCard(card.id)}}>Delete</button>
        <button className="btn btn-primary" onClick={() => {updateTransitCard(card.id, card)}}>Save</button>
        <button className="btn btn-success" onClick={() => {createTransitCard(card)}}>Create</button>
      </div>
  )
}

export default TransitCardFormEditor;