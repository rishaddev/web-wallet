function QRCardDetails(Props) {
  return (
    <div className="displayCard">

      <div className="displayCardRow-1">
        <p>{Props.id}</p>
        <p className="displayCardp1">{Props.name}</p>
        <p>{Props.qrid}</p>
      </div>

    </div>
  );
}

export default QRCardDetails;
