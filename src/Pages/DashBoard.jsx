import React, { useState, useEffect } from 'react'; // Import useEffect
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios
import Slider from '../Components/Slider';
import { LuMenu } from 'react-icons/lu';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import Avatar from 'react-avatar';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
  Button,
  IconButton,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import ProfileCard from '../Components/ProfileCard';
import usericon from '../Assets/userlogo.png';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import RequestCard from '../Components/RequestCards';
import homepage from '../Assets/Gohomepage.png';
import { useContextValue } from '../Context';
const DashBoard = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [user, setUser] = useState(null);
  const [name, setName] = useState(null);
  const [fullfilledRequests, setFullfilledRequests] = useState(null);
  const [toggleSlider, setToggleSlider] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false); // State to control form visibility
  const [option, setOption] = useState('dashboard');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userPicture, setUserPicture] = useState(null);
  let [fullname, setfullname] = useState("Not Available");
  const [formData, setFormData] = useState({
    email: '',
    degree: '', // Bachelor/Master/PhD
    year: '', // Bac+1, Bac+2, Bac+3, Bac+4, Bac+5, Bac+6, Bac+7, Bac+8
    scholarship: '', // Yes/No
    scholarshipType: '', // Charpak Exchange, Charpak Master, Erasmus, etc. (only if scholarship is Yes)
    residenceCardType: '', // APS, Salaries, Passport talent, Resident Card, Student Visa from India
    requestFor: '', // Administrative Support, Scholarship, Accommodation and Domicile, etc.
    message: '',
  });

  const { state, dispatch } = useContextValue();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  const fetchFulfilledRequests = async () => {
    if (!user) {
      toast.error('User not found.', {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {

      console.log('User:', user);
      // Extract only enquiry IDs from fulfilledQueries
      const fulfilledQueries = user.fulfilledQueries.map((request) => request.enquiryId);
      const pendingQueries = user.pendingQueries.map((request) => request.enquiryId);
      const enquiryIds = [...fulfilledQueries, ...pendingQueries];

      if (enquiryIds.length === 0) {
        toast.info('No fulfilled requests found.', {
          position: "top-right",
          autoClose: 3000,
        });
        return;
      }
      // Send the enquiry IDs to the backend
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/enquiry/getFulfilledRequests`, {
        enquiryIds: enquiryIds,
      });

      console.log('Response:', response.data);
      setFullfilledRequests(response.data);

    } catch (error) {
      console.error('Error fetching fulfilled requests:', error);
      toast.error('Error fetching fulfilled requests.', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };


  const refreshAndFetchEmail = () => {
    const email = localStorage.getItem('email');
    if (!email) {
      window.location.reload(); // Refresh the page
    }
    return email;
  };



  // Usage example in your handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isMobile = window.innerWidth < 768;
    const email = refreshAndFetchEmail();
    
    setIsLoading(true);
    const toastId = toast.info('Submitting your request...', {
      position: "top-right",
      autoClose: false,
    });

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/enquiry/generateRequest`, { ...formData, email });
      console.log(response);
      
      toast.dismiss(toastId);
      
      if (response.status === 201) {
        toast.success(isMobile ? 'Request submitted!' : 'Request submitted successfully!', {
          position: "top-right",
          autoClose: 3000,
        });
        fetchUser();
        setIsFormVisible(false);
      }
    } catch (error) {
      console.error(error);
      
      toast.dismiss(toastId);
      
      toast.error('Error submitting request. Please try again.', {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };
  const fetchUser = async () => {
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    const storedName = localStorage.getItem('name');

    if (!email || !token || !storedName) {
      navigate('/login'); // Redirect to login page if any of the items are missing
    } else {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/getUser/${email}`);
        console.log(response.data);
        setUser(response.data);
        setUserPicture(response.data.picture);
        setName(storedName); // Set name if found
        if (response.data) {
          dispatch({
            type: 'SET_USER',
            user: response.data.firstName +" "+ response.data.lastName,  // Assuming `name` field contains the user's name
            email: response.data.email,  // Assuming `email` field contains the user's email
            picture:  response.data.picture,
          });
        }

        console.log("state",state)

        
      } catch (error) {
        console.error(error);
        navigate('/login'); // Redirect to login page if there's an error
      }
    }
  };
  useEffect(() => {


    fetchUser();
  }, [navigate]);



  const handleHomeNavigation = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/');
    }, 100); // Adjust timing to match your transition duration
  };


  return (
    <div className='flex flex-col md:flex-row items-start justify-center'>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="!w-auto !max-w-[90%] md:!max-w-none !left-auto !right-[1px] !top-2" // Added right positioning


      />
      {/* Change this div in the DashBoard component */}
      <div className={`${toggleSlider ? 'translate-x-0' : '-translate-x-full'} 
  md:translate-x-0 fixed md:relative top-0 left-0 h-full z-40 bg-white md:bg-transparent
  w-[80%] sm:w-[60%] md:w-auto transition-transform duration-300 ease-in-out`}>
        <Slider user={user} fetchFulfilledRequests={fetchFulfilledRequests} setOption={setOption} setIsFormVisible={setIsFormVisible} setToggleSlider={setToggleSlider}  userPicture= {userPicture}/>
      </div>
      <div className='w-full'>
        {/* header */}
        <div className='py-4 px-4 md:px-8 flex items-center justify-between z-50'>
          <div className='z-50 block md:hidden'>
            <IconButton color='white'>
              <LuMenu
                className='text-[28px] text-blue-800 cursor-pointer z-50'
                onClick={() => setToggleSlider(!toggleSlider)}
              />
            </IconButton>
          </div>
          <div className='w-3 hidden sm:block'></div>

          <div className='flex items-center justify-around gap-2'>

            {/* {user && user.userStatus === 'active' && ( */}
              <button
                className={`bg-[#4294FF] text-black font-semibold px-2 md:px-4 py-2 rounded-md flex items-center text-sm md:text-base
        transition-all duration-500 ease-in-out transform
        ${isTransitioning ?
                    'opacity-0 translate-y-4 scale-95' :
                    'opacity-100 translate-y-0 scale-100'
                  }`}
                onClick={handleHomeNavigation}
              >
                <img
                  src={homepage}
                  alt="Home"
                  className={`w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2
          transition-transform duration-500 ease-in-out
          ${isTransitioning ? 'rotate-0' : 'rotate-0'}`}
                />
                <span className='hidden sm:inline'>Homepage</span>
              </button>
            {/*)}*/}


            <div className='flex items-center gap-1 md:gap-2'>
              {/* <IconButton color='white' className='hidden md:block'>
                <FiShoppingCart className='text-[22px] text-blue-800 cursor-pointer' />
              </IconButton> */}

              <div className='hidden sm:block w-auto h-auto' onClick={() => setDropDown(true)}>


                <Tooltip
                  content='Profile'
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <div className='flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 rounded-lg'>

                    <p>
                      <span className='text-gray-400 text-14'>Hi,</span>{' '}
                    </p>

                    {userPicture ? (
                      <img
                        src={userPicture}
                        alt='Profile'
                        className='w-6 h-6 object-cover rounded-full'
                      />
                    ) : (
                      <Avatar
                        name={name} // Generates initials based on the user's name
                        size='25' // Avatar size
                        round={true} // Makes it round
                        className='h-2 w-6 object-cover'
                        color='#1E40AF' // Bluish background color (Tailwind's indigo-900)
                        fgColor='#FFFFFF' // White text color
                      />
                    )  
                    }
                    {/* <Avatar
                      name={name} // Generates initials based on the user's name
                      size='25' // Avatar size
                      round={true} // Makes it round
                      className='h-2 w-6 object-cover'
                      color='#1E40AF' // Bluish background color (Tailwind's indigo-900)
                      fgColor='#FFFFFF' // White text color
                    /> */}
                    <MdKeyboardArrowDown className='text-gray-400 text-14' />
                  </div>
                </Tooltip>
              </div>
              {dropdown && <ProfileCard setIsDropdownOpen={setDropDown} />}
            </div>
          </div>
        </div>
        <div className='w-full px-4 md:px-4'>

          {user && user.userStatus == 'active' ? (
            <Typography
            variant="h3"
            color="white"
            className="font-inter bg-[#1E40AF] w-full py-2 px-1 sm:py-2 sm:px-4 md:py-4 md:px-20 rounded-3xl text-center text-xs sm:text-sm md:text-2xl"
          >
            Official USAP {user.membershipType}
          </Typography>
          
          ) : user && user.userStatus === 'blocked' ? (
            <Typography
              variant="h3"
              color="white"
              className="font-inter bg-[#1E40AF] w-full py-2 px-1 sm:py-2 sm:px-4 md:py-4 md:px-20 rounded-3xl text-center text-xs sm:text-sm md:text-2xl"
            >
              Account Blocked
            </Typography>
          ) : (
            <Typography
              variant="h3"
              color="white"
              className="font-inter bg-[#1E40AF] w-full py-2 px-1 sm:py-2 sm:px-4 md:py-4 md:px-20 rounded-3xl text-center text-xs sm:text-sm md:text-2xl"
            >
              Account Verification in Progress...
            </Typography>
          )}

        </div>

        {/* main content */}
        <div className='flex flex-col w-full'>
          {option === "Requests" ? (
            <div className='mt-4 md:mt-8 px-4 md:px-8 max-h-[70vh] overflow-y-auto w-full'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {fullfilledRequests
                  ?.slice()
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map((request) => (
                    <RequestCard
                      key={request.enquiryId}
                      request={request}
                      fetchFulfilledRequests={fetchFulfilledRequests}
                    />
                  ))}
              </div>
            </div>
          ) : (
            <div className='w-full p-4 md:p-10'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto'>
                {/* Profile Card */}
                <div className='flex items-center bg-white rounded-lg shadow-xl border border-gray-300 p-4 h-32 md:h-40'>
                  <div className='w-1/4'>
                    <img
                      src={usericon}
                      alt='User Icon'
                      className='w-12 md:w-16 relative top-2 md:top-4'
                    />
                  </div>
                  <Link
                    // to='/profile'
                    to='/profile/edit'
                    className='w-3/4 flex flex-col justify-center'
                  >
                    <Typography variant='h5' className='text-lg md:text-xl lg:text-2xl mb-2'>
                      Profile
                    </Typography>
                    <Typography className='text-sm md:text-base text-gray-600'>
                      Manage your account settings
                    </Typography>
                  </Link>
                </div>

                {/* Membership Information Card */}
                <div className='flex items-center bg-white rounded-lg shadow-xl border border-gray-300 p-4 h-32 md:h-40'>
                  <div className='w-full'>
                    <Typography variant='h5' className='text-lg md:text-xl lg:text-2xl mb-2'>
                      Membership Information
                    </Typography>
                    <Typography className='text-sm md:text-base text-gray-600'>
                      {user?.membershipType || 'No membership'}
                    </Typography>
                    <Typography className='text-xs md:text-sm text-gray-500 mt-2'>
                      Status: {user?.userStatus || 'Unknown'}
                    </Typography>
                  </div>
                </div>

                {/* Payment Information Card */}
                <div className='flex items-center bg-white rounded-lg shadow-xl border border-gray-300 p-4 h-32 md:h-40'>
                  <div className='w-1/4'>
                    <img
                      src={usericon}
                      alt='Payment Icon'
                      className='w-12 md:w-16 relative top-2 md:top-4'
                    />
                  </div>
                  <div className='w-3/4'>
                    <Typography variant='h5' className='text-lg md:text-xl lg:text-2xl mb-2'>
                      Payment Information
                    </Typography>
                    <Typography className='text-sm md:text-base text-gray-600'>
                      Free
                    </Typography>
                  </div>
                </div>

                {/* Help & Support Card */}
                <div className='flex items-center bg-white rounded-lg shadow-xl border border-gray-300 p-4 h-32 md:h-40'>
                  <div className='w-1/4'>
                    <img
                      src={usericon}
                      alt='Support Icon'
                      className='w-12 md:w-16 relative top-2 md:top-4'
                    />
                  </div>
                  <div className='w-3/4'>
                    <Typography variant='h5' className='text-lg md:text-xl lg:text-2xl mb-2'>
                      Help & Support
                    </Typography>
                    <div className='space-y-1'>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-1'>
                        <span className='text-sm md:text-base font-medium'>Email:</span>
                        <a href='mailto:sauravgpt123@gmail.com' className='text-sm md:text-base text-blue-600 underline break-all'>
                          sauravgpt123@gmail.com
                        </a>
                      </div>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-1'>
                        <span className='text-sm md:text-base font-medium'>Phone:</span>
                        <span className='text-sm md:text-base'>+91 XXXXXXXXXX</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Form Modal */}
          {isFormVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white z-10 p-4 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl md:text-2xl font-semibold">Request Details</h2>
                    <button
                      onClick={() => setIsFormVisible(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {(!user || !user.degree) && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Degree <span className="text-red-500">*</span>
                        </label>
                        <select
                          className="w-full p-2 md:p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                          required
                          name="degree"
                          value={formData.degree}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Degree</option>
                          <option value="Bachelor">Bachelor</option>
                          <option value="Master">Master</option>
                          <option value="PhD">PhD</option>
                        </select>
                      </div>
                    )}

                    {(!user || !user.year) && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Year of Study <span className="text-red-500">*</span>
                        </label>
                        <select
                          className="w-full p-2 md:p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                          required
                          name="year"
                          value={formData.year}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Year</option>
                          {['Bac+1', 'Bac+2', 'Bac+3', 'Bac+4', 'Bac+5', 'Bac+6', 'Bac+7', 'Bac+8'].map((year) => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {(!user || !user.scholarship) && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Do you have any Scholarship? <span className="text-red-500">*</span>
                        </label>
                        <select
                          className="w-full p-2 md:p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                          required
                          name="scholarship"
                          value={formData.scholarship}
                          onChange={handleInputChange}
                        >
                          <option value="">Select an Option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    )}

                    {formData.scholarship === 'yes' && (!user || !user.scholarshipType) && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Type of Scholarship <span className="text-red-500">*</span>
                        </label>
                        <select
                          className="w-full p-2 md:p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                          required
                          name="scholarshipType"
                          value={formData.scholarshipType}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Scholarship Type</option>
                          {[
                            'Charpak Exchange',
                            'Charpak Master',
                            'Erasmus',
                            'University level',
                            'Raman Charpak (PhD)',
                            'French Language Teacher',
                            'Eiffel Scholarship',
                            'MOPGA',
                            'La FAMIS',
                            'Legrand Scholarship',
                            'AMBA DAMIA Scholarship',
                            'Shikhar Thales Scholarship',
                            'Bahman Samandari Scholarship'
                          ].map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {(!user || !user.residenceCardType) && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Residence Card Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          className="w-full p-2 md:p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                          required
                          name="residenceCardType"
                          value={formData.residenceCardType}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Card Type</option>
                          {[
                            'APS',
                            'Salaries',
                            'Passport talent',
                            'Resident Card',
                            'Student Visa from India'
                          ].map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Request for <span className="text-red-500">*</span>
                      </label>
                      <select
                        className="w-full p-2 md:p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                        required
                        name="requestFor"
                        value={formData.requestFor}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Request Type</option>
                        {[
                          'Administrative Support',
                          'Scholarship',
                          'Accommodation and Domicile',
                          'Loan and Financing',
                          'Daily life',
                          'French Language',
                          'Career Guidance and Job Search',
                          'Entrepreneurship and Company Creation',
                          'College/ University Enquiry',
                          'PhD/ Research Related',
                          'Others'
                        ].map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1">
                        <textarea
                          name="message"
                          rows={4}
                          className="w-full p-2 md:p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
                          placeholder="Please describe your request..."
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          maxLength={200}
                        />
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {formData.message.length}/200 characters
                      </p>
                    </div>

                    <div className="mt-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        className="w-full sm:w-auto sm:ml-3 mb-2 sm:mb-0 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        disabled={isLoading}
                        >
                         {isLoading ? 'Submitting...' : 'Submit'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsFormVisible(false)}
                        disabled={isLoading}
                        className="w-full sm:w-auto inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default DashBoard;
