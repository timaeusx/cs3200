const TransitCard = ({transitCard}) => {
  return(
      <div>
        <b>
          {transitCard.ownedBy.firstname}&nbsp;{transitCard.ownedBy.lastname}'s Card
        </b>
        <p>
          Stored Value:&nbsp;{transitCard.storedvalue}
        </p>
        <p>
          Expiration:&nbsp;{transitCard.expiration}
        </p>
      </div>
  );
}
export default TransitCard