import { useState } from "react";

export default function EmailPreferences() {
  const [promos, setPromos] = useState(true);
  const [updates, setUpdates] = useState(true);
  const [order, setOrder] = useState(true);

  return (
    <div className="container-custom py-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Email Preferences</h1>
      <div className="space-y-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={promos} onChange={() => setPromos(v => !v)} />
          Receive promotional emails
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={updates} onChange={() => setUpdates(v => !v)} />
          Receive product updates
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={order} onChange={() => setOrder(v => !v)} />
          Receive order notifications
        </label>
      </div>
    </div>
  );
}
