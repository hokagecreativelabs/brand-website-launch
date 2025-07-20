'use client';

import { useEffect, useState } from 'react';
import { MdOutlineGroupAdd } from 'react-icons/md';
import { LuMapPin } from 'react-icons/lu';
import { FaGlobeAfrica } from 'react-icons/fa';

export default function AdminDashboard() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/register');
        const data = await res.json();

        if (res.ok && data.data) {
          setRegistrations(data.data);
        } else {
          console.error('Unexpected response format:', data);
        }
      } catch (err) {
        console.error('Failed to fetch registration stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const total = registrations.length;

  const countries = new Set(
    registrations.map((r) => (r.country?.trim() || 'Unknown').toLowerCase())
  );

  return (
    <section className="p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {loading ? (
        <p className="text-gray-500">Loading stats...</p>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MdOutlineGroupAdd size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Registrations</p>
              <h2 className="text-xl font-bold">{total}</h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <FaGlobeAfrica size={24} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Countries Participating</p>
              <h2 className="text-xl font-bold">{countries.size}</h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-full">
              <LuMapPin size={24} className="text-red-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Most Recent Country</p>
              <h2 className="text-xl font-bold">
                {registrations[0]?.country || 'N/A'}
              </h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
