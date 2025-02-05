import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Table = ({ requests, currentPage, totalPages, onPageChange, requestType, reFetchData, filters, subAdmins }) => {
  const [selectedEnquiryId, setSelectedEnquiryId] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [selectedAdmin, setSelectedAdmin] = useState({});
  const [confirmAssignDialog, setConfirmAssignDialog] = useState(false); // For assign confirmation
  const [selectedAdminDetails, setSelectedAdminDetails] = useState(null); // Admin to be assigned
  const [assignedAdmins, setAssignedAdmins] = useState({});

  const navigate = useNavigate();

  const handleAdminChange = (enquiryId, userName, adminDetails) => {
    setSelectedAdminDetails({ enquiryId, userName, adminDetails });
    setConfirmAssignDialog(true); // Show confirmation dialog
  };

  const confirmAdminAssignment = async () => {
    try {
      setIsLoading(true);
      const { enquiryId, userName, adminDetails } = selectedAdminDetails;

      // Make the API call to update the admin
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/enquiry/assignRequest`,
        { enquiryId, userName }
      );

      setSelectedAdmin((prev) => ({ ...prev, [enquiryId]: adminDetails.name }));
      toast.success("Admin assigned successfully");
      reFetchData();
      setConfirmAssignDialog(false);
    } catch (error) {
      console.error("Error assigning admin:", error);
      toast.error("Failed to assign admin");
    } finally {
      setIsLoading(false);
    }
  };
  const handleEdit = (enquiryId) => {
    setSelectedEnquiryId(enquiryId);
    setShowDialog(true);
  };

  const handleConfirmCompletion = async () => {
    setIsLoading(true);
    const toastId = toast.info('Processing your request...', { autoClose: false });
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/enquiry/complete/${selectedEnquiryId}`
      );

      if (response.status === 200) {
        let message = response.data?.message || 'Enquiry completed successfully!';
        setShowDialog(false);
        toast.dismiss(toastId);
        toast.success(message);
        reFetchData();
      } else {
        toast.dismiss(toastId);
        toast.error('Failed to complete the enquiry.');
      }
    } catch (error) {
      console.error('Error completing enquiry:', error);
      toast.dismiss(toastId);
      toast.error('Failed to complete the enquiry.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleCloseAssignDialog = () => {
    setConfirmAssignDialog(false);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  };

  function findName(userName) {
    const admin = subAdmins.find(admin => admin.userName === userName);
    return admin?.name || '';
  }

  useEffect(() => {
    const initialAssignments = {};
    requests.forEach(request => {
      if (request.assignedTo) {
        initialAssignments[request.enquiryId] = request.assignedTo;
      }
    });
    setAssignedAdmins(initialAssignments);
  }, [requests]);
  return (
    <>
      <div className='overflow-x-auto border-2 shadow-md sm:rounded-lg max-h-[70vh]'>
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs font-poppins text-black uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Enquiry ID</th>
              {requestType == 'completed' && <th className="px-6 py-3">Assigned To</th>}

              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">ISAF ID</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone No</th>
              <th className="px-6 py-3">Degree</th>
              <th className="px-6 py-3">Year</th>
              <th className="px-6 py-3">Residence Card Type</th>
              <th className="px-6 py-3">Request For</th>
              <th className="px-6 py-3 w-[400px]">Message</th>
              <th className="px-6 py-3">Rating</th>
              <th className="px-6 py-3">Feedback</th>
              {requestType === 'pending' ? (
                <>
                  <th className="px-6 py-3">Assign To</th>
                  <th className="px-6 py-3">Status</th>
                </>
              ) : (
                <th className="px-6 py-3">Remarks</th>
              )}
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => {
              const user = userData[request.enquiryId];

              return (
                <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
                  <td className="px-6 py-4">{request.enquiryId}</td>
                  {requestType === 'completed' && (
                    <td className="px-6 py-3  min-w-[200px]">
                      {request.assignedTo == 'superAdmin'
                        ? 'Super Admin'
                        : `${findName(request.assignedTo)} (${request.assignedTo})`}
                    </td>
                  )}

                  <td className="px-6 py-4">{formatDate(request.updatedAt)}</td>
                  <td className="px-6 py-4">{request.requestedBy?.isafId}</td>
                  <td className="px-6 py-4">{request.requestedBy?.email}</td>
                  <td className="px-6 py-4">{request.requestedBy?.phoneNo}</td>
                  <td className="px-6 py-4">{request.requestedBy?.degree}</td>
                  <td className="px-6 py-4">{request.requestedBy?.year}</td>
                  <td className="px-6 py-4">{request.requestedBy?.residenceCardType}</td>
                  <td className="px-6 py-4">{request.requestFor}</td>
                  <td className="px-6 py-4 min-w-[300px]">{request.message}</td>

                  <td className="px-6 py-4 break-words max-w-xs">{request.rating}</td>
                  <td className="px-6 py-4 break-words max-w-xs">{request.feedback}</td>
                  {requestType === 'pending' ? (
                    <>
                      <td className="px-6 py-4">
                        {request.assignedTo === "superAdmin" ? (
                          // Show dropdown only if assigned to superAdmin
                          <select
                            value={selectedAdmin[request.enquiryId] || ""}
                            onChange={(e) => handleAdminChange(
                              request.enquiryId,
                              e.target.value,
                              subAdmins.find(admin => admin.userName === e.target.value)
                            )}
                            className="border border-gray-300 rounded-md p-1"
                          >
                            <option value="">Select Admin</option>
                            {subAdmins.map((admin) => (
                              <option key={admin.userName} value={admin.userName}>
                                {admin.name}
                              </option>
                            ))}
                          </select>
                        ) : (
                          // Show assigned admin name
                          <div className="text-gray-900  min-w-[200px]">
                            {findName(request.assignedTo)}({request.assignedTo})
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleEdit(request.enquiryId)}
                          className="font-medium text-blue-600 hover:underline"
                        >
                          {request.isFulfilled ? 'Completed' : 'Pending'}
                        </button>
                      </td>
                    </>
                  ) : (
                    <td>Completed</td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Confirmation dialog for assignment */}
      {confirmAssignDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Assign Admin</h2>
            <p>Are you sure you want to assign {selectedAdminDetails?.adminDetails?.name} to enquiry {selectedAdminDetails?.enquiryId}?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCloseAssignDialog}
                className="px-4 py-2 bg-gray-300 rounded-md mr-2"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                onClick={confirmAdminAssignment}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                disabled={isLoading}
              >
                {isLoading ? 'Assigning...' : 'Yes, Assign'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dialog box for completion */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Complete Enquiry</h2>
            <p>Are you sure you want to complete enquiry {selectedEnquiryId}?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCloseDialog}
                className="px-4 py-2 bg-gray-300 rounded-md mr-2"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmCompletion}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                disabled={isLoading}
              >
                {isLoading ? 'Completing...' : 'Yes, Complete'}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center mt-4">
        <nav className="inline-flex rounded-md shadow">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-black hover:bg-gray-50 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-black">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => onPageChange(currentPage + 1)}
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
};

export default Table;
