import "./Form.css";
import { useRef, useState } from "react";
import completeLogo from "../assets/images/icon-complete.svg";

const Form = ({setFormData, formData}) => {
//   const [isActive, setIsActive] = useState(false);

  const [
    firstFormItemRef,
    secondFormItemRef,
    thirdFormItemRef,
    wrapperRef,
    firstButtonRef,
    secondButtonRef,
    cardNameRef,
    cardNumberRef,
    expiryMonthRef,
    expiryYearRef,
    cvcRef,
    nameErrorRef,
    dateErrorRef,
    cvcErrorRef,
    cardNumberErrorRef
  ] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  function buttonClickHandler(e) {
    const form = e.target.form;

    // console.log(form[0].validity);
    // console.log(form.checkValidity());

    function validateCardName () {
        const iscardNameEmpty = cardNameRef.current.validity.valueMissing;

        if (iscardNameEmpty) {
            nameErrorRef.current.style.display = 'inline-block';
            nameErrorRef.current.textContent = "Can't be blank";
            cardNameRef.current.classList.add('invalid');
        } else {
            cardNameRef.current.classList.remove('invalid');
            nameErrorRef.current.style.display = 'none';
        }
    }

    function validateExpiryDate () {
        const isMonthEmpty = expiryMonthRef.current.validity.valueMissing;
        const isYearEmpty = expiryYearRef.current.validity.valueMissing;

        if (isMonthEmpty || isYearEmpty) {
            dateErrorRef.current.style.display = 'inline-block';
            dateErrorRef.current.textContent = "Can't be blank";
            expiryMonthRef.current.classList.add('invalid')
            expiryYearRef.current.classList.add('invalid')
        } else {
            expiryMonthRef.current.classList.remove('invalid')
            expiryYearRef.current.classList.remove('invalid')
            dateErrorRef.current.style.display = 'none';
        }
    }

    function validateCvc () {
        const isCvcEmpty = cvcRef.current.validity.valueMissing;
        // console.log(cvcRef.current.validity.valid)

        if (isCvcEmpty) {
            cvcErrorRef.current.style.display = 'inline-block';
            cvcErrorRef.current.textContent = "Can't be blank";
            cvcRef.current.classList.add('invalid')
        } else {
            cvcRef.current.classList.remove('invalid')
            cvcErrorRef.current.style.display = 'none';
        }

        // if (cvcRef.current.textContent < 3) {
        //     cvcRef.current.validity.valid = false;
        //     cvcErrorRef.current.style.display = 'inline-block';
        //     cvcErrorRef.current.textContent = "Invalid format";
        // } else {
        //     cvcErrorRef.current.style.display = 'none';
        //     cvcRef.current.validity.valid = true;
        // }
    }

    function validateCardNumber () {
        const isCardNumberEmpty = cardNumberRef.current.validity.valueMissing;
        const isCardNumberPatternWrong = cardNumberRef.current.validity.patternMismatch;
        console.log(cardNameRef.current.validity);

        if (isCardNumberEmpty) {
            cardNumberErrorRef.current.style.display = 'inline-block';
            cardNumberErrorRef.current.textContent = "Can't be blank";
            cardNumberRef.current.className += 'invalid'
        } else if (isCardNumberPatternWrong) {
            cardNumberRef.current.classList.add('invalid');
            cardNumberErrorRef.current.style.display = 'inline-block';
            cardNumberErrorRef.current.textContent = "Wrong format, numbers only";
        } else if (!isCardNumberPatternWrong || !isCardNumberEmpty) {
            cardNumberErrorRef.current.style.display = 'none';
            cardNumberRef.current.classList.remove('invalid');
        } //  else if (cardNameRef.current.textContent.length < 19) {
        //     cardNumberErrorRef.current.style.display = 'inline-block';
        //     cardNumberErrorRef.current.textContent = "Wrong format, Too short";
        //     return false; 
        // } else if (cardNameRef.current.value.length === 19) {
        //     cardNumberErrorRef.current.style.display = 'none';
        //   }
    }

    if (!form.checkValidity()) {
      validateCardName();
      validateCardNumber();
      validateExpiryDate();
      validateCvc();
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

  function changeHandler (e) {
    const {name, value} = e.target;

    if (name === 'cardNumber') {
        e.target.value = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
    }

    if (name === 'expiryMonth' || name === 'expiryYear') {
        e.target.value = value.toString().replace(/[^0-9]/g, '').substring(0, 2);
    }

    if (name === 'expiryMonth' && value > 12) {
        e.target.value = '12';
    }

    if (name === 'cvc') {
        e.target.value = value.toString().replace(/[^0-9]/g, '').substring(0, 4);
    }

    setFormData({ ...formData, [name]: e.target.value })

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
            id="cardHolderName"cardNameRef
            placeholder="e.g. Kelechi Ugwu"
            required
            maxLength="21"
            onChange={changeHandler}
            ref={cardNameRef}
          />

          <span className="error name-error" ref={nameErrorRef}>aaa</span>
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
            maxLength="19"
            minLength='19'
            required
            pattern="[0-9 ]*"
            inputMode="numeric"
            onChange={changeHandler}
            ref={cardNumberRef}
          />

          <span className="error card-no-error" ref={cardNumberErrorRef}></span>
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
                onChange={changeHandler}
                ref={expiryMonthRef}
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
                onChange={changeHandler}
                ref={expiryYearRef}
              />
            </div>

            <span className="error date-error" ref={dateErrorRef}></span>
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
              maxLength="4"
              minLength="3"
              required
              pattern="[0-9]*"
              inputMode="numeric"
              onChange={changeHandler}
              ref={cvcRef}
            />
            <span className="error cvc-error" ref={cvcErrorRef}></span>
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
