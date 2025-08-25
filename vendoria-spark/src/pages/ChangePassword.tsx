import { useState } from "react";

export default function ChangePassword() {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!current || !newPass || !confirm) {
      setMessage("Please fill all fields.");
      return;
    }
    if (newPass !== confirm) {
      setMessage("New passwords do not match.");
      return;
    }
    setMessage("Password changed successfully!");
    setCurrent(""); setNewPass(""); setConfirm("");
  };

  return (
    <div className="container-custom py-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Change Password</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Current Password</label>
          <input type="password" value={current} onChange={e => setCurrent(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">New Password</label>
          <input type="password" value={newPass} onChange={e => setNewPass(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Confirm New Password</label>
          <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
        <button type="submit" className="w-full bg-primary text-white py-2 rounded">Change Password</button>
        {message && <div className="text-center text-sm mt-2 text-muted-foreground">{message}</div>}
      </form>
    </div>
  );
}
