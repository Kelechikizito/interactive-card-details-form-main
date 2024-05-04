import "./Form.css";
import { useRef, useState } from "react";
import completeLogo from "../assets/images/icon-complete.svg";

const Form = () => {
  //   const [first, setfirst] = useState(second)
  const firstFormItemRef = useRef(null);
  const secondFormItemRef = useRef(null);
  const thirdFormItemRef = useRef(null);
  const wrapperRef = useRef(null);
  const firstButtonRef = useRef(null);
  const secondButtonRef = useRef(null);

  function buttonClickHandler(e) {
    const form = e.target.form;

    console.log(form[0].validity);
    console.log(form.checkValidity());

    if (!form.checkValidity()) {
      e.preventDefault();
    } else {
      firstFormItemRef.current.style.display = "none";
      secondFormItemRef.current.style.display = "none";
      thirdFormItemRef.current.style.display = "none";
      wrapperRef.current.style.display = "flex";
      firstButtonRef.current.style.display = "none";
      secondButtonRef.current.style.display = "inline-block";
      e.preventDefault(); 
    }
  }

  function nameKeyUpHandler(e) {
    console.log(e.target.value);
  }

  function numberKeyUpHandler(e) {
    console.log(e.target.value);
  }

  return (
    <div className="form">
      <form noValidate>
        <div className="form-item" ref={firstFormItemRef}>
          <div className="label">
            <label htmlFor="cardHolderName">CARDHOLDER NAME</label>
          </div>

          <input
            type="text"
            name="cardholderName"
            id="cardHolderName"
            placeholder="e.g. Kelechi Ugwu"
            required
            maxLength="21"
            onKeyUp={nameKeyUpHandler}
          />

          <span className="error name-error"></span>
        </div>

        <div className="form-item" ref={secondFormItemRef}>
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
            onKeyUp={numberKeyUpHandler}
          />

          <span className="error card-no-error"></span>
        </div>

        <div className="form-item expiry-cvc" ref={thirdFormItemRef}>
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

        <div className="wrapper" ref={wrapperRef}>
          <div>
            <img src={completeLogo} alt="" />
          </div>

          <div>
            <h2>THANK YOU!</h2>
          </div>

          <div>
            <p>We've added your card details</p>
          </div>
        </div>

        <button
          type="submit"
          className="form-item"
          onClick={buttonClickHandler}
          ref={firstButtonRef}
        >
          Confirm
        </button>

        <button
          type="submit"
          className="form-item secondButton"
          ref={secondButtonRef}
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Form;
