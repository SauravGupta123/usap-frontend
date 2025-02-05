import React, { useState, useEffect } from 'react';
import logo from '../Assets/logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import NavBarComponent from './NavBarComponent';
import { Button, IconButton, Typography } from '@material-tailwind/react';
import axios from 'axios';
import { useContextValue } from '../Context';
import ProfileCard from './ProfileCard';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track user's authentication status
  const [isHovering, setIsHovering] = useState(false);
  const [userName, setUserName] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [googleAuthenticated, setGoogleAuthenticated] = useState(false); // Track Google authentication
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { state, dispatch } = useContextValue();

  useEffect(() => {
    const authMethod = localStorage.getItem('authMethod');

    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    // console.log('token:', token);
    if (authMethod === 'google') {
      setGoogleAuthenticated(true);
    }
    if (token) {
      setIsAuthenticated(true);

      // console.log('User is authenticated');

      console.log('User is authenticated');

      setUserName(name);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleGoogleLogin = async (response) => {
    // Access the user's email address from the response
    const userEmail = response.profile.email;
    setEmail(userEmail);
    setGoogleAuthenticated(true);

    localStorage.setItem('authMethod', 'google');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    setIsAuthenticated(false);
    navigate('/login');
    dispatch({
      type: 'SET_USER',
      user: null,
    });
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className='sticky top-0 left-0 z-40 bg-white w-full'>
      <div className='bg-[#1e40af] w-full h-10 text-white flex items-center justify-center text-xl font font-semibold'>
        This website is under construction
      </div>
      <nav className='flex justify-center '>
        <img src={logo} alt='logo' className='w-40 ml-4' />
        <div className='flex flex-col items-start justify-between w-full gap-2'>
          <div className='w-full h-12 bg-[#263238] flex items-center justify-evenly text-white'>
            <div className='flex items-center gap-4 px-4 py-2'>
              <input
                type='text'
                className='border-none outline-none rounded-md px-2 lg:w-[30rem] w-[20rem] py-1 text-gray-500'
              />
              <FaSearch className='relative -left-10 cursor-pointer text-[#85b968]' />
            </div>
            <div className='w-[50%] flex items-center justify-around'>
              <Button
                color='white'
                className='flex items-center justify-center gap-2 text-[10px]'
                onClick={() => navigate('/experts')}
              >
                Global Research Experts
              </Button>
              <Button
                color='white'
                className='flex items-center justify-center gap-2 text-[10px]'
                onClick={() => navigate('/research')}
              >
                Research and innovation
              </Button>
            </div>
            <div>
              {googleAuthenticated && (
                <div className='mt-4 text-center'>
                  <Typography variant='body' color='gray'>
                    Signed in as: {email}
                  </Typography>
                  <Button
                    onClick={handleLogout}
                    className='mt-2 w-full bg-red-500 hover:bg-red-600 text-white'
                  >
                    Logout
                  </Button>
                </div>
              )}
            </div>

            {isAuthenticated ? (
              <div className='relative text-left w-[40%] flex items-center justify-end'>
                <Button
                  type='button'
                  color='white'
                  onClick={toggleDropdown}
                  className='flex items-center justify-between w-auto px-4 text-[12px] font-medium rounded-md tracking-tighter gap-2'
                >
                  <FaUserCircle className='text-black text-lg' />
                  {userName}
                  {/* <svg
                    className='-mr-1 ml-2 h-5 w-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9.293 10.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg> */}
                </Button>
                {isDropdownOpen && (
                  <ProfileCard setIsDropdownOpen={setIsDropdownOpen} />
                )}
              </div>
            ) : (
              <>
                <div className='flex items-center justify-end w-auto'>
                  <FaUserCircle className='text-white text-2xl' />
                  <div className='flex items-center justify-end w-[10rem]'>
                    <NavLink
                      to='/login'
                      className='relative -left-16 flex items-center justify-center hover:bg-[#85b968] w-30 h-10 rounded-full text-white px-6 py-2 font-bold text-[14px]'
                    >
                      Log In
                    </NavLink>
                  </div>
                </div>
                <div className='flex items-center justify-end w-[10rem]'>
                  <NavLink
                    to='/register'
                    className='relative -left-16 flex items-center justify-center hover:bg-[#FFD700] w-30 h-10 rounded-full hover:text-black text-white px-6 py-2 font-bold text-[14px]'
                  >
                    Register
                  </NavLink>
                </div>
              </>
            )}
          </div>
          <div className='w-full h-full flex items-center justify-center gap-2'>
            <NavLink
              to='/'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className='text-lg font-bold rounded-3xl hover:bg-[#85b968] hover:text-white w-full h-full px-6 py-2 flex items-center justify-center'
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className='text-lg font-bold rounded-3xl hover:bg-[#85b968] hover:text-white w-full h-full px-6 py-2 flex items-center justify-center'
            >
              About
            </NavLink>
            <NavLink
              to='/communities'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className='text-lg font-bold rounded-3xl hover:bg-[#85b968] hover:text-white w-full h-full px-6 py-2 flex items-center justify-center'
            >
              Communities
            </NavLink>
            <NavLink
              to='/events'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className='text-lg font-bold rounded-3xl hover:bg-[#85b968] hover:text-white w-full h-full px-6 py-2 flex items-center justify-center'
            >
              Events
            </NavLink>
            <NavLink
              to='/membership'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className='text-lg font-bold rounded-3xl hover:bg-[#85b968] hover:text-white w-full h-full px-6 py-2 flex items-center justify-center'
            >
              Membership
            </NavLink>
            <NavLink
              to='/gallery'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className='text-lg font-bold rounded-3xl hover:bg-[#85b968] hover:text-white w-full h-full px-6 py-2 flex items-center justify-center'
            >
              Gallery
            </NavLink>
            <NavLink
              to='/team'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className='text-lg font-bold rounded-3xl hover:bg-[#85b968] hover:text-white w-full h-full px-6 py-2 flex items-center justify-center'
            >
              Team
            </NavLink>
            <NavLink
              to='/chapter'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className='text-lg font-bold hover:bg-[#85b968] hover:text-white w-full h-full px-6 py-2 flex items-center justify-center rounded-3xl'
            >
              Chapter
            </NavLink>
            <Button
              size='lg'
              color='light-green'
              className='w-full mr-4 rounded-3xl'
            >
              Join USAP
            </Button>
          </div>
        </div>
      </nav>
      <div className='mt-2 h-[20px]'>
        {/* {isHovering && <NavBarComponent setIsHovering={setIsHovering} />} */}
      </div>
    </header>
  );
};

export default Header;
