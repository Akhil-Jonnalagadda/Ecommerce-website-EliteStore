import React from "react";

export default function GiftCards() {
  const [amount, setAmount] = React.useState("");
  const [recipient, setRecipient] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };
  return (
    <div className="container-custom py-16 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Gift Cards</h1>
      <p className="text-muted-foreground text-lg mb-6">Give the gift of choice! Purchase EliteStore gift cards for friends and family.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          min="10"
          max="500"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:border-primary"
          placeholder="Gift card amount ($10-$500)"
          required
        />
        <input
          type="email"
          value={recipient}
          onChange={e => setRecipient(e.target.value)}
          className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:border-primary"
          placeholder="Recipient's email"
          required
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-primary-foreground rounded font-semibold"
        >
          Purchase Gift Card
        </button>
      </form>
      {success && <div className="mt-4 p-4 bg-success/10 border border-success rounded text-success font-medium">Gift card purchased successfully!</div>}
    </div>
  );
}
