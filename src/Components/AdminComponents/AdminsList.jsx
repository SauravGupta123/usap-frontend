import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminsList() {
  const [admins, setAdmins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const adminsPerPage = 10; // Number of admins to display per page

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/admin/getAllSubAdmins`);
 
        setAdmins(response.data?.subAdmins.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))|| []);
      } catch (error) {
        console.error('Error fetching admins:', error);
        toast.error('Failed to fetch admins.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchAdmins();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Pagination logic
  const indexOfLastAdmin = currentPage * adminsPerPage;
  const indexOfFirstAdmin = indexOfLastAdmin - adminsPerPage;
  const currentAdmins = admins.slice(indexOfFirstAdmin, indexOfLastAdmin);

  const totalPages = Math.ceil(admins.length / adminsPerPage);

  if (isLoading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <>
    <div className="absolute right-20 inline-flex items-center bg-blue-100 text-black px-4 py-2 rounded-full shadow-md transition-all hover:bg-blue-200 ">
      <span className="font-semibold text-sm">Total: {admins.length}</span>
    </div>
      <div className="overflow-x-auto border-2 shadow-md sm:rounded-lg mt-14">
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs font-poppins text-black uppercase bg-gray-50">
            <tr>
              <th className="px-4 py-3">S.No</th>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Admin Type</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Created At</th>
            </tr>
          </thead>
          <tbody>
            {currentAdmins.map((admin, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
                <td className='px-6 py-4'> {index+1}</td>
                <td className="px-6 py-4">{admin.userName}</td>
                <td className="px-6 py-4">{admin.name}</td>
                <td className="px-6 py-4">{admin.email}</td>
                <td className="px-6 py-4">{admin.adminType}</td>
                <td className="px-6 py-4">{admin.category ? admin.category : "NA"}</td>
                <td className="px-6 py-4">{new Date(admin.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <nav className="inline-flex rounded-md shadow">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-black hover:bg-gray-50 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-black">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-black hover:bg-gray-50 disabled:opacity-50"
          >
            Next
          </button>
        </nav>
      </div>

      <ToastContainer />
    </>
  );
}

export default AdminsList;
