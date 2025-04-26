
import { useState } from 'react';

export default function Parent() {
  const [form, setForm] = useState({ parentName: '', startTime: '', hours: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const amount = parseInt(form.hours) * 25 * 100;
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount })
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="p-6">
      <h2>👶 Parent Care Request</h2>
      <input name="parentName" placeholder="Parent Name" onChange={handleChange} className="block mb-2" />
      <input name="startTime" type="datetime-local" onChange={handleChange} className="block mb-2" />
      <input name="hours" type="number" placeholder="Hours" onChange={handleChange} className="block mb-4" />
      <button onClick={handleSubmit}>Request Care</button>
    </div>
  );
}
