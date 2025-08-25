import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51Rj28fFl4Qkf8hQYAMdkEW4bt4HZleqpPtJYwo4EtSrKigzNk24hNzFHpogGhgyixxtLHEwM9Nz1jnwspYP70OqB00enl4rHPF");

export default function StripeCheckout({ clientSecret }) {
  const options = { clientSecret, appearance: { theme: 'stripe' } };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}
