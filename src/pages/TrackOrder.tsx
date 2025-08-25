import React from "react";

export default function TrackOrder() {
  const [orderNumber, setOrderNumber] = React.useState("");
  const [status, setStatus] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setStatus(null);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      if (!orderNumber || orderNumber.length < 5) {
        setError("Please enter a valid order number.");
      } else {
        // Mock status
        setStatus("Order #" + orderNumber + " is shipped and on its way!");
      }
    }, 1200);
  };

  return (
    <div className="container-custom py-16 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Track Order</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="orderNumber" className="block font-medium text-foreground mb-1">Order Number</label>
        <input
          id="orderNumber"
          type="text"
          value={orderNumber}
          onChange={e => setOrderNumber(e.target.value)}
          className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:border-primary"
          placeholder="Enter your order number"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-primary-foreground rounded font-semibold"
          disabled={loading}
        >
          {loading ? "Checking..." : "Track Order"}
        </button>
      </form>
      {error && <div className="text-destructive mt-4">{error}</div>}
      {status && <div className="mt-4 p-4 bg-success/10 border border-success rounded text-success font-medium">{status}</div>}
    </div>
  );
}
