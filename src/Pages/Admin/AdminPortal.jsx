import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Slider from '../../Components/AdminComponents/Sidebar';
import { LuMenu } from 'react-icons/lu';
import { IconButton } from '@material-tailwind/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from '../../Components/AdminComponents/Table';
import UserTable from '../../Components/AdminComponents/UserTable';
import UserFilter from '../../Components/AdminComponents/UserFilter';
import {useAuth} from '../../utils/adminAuth';
import RequestFilter from '../../Components/AdminComponents/RequestFilter';
import AdminsList from '../../Components/AdminComponents/AdminsList';
const AdminPortal = () => {
    useAuth();
    const navigate = useNavigate();
    const [toggleSlider, setToggleSlider] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [requests, setRequests] = useState([]);
    const [filteredRequests, setFilteredRequests] = useState([]);
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const itemsPerPage = 5;
    const [requestType, setRequestType] = useState('pendingApprovals');
   const [filters, setFilters] = useState({});
   const [subAdmins, setSubAdmins] = useState([]);

   
    useEffect(() => {
        applyFilters();
    }, [filters, requestType, users, requests]);

    const fetchData = async () => {
        try {
            // Fetch user data
            const userResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/getAllUsers`);
             const users = userResponse?.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setUsers(users);
    
            // Fetch enquiry data
            const enquiryResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/enquiry/getAllEnquiries`);
            const enquiries = enquiryResponse?.data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    
            // Fetch sub-admin data
            const subAdminResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/admin/getAllSubAdmins`);
            setSubAdmins(subAdminResponse.data.subAdmins);
            console.log("Sub Admins", subAdminResponse.data.subAdmins);
    
            // Combine user data with enquiry data
            const combinedRequests = enquiries.map(enquiry => {
                const user = users.find(user => user.email === enquiry.requestedBy.email);
                return {
                    ...enquiry,
                    requestedBy: {
                        ...enquiry.requestedBy,
                        ...user,
                    },
                };
            });
    
            // Set the combined data to the state
            setRequests(combinedRequests);
    
        } catch (error) {
            // General error handling for the whole request chain
            if (error.response) {
                // The request was made and the server responded with a status code out of the range 2xx
                console.error(`Error Response: ${error.response.status} - ${error.response.data}`);
            } else if (error.request) {
                // The request was made but no response was received
                console.error("No response received from server:", error.request);
            } else {
                // Something happened in setting up the request
                console.error("Error in setting up the request:", error.message);
            }
    
            // Show a toast notification with error details
            toast.error("Failed to fetch data. Please check your connection or try again later.");
    
            // Optional: you can also reset or clear the state to avoid inconsistent state issues
            setUsers([]);
            setSubAdmins([]);
            setRequests([]);
        }
    };
    
    useEffect(() => {
        const token = "abcsd";
        if (!token) {
            navigate('/login');
        } else {
            fetchData();
        }
    }, [navigate]);




    const applyFilters = () => {
       
        // Filter users
        if (users.length > 0) {
            let statusFilteredUsers;
            switch (requestType) {
                case 'pendingApprovals':
                    statusFilteredUsers = users.filter(user => user.userStatus === 'pending');
                    break;
                case 'ActiveUsers':
                    statusFilteredUsers = users.filter(user => user.userStatus === 'active');
                    break;
                case 'blockedUsers':
                    statusFilteredUsers = users.filter(user => user.userStatus === 'blocked');
                    break;
                default:
                    statusFilteredUsers = [];
            }

            const filteredUsers = statusFilteredUsers.filter(user => {
                const joinDate = new Date(user.createdAt);
                return (
                    (!filters.country || user.countryResiding === filters.country) &&
                    (!filters.degree || user.degree === filters.degree) &&
                    (!filters.membershipType || user.membershipType === filters.membershipType) &&
                    (!filters.startDate || joinDate >= filters.startDate) &&
                    (!filters.endDate || joinDate <= filters.endDate)
                );
            });
         
            setFilteredUsers(filteredUsers);
        }
           // Filter requests
           if (requests.length > 0) {
            let statusFilteredRequests;
            if (requestType === 'pending') {
                statusFilteredRequests = requests.filter(request => !request.isFulfilled);
            } else if (requestType === 'completed') {
                statusFilteredRequests = requests.filter(request => request.isFulfilled);
            } else {
                statusFilteredRequests = requests;
            }
  
            const filteredRequests = statusFilteredRequests.filter(request => {
                const requestDate = new Date(request.updatedAt);
                return (
                    (!filters.degree || request.requestedBy.degree === filters.degree) &&
                    (!filters.residenceCardType || request.requestedBy.residenceCardType === filters.residenceCardType) &&
                    (!filters.startDate || requestDate >= filters.startDate) &&
                    (!filters.endDate || requestDate <= filters.endDate) &&
                    (!filters.rating || request.rating == filters.rating) &&
                    (!filters.requestFor || request.requestFor === filters.requestFor)
                );
            });
    
      
            setFilteredRequests(filteredRequests);
        }



        setCurrentPage(1); // Reset to the first page after applying filters
    };


    const handleFilterChange = (newFilters) => {
        console.log("setting new Filters", newFilters);
        setFilters(newFilters);
        
    };

    // const handleRequestFilterChange = (newFilters) => {
        
    //     setFilters(newFilters);
    // };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const refreshData = () => {
        fetchData();
    };

    useEffect(() => {
        const adminToken = localStorage.getItem('adminToken');
        const adminUserName = localStorage.getItem('adminUserName');
        if (!adminToken || !adminUserName) {
            navigate('/admin/login');
        }
    }, [navigate]);

    const renderTable = () => {
        if (['pendingApprovals', 'ActiveUsers', 'blockedUsers'].includes(requestType)) {
            const indexOfLastUser = currentPage * itemsPerPage;
            const indexOfFirstUser = indexOfLastUser - itemsPerPage;
            const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
            const totalUserPages = Math.ceil(filteredUsers.length / itemsPerPage);

            return (
                <>
                    <UserFilter onFilterChange={handleFilterChange} count={filteredUsers.length} />
                    <UserTable
                        requestType={requestType}
                        users={currentUsers}
                        refreshUsers={refreshData}
                        currentPage={currentPage}
                        totalPages={totalUserPages}
                        onPageChange={handlePageChange}
                    />
                </>
            );
        } 
        else if(requestType === 'adminsList') {
            return (
                <AdminsList
                    subAdmins={subAdmins}
                    reFetchData={refreshData}
                />
            );
        }
        else {
            const indexOfLastRequest = currentPage * itemsPerPage;
            const indexOfFirstRequest = indexOfLastRequest - itemsPerPage;
            const currentRequests = filteredRequests.slice(indexOfFirstRequest, indexOfLastRequest);
            const totalRequestPages = Math.ceil(filteredRequests.length / itemsPerPage);

            return (
                <>
                    <RequestFilter onFilterChange={handleFilterChange} count={filteredRequests.length} />
                    <Table
                        requestType={requestType}
                        subAdmins={subAdmins}
                        requests={currentRequests}
                        currentPage={currentPage}
                        totalPages={totalRequestPages}
                        onPageChange={handlePageChange}
                        reFetchData={refreshData}
                    />
                </>
            );
        }
    };

    return (
        <div className='flex items-start justify-center'>
            <ToastContainer />
            {toggleSlider && <Slider setRequestType={setRequestType} setFilters={handleFilterChange} />}

            <div className='w-full h-[100vh]'>
              

                <div className='w-full flex justify-center mt-4'>
                    <div className='w-[100%] max-w-[73rem]'>
                        {renderTable()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPortal;