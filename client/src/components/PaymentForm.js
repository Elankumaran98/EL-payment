import React,{useState} from 'react'
import {CardElement,useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import axios from 'axios'

function PaymentForm() {
    const [sucess,setSucess]=useState(false)
    const stripe=useStripe()
    const elements=useElements()
  return (
    <div>PaymentForm</div>
  )
}

export default PaymentForm