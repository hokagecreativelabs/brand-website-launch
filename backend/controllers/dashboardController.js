const Registration = require('../models/Registration');

const getDashboardStats = async (req, res) => {
  try {
    const registrations = await Registration.find();

    const totalRegistrations = registrations.length;

    const uniqueCountries = new Set(registrations.map(r => r.country));
    const totalCountries = uniqueCountries.size;

    const uniqueEmails = new Set(registrations.map(r => r.email));
    const totalEmails = uniqueEmails.size;

    return res.status(200).json({
      stats: {
        totalRegistrations,
        totalCountries,
        totalEmails,
      },
    });
  } catch (err) {
    console.error('Dashboard stats error:', err);
    return res.status(500).json({ error: 'Failed to load dashboard stats' });
  }
};

module.exports = { getDashboardStats };
