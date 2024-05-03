import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <form noValidate>
        <div className="form-item">
          <div className="label">
            <label htmlFor="cardHolderName">CARDHOLDER NAME</label>
          </div>

          <input
            type="text"
            name="cardholderName"
            id="cardHolderName"
            placeholder="e.g. Jane Appleseed"
            required
            maxLength="21"
          />

          <span className="error name-error"></span>
        </div>

        <div className="form-item">
          <div className="label">
            <label htmlFor="cardNumber">CARD NUMBER</label>
          </div>

          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength="16"
            minLength="16"
            required
            pattern="[0-9 ]*"
            inputMode="numeric"
          />

          <span className="error card-no-error"></span>
        </div>

        <div className="form-item expiry-cvc">
          <div className="expiry-cvc-item">
            <div className="label">
              <label htmlFor="expiryMonth expiryYear">EXP. DATE (MM/YY)</label>
            </div>

            <div className="input-expiry">
              <input
                type="text"
                name="expiryMonth"
                id="expiryMonth"
                placeholder="MM"
                required
                maxLength="2"
                minLength="2"
                pattern="[0-9]*"
                inputMode="numeric"
              />
              <input
                type="text"
                name="expiryYear"
                id="expiryYear"
                placeholder="YY"
                required
                maxLength="2"
                minLength="2"
                pattern="[0-9]*"
                inputMode="numeric"
              />
            </div>

            <span className="error date-error"></span>
          </div>

          <div className="expiry-cvc-item">
            <div className="label">
              <label htmlFor="cvc">CVC</label>
            </div>
            <input
              type="text"
              name="cvc"
              id="cvc"
              placeholder="e.g. 123"
              maxLength="3"
              minLength="3"
              required
              pattern="[0-9]*"
              inputMode="numeric"
            />
            <span className="error cvc-error"></span>
          </div>
        </div>

        <button type="submit" className="form-item">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Form;
