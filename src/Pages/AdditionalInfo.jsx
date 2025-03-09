import React, { useEffect, useState } from 'react';
import { Button, Typography, Input, Select, Option } from '@material-tailwind/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import isafLogo from '/HomePageImages/NavBarImages/USAP_logo.png'
const AdditionalInfo = () => {
  const [formData, setFormData] = useState({
    googleId: '',
    firstName: '',
    lastName: '',
    email: '',
    countryResiding: '',
    membershipType: '',
    picture:'',
  });
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userString = params.get('user');
    if (userString) {
      const user = JSON.parse(decodeURIComponent(userString));
      console.log("userData", user);
      setFormData({
        ...formData,
        googleId: user.googleId,
        firstName: user.name.split(' ')[0],
        lastName: user.name.split(' ')[1] || '',
        email: user.email,
        picture: user.picture,
      });
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/user/createUser`,
        formData
      );
  
      if (response.status === 201) {
        const data = response.data;
        console.log("userData", data);
        if (data.success) {
          showSuccessMessage();
          const userData = data.user;
          if (userData) {
            // toast.success('User created successfully!', {
            //   position: toast.POSITION.TOP_RIGHT,
            // });
  
            // Delay navigation to allow the toast to be visible
            setTimeout(() => {
              navigate(`/login?user=${encodeURIComponent(JSON.stringify(userData))}`);
            }, 2000); // 2-second delay
            return;
          }
  
          setTimeout(() => {
            navigate('/login'); // Redirect to login or home page
          }, 2000); // 2-second delay
        } else {
          showFailedMessage();
        }
      }
    } catch (error) {
      console.log("error", error);
      showFailedMessage(error?.response?.data?.message);
    }
  };
  

  const showSuccessMessage = () => {
    toast.success('User created successfully!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showFailedMessage = (message) => {
    if(message){
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
          });
    }
    else{
        toast.error('Failed to create user. Please try again.', {
            position: toast.POSITION.TOP_RIGHT,
          });
    }
   
  };

  return (
    <div className='flex min-h-[95vh] flex-col justify-center px-6 lg:px-8 mt-2 lg:mt-0 overflow-hidden bg-gray-100 w-full'>
      <div className='bg-white h-auto mx-auto py-6 px-10 rounded-xl mt-10 shadow-2xl sm:w-[33rem] w-[100%] flex flex-col items-center'>
        <div className="logo w-[8rem] mb-2 ">
         <img src={isafLogo} alt="ISA-FLogo" className='w-full h-full' />
        </div>
        <Typography variant='h3' color='gray'>
          Additional Details
        </Typography>
        <div className='mt-6 w-full'>
          <form className='flex flex-col justify-center gap-2' onSubmit={handleSubmit}>
            <Input
              label='First name'
              id='firstName'
              type='text'
              name='firstName'
              size='lg'
              value={formData.firstName}
              onChange={handleChange}
              className='focus:shadow-lg'
              color='blue'
              disabled
            />
            <Input
              id='lastName'
              type='text'
              label='Last name'
              name='lastName'
              size='lg'
              value={formData.lastName}
              onChange={handleChange}
              className='focus:shadow-lg'
              color='blue'
              disabled
            />
            <Input
              id='email'
              type='email'
              label='Email'
              name='email'
              size='lg'
              value={formData.email}
              onChange={handleChange}
              className='focus:shadow-lg'
              color='blue'
              disabled
            />
            <Select
              label='Country Residing'
              id='countryResiding'
              name='countryResiding'
              value={formData.countryResiding}
              onChange={(value) => setFormData({ ...formData, countryResiding: value })}
              className='focus:shadow-lg'
            >
              <Option value='India'>India</Option>
              <Option value='France'>France</Option>
              {/* Add more options as needed */}
            </Select>
            <Select
              label='Membership Type'
              id='membershipType'
              name='membershipType'
              value={formData.membershipType}
              onChange={(value) => setFormData({ ...formData, membershipType: value })}
              className='focus:shadow-lg'
            >
              <Option value='Executive Team Member'>Executive Team Member</Option>
              <Option value='Student Member'>Student Member</Option>
              {/* Add more options as needed */}
            </Select>
            <div className='flex justify-start items-center gap-2 mt-4'>
              <input
                type='checkbox'
                checked={isCheckboxChecked}
                onChange={(e) => setIsCheckboxChecked(e.target.checked)}
                className='text-black'
              />
              <span>
                By creating an account, you agree to our{' '}
                <a href='/' className='text-blue-600'>Terms of Service</a> and{' '}
                <a href='/' className='text-blue-600'>Privacy Policy</a>
              </span>
            </div>
            <Button
              type='submit'
              disabled={!isCheckboxChecked || !formData.countryResiding || !formData.membershipType}
              className='mt-4 flex w-full justify-center px-4 py-6 items-center rounded-md bg-[#1e3ea7] text-base h-14 text-md font-semibold leading-6 text-white shadow-sm hover:bg-[#1E40AF] mb-4'                
               
              size='lg'
            >
              Create Account
            </Button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdditionalInfo;