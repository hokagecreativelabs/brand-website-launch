'use client';
import { useState } from 'react';

export default function RegistrationForm() {
  const [form, setForm] = useState({ name: '', email: '', experience: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      setForm({ name: '', email: '', experience: '' });
    } else {
      alert('Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-md shadow">
      {success && <p className="text-green-600 mb-4">Registration successful!</p>}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Full Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 text-sm font-medium">Experience Level</label>
        <select
          name="experience"
          value={form.experience}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        >
          <option value="">Select</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-[#3D3C42] text-white px-6 py-3 rounded hover:bg-[#3F2E3E]"
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
