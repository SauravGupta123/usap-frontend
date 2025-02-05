import React, { useState, useEffect } from 'react';
import logo from '../../Assets/logo.png';
import { Button, Typography } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContextValue } from '../../Context';
import axios from 'axios';



const AdminLogin = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useContextValue();

  const handleLogin = async () => {
    try {
      setIsLoading(true); // Start loading
      const response = await axios.post(`${apiUrl}/admin/login`, { identifier, password });
      if (response.status === 200) {
        const { userName, adminType, token } = response.data.message;
        toast.success('Successfully logged in!', { position: toast.POSITION.TOP_RIGHT });

        if (adminType == 'superAdmin') {
          localStorage.setItem('adminUserName', userName);
          localStorage.setItem('adminToken', token);
          await new Promise(resolve => setTimeout(resolve, 1000));
          navigate('/admin/main/profile/');
        } else {
          localStorage.setItem('subAdminUserName', userName);
          localStorage.setItem('subAdminToken', token);
          await new Promise(resolve => setTimeout(resolve, 1000));
          navigate(`/admin/profile/${userName}`);
        }
      } else {
        toast.error('Invalid credentials!', { position: toast.POSITION.TOP_RIGHT });
      }
    } catch (error) {
      let msg = error.response?.data?.message || 'User Not Found!';
      console.error('Error during login:', error);
      toast.error(msg, { position: toast.POSITION.TOP_RIGHT });
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    const subAdminToken = localStorage.getItem('subAdminToken');
    const subAdminName = localStorage.getItem('subAdminUserName');

    if (adminToken) {
      navigate('/admin/main/profile');
    } else if (subAdminToken && subAdminName) {
      navigate(`/admin/profile/${subAdminName}`);
    }
  }, [navigate]);

  return (
    <div className='flex min-h-[90vh] flex-col justify-start px-6 lg:px-8 mt-2 lg:mt-0 bg-gray-100 w-full'>
      <div className='bg-white h-auto mx-auto py-6 px-10 rounded-xl mt-10 shadow-2xl sm:w-[27rem] w-full flex flex-col items-center'>
        <img src={logo} alt='logo' className='w-[8rem]' onClick={() => navigate('/')} />
        <Typography variant='h3' color='gray' className='mt-6'>
          Admin Login
        </Typography>
        <div className='mt-6 w-full'>
          <form className='flex flex-col gap-4'>
            <input
              id='identifier'
              type='text'
              placeholder='Username or Email'
              required
              disabled={isLoading}
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className='block w-full h-14 rounded-md px-4 py-6 text-gray-600 shadow-md ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed'
            />
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'} // Toggle input type based on showPassword state
                placeholder="Password"
                required
                disabled={isLoading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full h-14 rounded-md px-4 py-6 text-gray-600 shadow-md ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                className="absolute inset-y-0 right-3 flex items-center"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                  </svg>
                ) : (

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                  </svg>

                )}
              </button>
            </div>

            <Button
              type='button'
              onClick={handleLogin}
              disabled={isLoading}
              className='mt-4 w-full justify-center px-4 py-6 h-14 rounded-md bg-[#3d67f1] text-md font-semibold text-white shadow-sm hover:bg-[#1E40AF] disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2'
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Logging in...</span>
                </>
              ) : (
                'Login'
              )}
            </Button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;