import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

function StripeContainer() {
    const PUBLIC_KEY="pk_test_51Jfc2aKsqvt4VygRGr7GHuYcMdvmThDyLmHMPz5W6l9EVVtUVfL0TcI5oEfvnIFEFUVazuHwxT6tz2VgzzqpcwtU00nxjVWf7p"
    const stripePromise=loadStripe(PUBLIC_KEY)
  return (
    <Elements stripe={stripePromise}>
        <PaymentForm/>
    </Elements>
  )
}

export default StripeContainer