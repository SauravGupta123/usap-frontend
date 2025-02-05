import React, { useState, useEffect } from 'react';
import logo from '../Assets/logo.png';
import { Button, Typography } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/HomePageComponents/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContextValue } from '../Context';
import axios from 'axios';
import NavBar from '../Components/HomePageComponents/NavBar';
import Glogo from '../Assets/gpay.png';
import { X } from 'lucide-react';
const Login = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [rememberMe, setRememberMe] = useState(false);
  const [googleAuthenticated, setGoogleAuthenticated] = useState(false);

  const [newOtp, setNewOtp] = useState('');

  const [showSendOtpButton, setShowSendOtpButton] = useState(true); // Control Send OTP button visibility


  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [showPasswordBox, setShowPasswordBox] = useState(false);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();
  const [prevent, setPrevent] = useState(false);

  const { state, dispatch } = useContextValue();

  const [errorMsg, setErrorMsg] = useState({
    emailMsg: '',
    passwordMsg: '',
  });

  const [validation, setValidation] = useState({
    checkEmail: false,
    checkPassword: false,
  });



  const handleEmailValidation = () => {
    // Regular expression to validate a standard email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === '') {
      setValidation({ ...validation, checkEmail: true });
      setErrorMsg({ ...errorMsg, emailMsg: 'Email is required!' });
    } else if (!emailRegex.test(email)) {
      setValidation({ ...validation, checkEmail: true });
      setErrorMsg({ ...errorMsg, emailMsg: 'Invalid Email format!' });
    } else {
      setValidation({ ...validation, checkEmail: false });
      setErrorMsg({ ...errorMsg, emailMsg: '' });
    }
  };


  const handlePasswordValidation = () => {
    if (password !== '' && password.length < 8) {
      setValidation({ ...validation, checkPassword: true });
      setErrorMsg({ ...errorMsg, passwordMsg: 'Invalid Password!' });
    } else {
      setValidation({ ...validation, checkPassword: false });
      setErrorMsg({ ...errorMsg, passwordMsg: '' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (email) {
      handleEmailValidation();
    }
  }, [email]);

  useEffect(() => {
    if (password) {
      handlePasswordValidation();
    }
  }, [password]);
  useEffect(() => {
    // Extract query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const userParam = urlParams.get('user');
    console.log('User param:', userParam);
    if (userParam) {
      try {
        // Parse the user data from the query parameter
        const user = JSON.parse(decodeURIComponent(userParam));
        
        // Dispatch user data to the global context and set it in localStorage
        if (user.name && user.email) {
          dispatch({
            type: 'SET_USER',
            user: user.name,  // Assuming `name` field contains the user's name
            email: user.email,  // Assuming `email` field contains the user's email
            picture: user.picture,
            phoneNo: user.phoneNo,
          });
          
          console.log('User data:', state);
          // Set user data in localStorage
          // if (localStorage.getItem('adminUserName')) {
          //   localStorage.removeItem('adminUserName');
          // }

          // if (localStorage.getItem('adminToken')) {
          //   localStorage.removeItem('adminToken');
          // }
          localStorage.setItem('email', user.email);
          localStorage.setItem('name', user.name);
          localStorage.setItem('token', user.token);

          // Redirect to the homepage after successful login
          navigate('/profile');
        } else {
          console.error('User data missing name or email.');
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, [dispatch, navigate]);


  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  // Regular login with email and password
  const handleLogin = async () => {
    // Show loader toast before login
    toast.info('Please wait...', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,  // Keep it open until login is complete
      toastId: 'loginLoader', // Unique ID to control this toast
    });


    try {
      const response = await axios.post(`${apiUrl}/user/login`, { email, password });
      console.log('Data:', response);
      if (response.status === 200) {
        setPrevent(true);
        const data = response.data;
        const token = data.message.token;
        // Set user info in context and local storage
        dispatch({
          type: 'SET_USER',
          user: data.message.name,
          email: data.message.email,
        });
        localStorage.setItem('email', data.message.email);
        localStorage.setItem('name', data.message.name);
        localStorage.setItem('token', token);

        // Check login success
        if (data.success) {
          setPrevent(true);

          console.log('Login success:');
          toast.dismiss('loginLoader');  // Dismiss the loader first
          toast.success('logged In successfully');
          console.log("navigating")
          // Wait for a moment to allow toast to be displayed before navigation
          setTimeout(() => {

            navigate('/profile');
          }, 1500);  // Increase delay to ensure toast shows fully
        } else {
          toast.dismiss('loginLoader');  // Dismiss the loader
          showFailedMessage();
        }
      }


    } catch (error) {
      toast.dismiss('loginLoader');  // Dismiss the loader
      console.error('Error during login:', error);
      if (error.status == 400) {
        toast.dismiss('loginLoader');  // Dismiss the loader
        toast.error('Invalid Email or Password');
      }
      else
        showUserNotFoundMessage();
    }
  };



  // Google authentication login
  const googleAuth = () => {
    window.open(`${apiUrl}/auth/verifyGoogle`, '_self');
  };



  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    if (token && email && !prevent) {
      navigate('/profile');
    }
  }, [navigate])






  const showSuccessMessage = () => {
    toast.success('Successfully logged in!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showUserNotFoundMessage = () => {
    toast.error('User Not Found!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showFailedMessage = () => {
    toast.error('Invalid credentials!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };


  const handleSendOtp = async () => {

    toast.info('Sending OTP, please wait...', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
      toastId: 'sendingOtpLoader',
    });

    try {
      const response = await axios.post(`${apiUrl}/email/forgotPassword`, { email });

      if (response.data.success) {
        setIsOtpSent(true);
        setTimer(30);
        setNewOtp(response.data.otp);
        setCanResend(false);
        toast.dismiss('sendingOtpLoader');
        toast.success('OTP sent to your email!');
      }

      else {
        toast.dismiss('sendingOtpLoader');
        toast.error('Failed to send OTP. Try again.');
      }
    } catch (error) {
      toast.dismiss('sendingOtpLoader');
      if (error.status === 404) {
        toast.dismiss('sendingOtpLoader');
        toast.error('User Not found with this email');
      }
      else
        toast.error('Error sending OTP. Please try again.');
      console.error('Error sending OTP:', error);
    }
  };

  const handleVerifyOtp = () => {
    if (isOtpSent) {
      if (otp.length > 0 && newOtp.length > 0 && otp === newOtp) {
        toast.success('OTP verified successfully!');
        // setShowOtpInput(false);
        setIsOtpVerified(true);
        console.log('OTP verified successfully!', isOtpVerified, " ",);

        return true;
      } else {
        toast.error('Invalid OTP. Please try again.');
      }

    }
  };


  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    if (newPassword.length < 8) {
      toast.error('Password must be atleast 8 characters long');
      return;
    }

    console.log('Email:', email);
    console.log('NewPassword:', newPassword);

    try {
      const response = await axios.post(`${apiUrl}/user/resetPassword`, { email, password: newPassword });
      if (response.status === 200) {
        toast.success('Password reset successfully!');
        setShowPasswordBox(false);
      } else {
        toast.error('Failed to reset password. Please try again.');
      }
    } catch (error) {
      toast.error('Error resetting password. Please try again.');
      console.error('Error resetting password:', error);
    }
  };

  useEffect(() => {
    let interval;
    if (isOtpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [isOtpSent, timer]);

  return (
    <>
      <NavBar />
      <div className='flex min-h-[90vh] flex-col justify-start px-6 lg:px-8 mt-2 lg:mt-0 overflow-hidden bg-gray-100 w-full'>
        <div className='bg-white h-auto mx-auto py-6 px-10 rounded-xl mt-10 shadow-2xl sm:w-[27rem] w-[100%] flex flex-col items-center'>
          <img src={logo} alt='logo' className='w-[8rem]' />
          {/* {!state.user ? ( */}
          <>
            <Button
              onClick={googleAuth}
              color='white'
              className='mt-10 w-full h-[8vh] border-[1px] border-solid border-[#c2c8d0] text-black rounded-md text-left pl-4  flex items-center justify-start gap-6'
            >
              <img src={Glogo} alt='Google Logo' className='w-10' />
              Continue with Google
            </Button>

            <div className='flex justify-between items-center mt-4 w-full mb-4'>
              <div className='w-[40%] h-[1px] bg-[#c2c8d0]'></div>
              <span className='text-base text-[#9a9a9a]'>OR</span>
              <div className='w-[40%] h-[1px] bg-[#c2c8d0]'></div>
            </div>

            <Typography variant='h3' color='gray'>
              Log In
            </Typography>
            <div className='mt-6 w-full'>
              <form className='flex flex-col justify-center gap-2'>
                <div className='mt-1'>
                  <input
                    id='email'
                    type='text'
                    placeholder='Email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className='block w-full h-14 rounded-md border-0 px-4 py-6 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none'
                  />
                  {validation.checkEmail && errorMsg.emailMsg && (
                    <p className='text-[12px] text-red-400'>{errorMsg.emailMsg}</p>
                  )}
                </div>

                <div className='mt-4'>
                  <input
                    id='password'
                    type='password'
                    placeholder='Password'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className='block w-full h-14 rounded-md border-0 px-4 py-6 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none'
                  />
                  {validation.checkPassword && errorMsg.passwordMsg && (
                    <p className='text-[12px] text-red-400'>{errorMsg.passwordMsg}</p>
                  )}
                </div>

                <div className='flex justify-center items-center mt-4'>

                  <div onClick={() => setShowPasswordBox(true)} className='text-xs  font-semibold text-[#1E40AF] cursor-pointer'>
                    Forgot  password?
                  </div>
                </div>

                <Button
                  type='button'
                  onClick={handleLogin}
                  className='mt-4 flex w-full justify-center px-4 py-6 items-center rounded-md bg-[#3d67f1] text-base h-14 text-md font-semibold leading-6 text-white shadow-sm hover:bg-[#1E40AF] mb-4'
                >
                  Login
                </Button>

                <p className='text-sm text-[#9a9a9a] text-center mb-4'>
                  Don't have an account?{' '}
                  <Link to={'/register'} className='text-[#1E40AF] underline'>
                    Register
                  </Link>
                </p>
                {showPasswordBox && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-35 z-50 px-4">

                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-[400px] flex flex-col items-center">

                      <h2 className="text-lg sm:text-xl font-semibold mb-4">Reset Password</h2>
                      <button
                        onClick={() => {
                          setShowPasswordBox(false);
                          setIsOtpSent(false);
                          setIsOtpVerified(false);
                          setOtp('');
                          setNewPassword('');
                          setConfirmPassword('');
                        }}
                        className="inline-block relative left-44 bottom-16 text-gray-500 hover:text-gray-700"
                      >
                        <X color='blue' size={24} />
                      </button>
                      {!isOtpVerified ? (
                        <>
                          <div className="w-full mb-4 flex gap-5">
                            <input
                              type="email"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              disabled={isOtpSent}
                              className="block w-full h-14 rounded-md border-0 px-4 py-6 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none"
                            />

                            <Button
                              onClick={handleSendOtp}
                              className="bg-[#3d67f1] w-32  text-white flex items-center justify-center p-0 m-0 whitespace-nowrap"
                              disabled={validation.checkEmail || !email || isOtpSent}
                            >
                              Send OTP
                            </Button>
                          </div>
                          {validation.checkEmail && errorMsg.emailMsg && (
                            <p className='text-[12px] text-red-400'>{errorMsg.emailMsg}</p>
                          )}
                          {isOtpSent && (
                            <>
                              <div className="w-full mb-4">
                                <input
                                  type="text"
                                  placeholder="Enter OTP"
                                  value={otp}
                                  onChange={(e) => setOtp(e.target.value)}
                                  className="block w-full h-14 rounded-md border-0 px-4 py-6 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none"
                                />
                              </div>
                              <Button
                                onClick={handleVerifyOtp}
                                className="mt-3 w-full px-4 py-6 items-center rounded-md bg-[#3d67f1] text-base h-14 text-md font-semibold leading-6 text-white shadow-sm hover:bg-[#1E40AF]"
                              >
                                Verify OTP
                              </Button>
                              {!canResend ? (
                                <p className="mt-3 text-sm text-gray-600">
                                  Resend OTP in {timer} seconds
                                </p>
                              ) : (
                                <Button
                                  onClick={handleSendOtp}
                                  className="mt-3 w-full px-4 py-6 items-center rounded-md bg-[#3d67f1] text-base h-14 text-md font-semibold leading-6 text-white shadow-sm hover:bg-[#1E40AF]"
                                >
                                  Resend OTP
                                </Button>
                              )}
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="w-full mb-4">
                            <input
                              type="password"
                              placeholder="New Password"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              className="block w-full h-14 rounded-md border-0 px-4 py-6 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none"
                            />
                            {validation.checkPassword && errorMsg.passwordMsg && (
                              <p className='text-[12px] text-red-400'>{errorMsg.passwordMsg}</p>
                            )}
                          </div>
                          <div className="w-full mb-4">
                            <input
                              type="password"
                              placeholder="Confirm Password"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              className="block w-full h-14 rounded-md border-0 px-4 py-6 text-gray-600 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 outline-none"
                            />
                            {validation.checkPassword && errorMsg.passwordMsg && (
                              <p className='text-[12px] text-red-400'>{errorMsg.passwordMsg}</p>
                            )}
                          </div>
                          <Button
                            onClick={handleResetPassword}
                            className="mt-3 w-full px-4 py-6 items-center rounded-md bg-[#3d67f1] text-base h-14 text-md font-semibold leading-6 text-white shadow-sm hover:bg-[#1E40AF]"
                          >
                            Reset Password
                          </Button>
                        </>
                      )}

                    </div>
                  </div>
                )}
              </form>
            </div>
          </>




        </div>
      </div>
      <Footer />
          {/* <ToastContainer
            className="!w-fit !max-w-[90%] md:!max-w-none !left-auto !top-2 text-sm md:text-base"
          /> */}

    </>
  );
};

export default Login;
