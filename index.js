const form = $("form");

const btn = $("button");
const completedState = $(".complete-state");
const formItems = $(".form-item");

const cardName = $("#cardHolderName");
const nameOnCard = $(".card-name");

const cardNumber = $("#cardNumber");
const numOnCard = $(".card-number");

const expiryMonth = $("#expiryMonth");
const monthOnCard = $(".month");

const expiryYear = $("#expiryYear");
const yearOnCard = $(".year");

const cvc = $("#cvc");
const cvcOnCard = $(".cvc");

const nameErr = $(".name-error");
const cardNoErr = $(".card-no-error");

// ACTIVE CARD STATES

cardName.keyup(function (e) {
  nameOnCard.text(e.target.value.toUpperCase());
});

cardNumber.keyup(function (e) {
  numOnCard.text(e.target.value.replace(/(.{4})/g, "$1 "));
});

expiryMonth.keyup(function (e) {
  monthOnCard.text(e.target.value);
});

expiryYear.keyup(function (e) {
  yearOnCard.text(e.target.value);
});

cvc.keyup(function (e) {
  cvcOnCard.text(e.target.value);
});

// ACTIVE INPUT STATES

cardNumber.change(function (e) {
  $(this).val(e.target.value.replace(/(.{4})/g, "$1 "));
  const isCardPatternMismatch = cardNumber[0].validity.patternMismatch;

  if (isCardPatternMismatch) {
    cardNumber.addClass("invalid-input");
    cardNoErr.css("display", "inline-block");
    cardNoErr.text("Wrong format, numbers only");
  } else {
    cardNumber.removeClass("invalid-input");
    cardNoErr.css("display", "none");
  }
});

// INPUT VALIDATION

function validatecardName() {
  const isCardNameValid = cardName[0].validity.valid;

  if (!isCardNameValid) {
    cardName.addClass("invalid-input");
    nameErr.css("display", "inline-block");
    nameErr.text("Can't be blank");
  } else {
    nameErr.css("display", "none");
    cardName.removeClass("invalid-input");
  }
}

function validatecardNumber() {
  const isCardNumberValid = cardNumber[0].validity.valid;

  const isCardTooShort = cardNumber[0].validity.tooShort;

  if (!isCardNumberValid) {
    cardNumber.addClass("invalid-input");
    cardNoErr.css("display", "inline-block");
    cardNoErr.text("Can't be blank");

    // if (isCardPatternMismatch) {
    //     cardNumber.addClass('invalid-input');
    //     cardNoErr.css('display', 'inline-block');
    //     cardNoErr.text('Wrong format, numbers only');
    // }else if (isCardTooShort) {
    //     cardNumber.addClass('invalid-input');
    //     cardNoErr.css('display', 'inline-block');
    //     cardNoErr.text('Too short');
    // }
  }
}

btn.click(function (e) {
  if (!form[0].checkValidity()) {
    validatecardName();
    validatecardNumber();
    console.log("check the inputs");
    e.preventDefault();
  } else {
    formItems.css("display", "none");
    completedState.css("display", "flex");
    $(this).text("Continue");
    e.preventDefault();
  }
});
