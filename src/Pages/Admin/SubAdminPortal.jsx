import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from '../../Components/SubAdminComponents/Sidebar';
import { LuMenu } from 'react-icons/lu';
import { IconButton } from '@material-tailwind/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from '../../Components/SubAdminComponents/Table';
import UserTable from '../../Components/SubAdminComponents/UserTable';
import UserFilter from '../../Components/SubAdminComponents/UserFilter';
import {subAdminAuth} from '../../utils/adminAuth';
import RequestFilter from '../../Components/SubAdminComponents/RequestFilter';

const SubAdminPortal = () => {
    const {id}=useParams(); 
    const [admin, setAdmin] = useState({});
    subAdminAuth();
    const navigate = useNavigate();
    const [toggleSlider, setToggleSlider] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [requests, setRequests] = useState([]);
    const [filteredRequests, setFilteredRequests] = useState([]);
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const itemsPerPage = 5;
    const [requestType, setRequestType] = useState('pending');
   const [filters, setFilters] = useState({});

   
    useEffect(() => {
        applyFilters();
    }, [filters, requestType, users, requests]);

    const fetchData = async () => {
        try {
            const userResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/getAllUsers`);
            const users = userResponse.data;
            setUsers(users);
    
            const enquiryResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/enquiry/getAllEnquiries`);
            const enquiries = enquiryResponse?.data;
            console.log("enquiries", enquiries);
    
            // Filter requests where request.assignedTo matches the current user's id

            const assignedRequests = enquiries?.filter(request => request.assignedTo === id);
            console.log("assignedRequests", assignedRequests);
            // Combine filtered requests with corresponding user data
            const combinedRequests = assignedRequests?.map(request => {
                const user = users.find(user => user.email === request.requestedBy.email);
                return {
                    ...request,
                    requestedBy: {
                        ...request.requestedBy,
                        ...user
                    }
                };
            });
    
            setRequests(combinedRequests);
        } catch (error) {
            console.log("Error fetching data", error);
            toast.error("Failed to fetch data.");
        }
    };
    const getAdminDetails=async () => {
        try{
            const adminDetails= await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/getAdminDetails`,{id:id});
            console.log("adminDetails",adminDetails);
            if(adminDetails.data){
                setAdmin(adminDetails.data.admin);
            }
            else{
                console.log("No data found");
            }

        }
        catch(error){
            console.log("Error fetching data", error);
            toast.error("Failed to fetch data.");
        }
    }
    
    useEffect(() => {
        const token = "abcsd";
        if (!token) {
            navigate('/login');
        } else {
     
            getAdminDetails();
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
           if (requests?.length > 0) {
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
        const subAdminToken = localStorage.getItem('subAdminToken');
        const subAdminUserName = localStorage.getItem('subAdminUserName');
        
        if (!subAdminToken || !subAdminUserName) {
            console.log('No token or username found. Redirecting to login page.', subAdminToken, subAdminUserName);
            navigate('/admin/login');
        }
    }, [navigate]);

    const renderTable = () => {
       
            const indexOfLastUser = currentPage * itemsPerPage;
            const indexOfFirstUser = indexOfLastUser - itemsPerPage;
            const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
            const totalUserPages = Math.ceil(filteredUsers.length / itemsPerPage);

        
            const indexOfLastRequest = currentPage * itemsPerPage;
            const indexOfFirstRequest = indexOfLastRequest - itemsPerPage;
            const currentRequests = filteredRequests.slice(indexOfFirstRequest, indexOfLastRequest);
            const totalRequestPages = Math.ceil(filteredRequests.length / itemsPerPage);

            return (
                <>
                    <RequestFilter onFilterChange={handleFilterChange} />
                    <Table
                        requestType={requestType}
                        requests={currentRequests}
                        currentPage={currentPage}
                        totalPages={totalRequestPages}
                        onPageChange={handlePageChange}
                        reFetchData={refreshData}
                    />
                </>
            );
        
    };

    return (
        <div className='flex items-start justify-center'>
            <ToastContainer />
            {toggleSlider && <Slider setRequestType={setRequestType} setFilters={handleFilterChange} adminName={id} admin={admin}/>}

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

export default SubAdminPortal;