// Stripe frontend integration example
import { useState } from "react";
import StripeCheckout from "./StripeCheckout";

const STRIPE_PUBLISHABLE_KEY = "pk_test_51Rj28fFl4Qkf8hQYAMdkEW4bt4HZleqpPtJYwo4EtSrKigzNk24hNzFHpogGhgyixxtLHEwM9Nz1jnwspYP70OqB00enl4rHPF";

export default function StripePayButton({ amount, onPay }) {
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);

  const handlePay = async () => {
    if (onPay) onPay();
    setLoading(true);
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4242";
      const res = await fetch(`${backendUrl}/create-payment-intent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency: "usd" })
      });
      const data = await res.json();
      console.log('Stripe response:', data);
      if (!data.clientSecret) {
        alert('Payment initialization failed: ' + (data.error || 'No client secret returned'));
        setLoading(false);
        return;
      }
      setClientSecret(data.clientSecret);
      setShowCheckout(true);
    } catch (err) {
      console.error('StripePayButton error:', err);
      alert('Payment error: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <button onClick={handlePay} disabled={loading} style={{padding: '10px 20px', background: '#635bff', color: '#fff', border: 'none', borderRadius: '4px'}}>
        {loading ? "Processing..." : "Proceed to Checkout"}
      </button>
      {showCheckout && clientSecret && (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{background: '#fff', padding: 32, borderRadius: 8, minWidth: 350}}>
            <StripeCheckout clientSecret={clientSecret} />
            <button onClick={() => setShowCheckout(false)} style={{marginTop: 16}}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
