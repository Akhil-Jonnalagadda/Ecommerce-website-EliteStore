import React from "react";

export default function StoreLocator() {
  const [query, setQuery] = React.useState("");
  const [result, setResult] = React.useState<string | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock result
    setResult("EliteStore - 123 Commerce St, New York, NY 10001");
  };
  return (
    <div className="container-custom py-16 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Store Locator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:border-primary"
          placeholder="Enter city or zip code"
          required
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-primary-foreground rounded font-semibold"
        >
          Find Store
        </button>
      </form>
      {result && <div className="mt-4 p-4 bg-success/10 border border-success rounded text-success font-medium">{result}</div>}
    </div>
  );
}
