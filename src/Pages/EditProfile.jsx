import React, { useState, useEffect, useRef } from 'react';
import logo from '../Assets/logo.png';
import {
  Button,
  Input,
  Option,
  Select,
  Typography,
} from '@material-tailwind/react';

import profilepic from '../Assets/default-profile-picture.png';
import { months } from '../utils/data';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useContextValue } from '../Context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import homepage from '../Assets/Gohomepage.png';

import { ToastContainer, toast } from 'react-toastify';
const EditProfile = () => {
  const { state, dispatch } = useContextValue();
  const[originalPhoneNo, setOriginalPhoneNo] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    ISAFid: '',
    picture: profilepic,
  });

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [phoneError, setPhoneError] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fileInputRef = useRef(null);


  // Fetch user details from backend
  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/getUser/${state.mail}`);
      if (response.status === 200) {
        const data = response.data;

        setUserDetails({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          phoneNumber: data.phoneNo || '',
          ISAFid: data.ISAFid || '',
          picture: data.picture ? data.picture : profilepic,
        });
        setOriginalPhoneNo(data.phoneNo);

        dispatch({
          type: 'SET_USER',
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          ISAFid: data.ISAFid || '',
          picture: data.picture ? data.picture: profilepic,
        });



        if (data.dateOfBirth) {
          const dob = new Date(data.dateOfBirth);
          setSelectedYear(dob.getFullYear());
          setSelectedMonth((dob.getMonth() + 1));
          setSelectedDay(dob.getDate());
        }
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      toast.error('Failed to load user details.');
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [navigate]);

  useEffect(() => {
    const hasPhoneChanged = userDetails.phoneNumber !== '' && userDetails.phoneNumber !== originalPhoneNo;
    const hasChanges = hasPhoneChanged || selectedYear || selectedMonth || selectedDay;
    setDisableButton(!hasChanges || !isPhoneValid);
  }, [userDetails, selectedYear, selectedMonth, selectedDay, isPhoneValid, originalPhoneNo]);
  

  // Handle phone number change
  const handlePhoneNumberChange = (e) => {
    const phone = e.target.value;
    setUserDetails((prev) => ({
      ...prev,
      phoneNumber: phone,
    }));

    if (phone.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits');
      setIsPhoneValid(false);
    }
     else {
      setPhoneError('');
      setIsPhoneValid(true);
    }
    if(phone == originalPhoneNo){
   setPhoneError('Phone number is same as previous');
      setDisableButton(true);
      setIsPhoneValid(false);
    }
    
    
  };

  const handleEditPicture = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file && file.size <= 3 * 1024 * 1024) {
      setIsUploading(true);
      const loadingToastId = toast.info('Uploading image...', {
        position: 'top-right',
        autoClose: false,
      });

      try {
        const formData = new FormData();
        formData.append('profileImage', file);
        formData.append('userId', state.mail);

        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/user/uploadProfileImage`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        if (response.status === 200) {
          toast.dismiss(loadingToastId);
          toast.success('Profile image updated successfully!');
          
          setUserDetails(prevDetails => ({
            ...prevDetails,
            picture: `{response.data.picture}`, // Update with full URL
          }));
          // dispatch({
          //   type: 'SET_USER',
          //   picture: `${import.meta.env.VITE_API_BASE_URL}${response.data.picture}`,
            
          // });
        
          await fetchUserDetails(); // Refresh user data
        }
      } catch (error) {
        toast.dismiss(loadingToastId);
        toast.error('Failed to upload image. Please try again.');
        console.error('Error uploading image:', error);
      } finally {
        setIsUploading(false);
      }
    } else {
      toast.error('Image must be less than 3MB.');
    }
  };



  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  const handleMonthChange = (value) => {
    setSelectedMonth(value);
  };

  const handleDayChange = (value) => {
    setSelectedDay(value);
  };

  // Handle save with validation
  const handleSave = async () => {
    const loadingToastId = toast.info('Updating your information...', {
      position: 'top-right',
      autoClose: false,
    });

    setIsLoading(true);

    try {
      if (selectedYear || selectedMonth || selectedDay) {
        if (!selectedYear || !selectedMonth || !selectedDay) {
          throw new Error('Please fill in all date fields');
        }
      }

      const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/user/updateProfile`, {
        ISAFid: userDetails.ISAFid,
        phoneNo: userDetails.phoneNumber,
        birthYear: selectedYear,
        birthMonth: selectedMonth,
        birthDay: selectedDay,
      });

      if (response.status === 200) {
        toast.dismiss(loadingToastId);
        toast.success('Profile updated successfully!');
        dispatch({
          type: 'UPDATE_USER',
          payload: { ...state, ...userDetails },
        });
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      console.error('Error updating profile:', error);
      toast.error(
        error.response?.data?.message || error.message || 'Failed to update profile. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const date = Array.from({ length: 31 }, (_, i) => i + 1);
  const startYear = 2023;
  const endYear = 1923;
  const years = Array.from({ length: startYear - endYear + 1 }, (_, i) => startYear - i);


  const handleChangePasswordClick = () => {
    setIsChangePasswordOpen(true);
    setNewPassword('');
    setConfirmPassword('');
    setErrorMessage('');
  };

  const handleConfirmPasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }
    if(newPassword.length < 8){
      setErrorMessage("Password must be atleast 8 characters long");
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/resetPassword`, {
        email: userDetails.email,
        password:newPassword,
      });
      toast.success('Password changed successfully!');
      setIsChangePasswordOpen(false);
    } catch (error) {
      console.error('Error changing password:', error);
      toast.error('Failed to change password. Please try again.');
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <div className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Typography variant="h4" color="blue" className="font-bold">
            Personal Information
          </Typography>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/profile')}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <img src={homepage} alt="Home" className="w-5 h-5" />
              <span className="hidden sm:inline text-black">Dashboard</span>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  
    {/* Main Content */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden">
              <img 
                src={userDetails.picture} 
                alt="profile" 
                className="w-full h-full object-cover"
              />
              
            </div>
            <button 
              onClick={handleEditPicture}
              className="absolute bottom-0 right-0 bg-white rounded-full p-2.5 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <RiEdit2Line className="text-blue-500 text-xl" />
            </button>
            
          </div>
  
          {/* User Info */}
          <div className="flex flex-col gap-4">
            <div className="text-center md:text-left">
              <Typography variant="h4" className="font-bold text-gray-900">
                {`${userDetails.firstName} ${userDetails.lastName}`}
              </Typography>
              <Typography variant="h6" className="text-gray-600">
                ISAF ID: {userDetails.ISAFid}
              </Typography>
            </div>
          </div>
          <img src={logo} alt="logo" className="hidden md:block md:absolute md:w-36 md:h-auto md:right-48" />
        </div>


  
        {/* Form */}
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                value={userDetails.firstName}
                disabled
                className="bg-gray-50"
                color="blue"
                size="lg"
              />
              <Input
                label="Last Name"
                value={userDetails.lastName}
                disabled
                className="bg-gray-50"
                color="blue"
                size="lg"
              />
            </div>
  
            <Input
              label="Email"
              value={userDetails.email}
              disabled
              className="bg-gray-50"
              color="blue"
              size="lg"
            />
  
            <div className="space-y-2">
              <Input
                type="number"
                label="Phone Number"
                value={userDetails.phoneNumber === 'NA' ? '' : userDetails.phoneNumber}
                onChange={handlePhoneNumberChange}
                className="focus:ring-2 focus:ring-blue-500"
                color="blue"
                size="lg"
              />
              {phoneError && (
                <p className="text-red-500 text-sm">{phoneError}</p>
              )}
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select
                label="Birth Year"
                value={selectedYear}
                onChange={handleYearChange}
                className="focus:ring-2 focus:ring-blue-500"
                color="blue"
                size="lg"
              >
                {years.map((year, index) => (
                  <Option key={index} value={year}>
                    {year}
                  </Option>
                ))}
              </Select>
  
              <Select
                label="Birth Day"
                value={selectedDay}
                onChange={handleDayChange}
                className="focus:ring-2 focus:ring-blue-500"
                color="blue"
                size="lg"
              >
                {date.map((day, index) => (
                  <Option key={index} value={day}>
                    {day}
                  </Option>
                ))}
              </Select>
  
              <Select
                label="Birth Month"
                value={selectedMonth}
                onChange={handleMonthChange}
                className="focus:ring-2 focus:ring-blue-500"
                color="blue"
                size="lg"
              >
                {months.map((month, index) => (
                  <Option key={index} value={(index + 1)}>
                    {month}
                  </Option>
                ))}
              </Select>
            </div>
          </form>
  
          <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
          <Button
  variant="gradient"
  color="blue"
  onClick={handleChangePasswordClick}
  className="min-w-[120px] h-12 rounded-xl text-sm shadow-lg hover:shadow-xl transition-shadow duration-300 font-semibold"
>
  Change Password
</Button>

            <Button
              variant="gradient"
              color="blue"
              className="w-full sm:w-48 h-12 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={handleSave}
              disabled={isLoading || disableButton || !isPhoneValid}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Saving...
                </span>
              ) : (
                'Save Changes'
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  
    <input
      type="file"
      accept="image/*"
      ref={fileInputRef}
      onChange={handleImageChange}
      className="hidden"
    />
    
    <ToastContainer 
    className="!w-auto !max-w-[90%] md:!max-w-none !left-auto !right-[1px] !top-2"
    />
    {isChangePasswordOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => {setNewPassword(e.target.value); setErrorMessage('') }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => {setConfirmPassword(e.target.value); setErrorMessage('') }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setIsChangePasswordOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmPasswordChange}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
  </div>
  );
};

export default EditProfile;
