import "./Cards.css";
import logo from "../assets/images/card-logo.svg";

const Cards = (formData) => {
  return (
    <div className="cards">
      <div className="front-card">
        <div className="front-card-logo">
          <img src={logo} alt="card-logo" />
        </div>

        <div className="front-card-details">
          <h3 className="front-card-number">{formData.cardNumber || '0000 0000 0000 0000'}</h3>
          <div>
            <p className="front-card-name">{formData.cardholderName || 'KELECHI UGWU'}</p>
            <p className="front-card-date">
              <span className="front-card-date-month">{formData.expiryMonth || '00'}</span> /
              <span className="front-card-date-year"> {formData.expiryYear || '00'}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="back-card">
        <p className="back-card-cvv">{formData.cvc || '000'}</p>
      </div>
    </div>
  );
};

export default Cards;
