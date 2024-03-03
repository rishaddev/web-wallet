import "./PaymentCardStyles.css";

function PaymentCard() {
  return (
    <div className="displayCard">
      <div className="displayCardRow-1">
        <p>EMP0001</p>
        <p className="displayCardp1">Rishad Ahamed</p>
        <p>QR0001</p>
      </div>

      <div className="displayCardRow-1">
        <p>0772115701</p>
        <p>112233445566</p>
        <p>Senior Developer</p>
      </div>

      <div className="displayCardRow-1">
        <p className="displayCardp2">Rs. 5,000.00</p>
      </div>

      <div className="displayCardRow-2 payBal">
        <p>Remaining Balance: </p>
        <p className="paymentCardp1">Rs. 4,500.00</p>
      </div>

      <div className="displayCardRow-2">
        <p>Last Purchase</p>
        <p className="paymentCardp1">Rs. 300.00</p>
      </div>

      <div className="paymentinput">
        <form>
          <p className="paymentinputp1">New Bill Amount</p>
          <input type="text" placeholder="Enter Bill Amount" className="paymentInputField"/>
          <button type="submit" className="sm-btn">PAY</button>
        </form>

        <form>
          <p className="paymentinputp1">TopUp Card </p>
          <input type="text" placeholder="Enter Top-Up Amount" className="paymentInputField"/>
          <button type="submit" className="sm-btn">TOPUP</button>
        </form>

      </div>
    </div>
  );
}

export default PaymentCard;
