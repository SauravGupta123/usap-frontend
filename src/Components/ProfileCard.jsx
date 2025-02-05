import React from 'react';
import { motion } from 'framer-motion';
import { MdLogout, MdOutlineCancel } from 'react-icons/md';
import { userProfileData } from '../utils/data';
import { Button, IconButton } from '@material-tailwind/react';
import { useContextValue } from '../Context';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useActiveOptionStore from '../../store/sliderStore';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import Avatar from 'react-avatar'; // Import Avatar from react-avatar

const ProfileCard = ({ setIsDropdownOpen }) => {
  const { activeOption, setActiveOption } = useActiveOptionStore();
  const { state, dispatch } = useContextValue();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    if (localStorage.getItem('email')) {
      localStorage.removeItem('email');
    }
    toast.success('Logged out successfully!', {
      position: 'top-right',
      autoClose: 3000,
    });

    setIsDropdownOpen(false);
    setTimeout(() => {
      navigate('/login');
    }, 1000);
    dispatch({
      type: 'SET_USER',
      user: null,
    });
  };

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      navigate('/profile');
    } else {
      // Optionally handle the click differently for desktop
    }
  };

  // Extract first name and last name for avatar initials
  const fullName = state.user || '';
  const [firstName, lastName] = fullName.split(' ');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      className='z-20'
      onClick={handleClick}
    >
      <div className=' absolute right-16 md:right-1 md:top-16 p-8 rounded-lg w-96 bg-white'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-lg text-black'>User Profile</p>
          <IconButton className='text-gray-400 bg-white rounded-full shadow-none'>
            <MdOutlineCancel
              className='text-2xl'
              onClick={() => setIsDropdownOpen(false)}
            />
          </IconButton>
        </div>
        <div className='flex gap-5 items-center mt-6 border-b pb-6'>
          {/* Avatar with initials */}
          {state.picture ? (
            <img
              src={state.picture}
              alt='pic'
              className='h-16 w-16 object-cover rounded-full'
            />
          ) : (

          <Avatar
            name={fullName} // Generates initials based on the user's name
            size='65' // Avatar size
            round={true} // Makes it round
            className='h-2 w-6 object-cover text-3xl'
            color='#1E40AF' // Bluish background color (Tailwind's indigo-900)
            fgColor='#FFFFFF' // White text color
            textSizeRatio={0.1}
          />
          )}

          <div>
            <p className='font-semibold text-xl text-black dark:text-gray-100'>
              {firstName}
            </p>
            <p className='text-gray-500 text-sm dark:text-gray-400'>
             User
            </p>
            <p className='text-gray-500 text-sm font-semibold dark:text-gray-400'>
              {state.mail}
            </p>
          </div>
        </div>
        <div>
          {userProfileData.map((item, index) => (
            <div
              key={index}
              className='flex gap-5 border-b border-gray-300 p-4 hover:bg-gray-200 cursor-pointer dark:hover:bg-[#42464D]'
            >
              <button
                type='button'
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
                onClick={() => {
                  setActiveOption(item.title);
                  console.log('new state', activeOption);
                  setTimeout(() => {
                    navigate(item.link);
                  }, 100);
                }}
                className='text-xl rounded-lg p-3 hover:bg-gray-200'
              >
                {item.icon}
              </button>
              <div
                onClick={() => {
                  setActiveOption(item.title);
                  console.log('new state', activeOption);
                  setTimeout(() => {
                    navigate(item.link);
                  }, 100);
                }}
              >
                <p className='font-semibold text-black dark:text-gray-200'>
                  {item.title}
                </p>
                <p className='text-gray-500 text-sm dark:text-gray-400'>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-5'>
          <Button className='w-full bg-[#1E40AF] rounded-[10px]' onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
