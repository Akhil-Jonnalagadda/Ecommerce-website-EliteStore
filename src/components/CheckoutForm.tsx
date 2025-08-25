import React from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    if (!stripe || !elements) {
      setLoading(false);
      return;
    }
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/success"
      },
    });
    if (result.error) {
      setError(result.error.message || "Payment failed");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || loading} style={{marginTop: 16, padding: '10px 20px', background: '#635bff', color: '#fff', border: 'none', borderRadius: '4px'}}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
      {error && <div style={{color: 'red', marginTop: 8}}>{error}</div>}
    </form>
  );
}
