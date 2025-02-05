import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserTable = ({ users, requestType, refreshUsers, currentPage, totalPages, onPageChange }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAction = (userId, action) => {
    setSelectedUserId(userId);
    setSelectedAction(action);
    setShowDialog(true);
  };

  const getActionButtons = (user) => {
    switch (requestType) {
      case 'pendingApprovals':
        return (
          <>
            <button
              onClick={() => handleAction(user._id, 'approve')}
              className="font-medium text-green-600 hover:underline mr-2"
            >
              Approve
            </button>
            <button
              onClick={() => handleAction(user._id, 'block')}
              className="font-medium text-red-600 hover:underline"
            >
              Block
            </button>
          </>
        );
      case 'ActiveUsers':
        return (
          <button
            onClick={() => handleAction(user._id, 'block')}
            className="font-medium text-red-600 hover:underline"
          >
            Block
          </button>
        );
      case 'blockedUsers':
        return (
          <button
            onClick={() => handleAction(user._id, 'unblock')}
            className="font-medium text-blue-600 hover:underline"
          >
            Unblock
          </button>
        );
      default:
        return null;
    }
  };

  const handleConfirmAction = async () => {
    const waitToastId = toast.info("Please wait...", { autoClose: false });
    setIsLoading(true);
    try {
      let userStatus;
  
      switch (selectedAction) {
        case 'approve':
          userStatus = 'active';
          break;
        case 'block':
          userStatus = 'blocked';
          break;
        case 'unblock':
          userStatus = 'active';
          break;
        default:
          throw new Error('Invalid action');
      }
  
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/changeUserStatus`, {
        userId: selectedUserId,
        status: userStatus,
      });
  
      toast.dismiss(waitToastId);
  
      if (response.status === 200) {
        toast.success(`User ${selectedAction}ed successfully!`);
        setShowDialog(false);
        refreshUsers(); // Call the function to refresh the user list
      } else {
        toast.error(`Failed to ${selectedAction} user.`);
      }
    } catch (error) {
      toast.dismiss(waitToastId);
      console.error(`Error ${selectedAction}ing user:`, error);
      toast.error(`Failed to ${selectedAction} user.`);
    } finally {
      setIsLoading(false);
    }
  };
  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  };

  return (
    <>
      <div className='overflow-x-auto border-2 shadow-md sm:rounded-lg max-h-[70vh]'>
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs font-poppins text-black uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">ISAF ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone No</th>
              <th className="px-6 py-3">Degree</th>
              <th className="px-6 py-3">Year</th>
              <th className="px-6 py-3">Country</th>
              <th className="px-6 py-3">Membership Type</th>
              <th className="px-6 py-3">Joined On</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
                <td className="px-6 py-4">{user.ISAFid}</td>
                <td className="px-6 py-4">{`${user.firstName} ${user.lastName}`}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phoneNo}</td>
                <td className="px-6 py-4">{user.degree}</td>
                <td className="px-6 py-4">{user.year}</td>
                <td className="px-6 py-4">{user.countryResiding}</td>
                <td className="px-6 py-4">{user.membershipType}</td>
                <td className="px-6 py-4">{formatDate(user.createdAt)}</td>
                <td className="px-6 py-4">
                  {getActionButtons(user)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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

      {/* Dialog box */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Confirm Action</h2>
            <p>Are you sure you want to {selectedAction} this user?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCloseDialog}
                className="px-4 py-2 bg-gray-300 rounded-md mr-2 disabled:opacity-50"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAction}
                className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default UserTable;