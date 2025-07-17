'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

export default function BootcampRegister() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    motivation: '',
    level: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.info('Submitting your registration...');

    try {
      const response = await fetch('/api/send-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Registration sent successfully!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          country: '',
          motivation: '',
          level: '',
        });
      } else {
        toast.error('Failed to send registration. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };


  return (
    <section className="bg-white min-h-screen py-16 px-2">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 border border-[#A6D1E6]">
        <h1 className="text-2xl font-bold text-[#7F5283] mb-2 text-center">Register for the August 2025 Bootcamp</h1>
        <p className="text-gray-600 text-center mb-8">Fill the form below to join Hokage Creative Labs Academy</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#7F5283] focus:border-[#7F5283]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#7F5283] focus:border-[#7F5283]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#7F5283] focus:border-[#7F5283]"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              required
              value={formData.country}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#7F5283] focus:border-[#7F5283]"
            />
          </div>

          <div>
            <label htmlFor="level" className="block text-sm font-medium text-gray-700">What’s your current experience level?</label>
            <select
              name="level"
              id="level"
              required
              value={formData.level}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:ring-[#7F5283] focus:border-[#7F5283]"
            >
              <option value="">Select level</option>
              <option value="beginner">Beginner</option>
              <option value="familiar">Slightly Familiar</option>
              <option value="comfortable">Comfortable</option>
            </select>
          </div>

          <div>
            <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">Why do you want to join?</label>
            <textarea
              name="motivation"
              id="motivation"
              required
              rows={4}
              value={formData.motivation}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#7F5283] focus:border-[#7F5283]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple hover:bg-white text-white hover:text-purple hover:border hover:border-2 font-semibold py-3 px-6 rounded-md transition"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </section>
  );
}
