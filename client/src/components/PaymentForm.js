import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_OPTIONS = {
    iconStyle:"solid",
    style:{
        base:{
            iconColor:"#c4f0ff",
            color:"#fff",
            fontWeight:"500",
            fontFamily:"Helvetica",
            fontSize:"16px",
            fontSmoothing:"antialiased",
            ":webkit-autofill":{color:"#fco8883"},
            ":placeholder":{color:"#87bbfd"}
        },
        invalid:{
          iconColor:"#ffc7ee",
          color:"#ffc7ee"
        }
    }
}

function PaymentForm() {
  const [sucess, setSucess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [error, paymentMethod] = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.path("http://localhost:4000/payment", {
          amount: 1000,
          id,
        });
        if (response.data.sucess) {
          console.log("Success");
          setSucess(true);
        }
      } catch (error) {
        console.log("Error: " + error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!sucess ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>Pay</button>
        </form>
      ) : (
        <div>
          <h2>Hello</h2>
        </div>
      )}
    </>
  );
}

export default PaymentForm;
