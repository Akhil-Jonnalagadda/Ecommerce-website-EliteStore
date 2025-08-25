import { useState } from "react";

export default function SavedAddresses() {
  const [addresses, setAddresses] = useState([
    "123 Main Street, City, State 12345",
    "456 Oak Avenue, Town, State 67890"
  ]);
  const [newAddr, setNewAddr] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (newAddr.trim()) {
      setAddresses([...addresses, newAddr.trim()]);
      setNewAddr("");
    }
  };

  return (
    <div className="container-custom py-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Saved Addresses</h1>
      <ul className="mb-6 space-y-2">
        {addresses.map((addr, i) => (
          <li key={i} className="border rounded px-3 py-2">{addr}</li>
        ))}
      </ul>
      <form onSubmit={handleAdd} className="flex gap-2">
        <input type="text" value={newAddr} onChange={e => setNewAddr(e.target.value)} placeholder="Add new address" className="flex-1 border rounded px-3 py-2" />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Add</button>
      </form>
    </div>
  );
}
