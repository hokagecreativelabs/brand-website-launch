'use client';

import { useEffect, useState, useMemo } from 'react';
import { CSVLink } from 'react-csv';
import { FiTrash2, FiSearch, FiFilter, FiX, FiDownload, FiChevronDown, FiMail, FiPhone, FiMapPin, FiUser, FiBookOpen, FiCalendar } from 'react-icons/fi';

export default function AdminRegistrationsPage() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [registrationToDelete, setRegistrationToDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const fetchRegistrations = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/register');
      const data = await res.json();

      if (data.success) {
        setRegistrations(data.data);
      }
    } catch (err) {
      console.error('Error fetching registrations:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!registrationToDelete) return;
    
    setDeleting(true);
    try {
      const res = await fetch(`http://localhost:5000/api/register/${registrationToDelete._id}`, {
        method: 'DELETE',
      });
      
      if (res.ok) {
        // Remove from state
        const updatedRegistrations = registrations.filter(reg => reg._id !== registrationToDelete._id);
        setRegistrations(updatedRegistrations);
        setShowDeleteModal(false);
        setRegistrationToDelete(null);
      } else {
        console.error('Failed to delete registration');
        alert('Failed to delete registration. Please try again.');
      }
    } catch (err) {
      console.error('Error deleting registration:', err);
      alert('Error deleting registration. Please try again.');
    } finally {
      setDeleting(false);
    }
  };
  
  const openDeleteModal = (registration) => {
    setRegistrationToDelete(registration);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setRegistrationToDelete(null);
  };

  const openExportModal = () => {
    setShowExportModal(true);
  };

  const closeExportModal = () => {
    setShowExportModal(false);
  };

  // Improved search and filter logic using useMemo for performance
  const filteredRegistrations = useMemo(() => {
    let filtered = [...registrations];

    // Apply search filter - comprehensive search across all fields
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(reg => {
        const searchableFields = [
          reg.fullName || '',
          reg.email || '',
          reg.phone ? reg.phone.toString() : '',
          reg.country || '',
          reg.motivation || '',
          reg.level || '',
          // Also search in formatted date
          reg.submittedAt ? new Date(reg.submittedAt).toLocaleDateString() : ''
        ];
        
        return searchableFields.some(field => 
          field.toLowerCase().includes(searchLower)
        );
      });
    }

    // Apply level filter
    if (filterLevel) {
      filtered = filtered.filter(reg => reg.level === filterLevel);
    }

    // Apply country filter
    if (filterCountry) {
      filtered = filtered.filter(reg => reg.country === filterCountry);
    }

    return filtered;
  }, [registrations, searchTerm, filterLevel, filterCountry]);

  const clearFilters = () => {
    setSearchTerm('');
    setFilterLevel('');
    setFilterCountry('');
    setCurrentPage(1);
  };

  const hasActiveFilters = searchTerm.trim() || filterLevel || filterCountry;

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterLevel, filterCountry]);

  // Pagination logic
  const totalItems = filteredRegistrations.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredRegistrations.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  // Get unique values for filter dropdowns
  const uniqueLevels = [...new Set(registrations.map(reg => reg.level).filter(Boolean))];
  const uniqueCountries = [...new Set(registrations.map(reg => reg.country).filter(Boolean))];

  useEffect(() => {
    fetchRegistrations();
  }, []);

  return (
    <div className="p-4 max-w-full mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-[#3D3C42]">
          Registrations ({totalItems})
        </h1>
        <button
          onClick={openExportModal}
          className="bg-[#3D3C42] hover:bg-[#3F2E3E] text-white px-4 py-2 rounded transition-colors flex items-center gap-2"
        >
          <FiDownload size={16} />
          Export
          <FiChevronDown size={14} />
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Enhanced Search */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, phone, country, level..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7F5283] focus:border-[#7F5283] outline-none"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FiX size={16} />
                </button>
              )}
            </div>
            {searchTerm && (
              <div className="text-xs text-gray-500 mt-1">
                {filteredRegistrations.length} result{filteredRegistrations.length !== 1 ? 's' : ''} found
              </div>
            )}
          </div>

          {/* Level Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Level
            </label>
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7F5283] focus:border-[#7F5283] outline-none"
            >
              <option value="">All Levels</option>
              {uniqueLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          {/* Country Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#7F5283] focus:border-[#7F5283] outline-none"
            >
              <option value="">All Countries</option>
              {uniqueCountries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          <div>
            <button
              onClick={clearFilters}
              disabled={!hasActiveFilters}
              className={`w-full md:w-auto px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2 ${
                hasActiveFilters 
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                  : 'bg-gray-50 text-gray-400 cursor-not-allowed'
              }`}
            >
              <FiX size={16} />
              Clear Filters
            </button>
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#7F5283] text-white text-xs rounded-md">
                  Search: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm('')}
                    className="hover:bg-[#6B4570] rounded-full p-0.5"
                  >
                    <FiX size={12} />
                  </button>
                </span>
              )}
              {filterLevel && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
                  Level: {filterLevel}
                  <button
                    onClick={() => setFilterLevel('')}
                    className="hover:bg-blue-200 rounded-full p-0.5"
                  >
                    <FiX size={12} />
                  </button>
                </span>
              )}
              {filterCountry && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-md">
                  Country: {filterCountry}
                  <button
                    onClick={() => setFilterCountry('')}
                    className="hover:bg-green-200 rounded-full p-0.5"
                  >
                    <FiX size={12} />
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#7F5283]"></div>
          <span className="ml-2 text-gray-600">Loading...</span>
        </div>
      ) : filteredRegistrations.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            {registrations.length === 0 
              ? 'No registrations yet.' 
              : hasActiveFilters 
                ? 'No registrations match your search criteria.' 
                : 'No registrations found.'
            }
          </p>
          {registrations.length > 0 && hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="mt-2 text-[#7F5283] hover:text-[#3F2E3E] underline"
            >
              Clear all filters to see all registrations
            </button>
          )}
        </div>
      ) : (
        <>
          {/* Pagination Info */}
          {totalPages > 1 && (
            <div className="mb-4 text-sm text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems} registrations
              {hasActiveFilters && ` (filtered from ${registrations.length} total)`}
            </div>
          )}
          
          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Country
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Level
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Motivation
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentItems.map((reg) => (
                    <tr key={reg._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-[#7F5283]">
                          {reg.fullName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{reg.email}</div>
                        <div className="text-sm text-gray-500">{reg.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {reg.country}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {reg.level}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate" title={reg.motivation}>
                          {reg.motivation}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(reg.submittedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => openDeleteModal(reg)}
                          className="text-red-600 hover:text-red-800 transition-colors"
                          title="Delete"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile/Tablet Card View */}
          <div className="lg:hidden grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            {currentItems.map((reg) => (
              <div
                key={reg._id}
                className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-lg font-semibold text-[#7F5283] pr-2">
                    {reg.fullName}
                  </h2>
                  <button
                    onClick={() => openDeleteModal(reg)}
                    className="text-red-600 hover:text-red-800 transition-colors p-1"
                    title="Delete"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <FiMail className="text-[#7F5283] flex-shrink-0" size={14} />
                    <span className="font-medium">Email:</span>
                    <span className="truncate">{reg.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FiPhone className="text-[#7F5283] flex-shrink-0" size={14} />
                    <span className="font-medium">Phone:</span>
                    <span>{reg.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FiMapPin className="text-[#7F5283] flex-shrink-0" size={14} />
                    <span className="font-medium">Country:</span>
                    <span>{reg.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiBookOpen className="text-[#7F5283] flex-shrink-0" size={14} />
                    <span className="font-medium text-gray-700">Level:</span>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {reg.level}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700">
                    <FiUser className="text-[#7F5283] flex-shrink-0 mt-0.5" size={14} />
                    <span className="font-medium">Motivation:</span>
                  </div>
                  <div className="text-gray-600 line-clamp-3 ml-5 text-xs leading-relaxed">
                    {reg.motivation}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs mt-3 pt-2 border-t border-gray-100">
                    <FiCalendar className="text-[#7F5283] flex-shrink-0" size={12} />
                    <span className="font-medium">Submitted:</span>
                    <span>
                      {new Date(reg.submittedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-700">
                Page {currentPage} of {totalPages}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                
                {/* Page numbers */}
                <div className="flex items-center gap-1">
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    const isCurrentPage = pageNumber === currentPage;
                    
                    // Show first page, last page, current page, and pages around current page
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => goToPage(pageNumber)}
                          className={`px-3 py-2 text-sm border rounded-md ${
                            isCurrentPage
                              ? 'bg-[#7F5283] text-white border-[#7F5283]'
                              : 'border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    } else if (
                      pageNumber === currentPage - 2 ||
                      pageNumber === currentPage + 2
                    ) {
                      return (
                        <span key={pageNumber} className="px-2 py-2 text-sm text-gray-500">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>
                
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Export Modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Export Registrations
              </h3>
              <button
                onClick={closeExportModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>
            
            <p className="text-gray-600 mb-6 text-sm">
              Choose what data you'd like to export to CSV format:
            </p>
            
            <div className="space-y-3">
              {/* Export Current Page */}
              <CSVLink
                data={currentItems}
                filename={`registrations-page-${currentPage}-${new Date().toISOString().split('T')[0]}.csv`}
                className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#7F5283] hover:bg-gray-50 transition-colors group"
                onClick={closeExportModal}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <FiDownload className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Current Page</div>
                    <div className="text-sm text-gray-500">
                      Export {currentItems.length} visible registration{currentItems.length !== 1 ? 's' : ''}
                    </div>
                  </div>
                </div>
                <FiChevronDown className="text-gray-400 rotate-[-90deg]" size={16} />
              </CSVLink>
              
              {/* Export All Filtered Data */}
              <CSVLink
                data={filteredRegistrations}
                filename={`all-registrations-${new Date().toISOString().split('T')[0]}.csv`}
                className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#7F5283] hover:bg-gray-50 transition-colors group"
                onClick={closeExportModal}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <FiDownload className="text-green-600" size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">All Data</div>
                    <div className="text-sm text-gray-500">
                      Export all {filteredRegistrations.length} filtered registration{filteredRegistrations.length !== 1 ? 's' : ''}
                    </div>
                  </div>
                </div>
                <FiChevronDown className="text-gray-400 rotate-[-90deg]" size={16} />
              </CSVLink>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={closeExportModal}
                className="w-full px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Confirm Delete
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete the registration for{' '}
              <strong>{registrationToDelete?.fullName}</strong>? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={closeDeleteModal}
                disabled={deleting}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {deleting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Deleting...
                  </>
                ) : (
                  'Delete'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}