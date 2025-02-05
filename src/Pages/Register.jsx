import React, { useEffect, useState } from 'react';
import { Button, Typography, Input, Select, Option } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import NavBar from '../Components/HomePageComponents/NavBar';
import Glogo from '../Assets/gpay.png';
import emailjs from 'emailjs-com';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    email: '',
    password: '',
    confirmPassword: '',
    countryResiding: '',
    membershipType: ''
  });
  const [otp, setOtp] = useState('');
  const [newOtp, setNewOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false); // Track if OTP is sent
  const [showOtpInput, setShowOtpInput] = useState(false); // Control OTP form visibility
  const [showSendOtpButton, setShowSendOtpButton] = useState(true); // Control Send OTP button visibility
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [confPasswordVisible, setConfPasswordVisible] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const [errorMsg, setErrorMsg] = useState({
    phoneNoMsg: '',
    emailMsg: '',
    passwordMsg: '',
    confirmPasswordMsg: '',
  });


  const [validation, setValidation] = useState({
    checkPhoneNo: false,
    checkEmail: false,
    checkPassword: false,
    checkConfirmPassword: false,
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confpasswordVisible, setconfPasswordVisible] = useState(false);

  const handlePhoneValidation = () => {
    const phoneNumberRegex = /^\d{10}$/;
    if (
      formData.phoneNo !== '' &&
      !phoneNumberRegex.test(formData.phoneNo)
    ) {
      setValidation({ ...validation, checkPhoneNo: true });
      setErrorMsg({
        ...errorMsg,
        phoneNoMsg: 'Phone number should be exactly 10 digits!',
      });
    } else {
      setValidation({ ...validation, checkPhoneNo: false });
      setErrorMsg({ ...errorMsg, phoneNoMsg: '' });
    }
  };



  const handleEmailValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.email !== '' && !emailRegex.test(formData.email)) {
      setValidation({ ...validation, checkEmail: true });
      setErrorMsg({ ...errorMsg, emailMsg: 'Invalid Email!' });
    } else {
      setValidation({ ...validation, checkEmail: false });
      setErrorMsg({ ...errorMsg, emailMsg: '' });
    }
  };

  const handlePasswordValidation = () => {
    if (formData.password !== '' && formData.password.length < 8) {
      setValidation({ ...validation, checkPassword: true });
      setErrorMsg({ ...errorMsg, passwordMsg: 'Password must be at least 8 characters long!' });
    } else {
      setValidation({ ...validation, checkPassword: false });
      setErrorMsg({ ...errorMsg, passwordMsg: '' });
    }
  };

  const handleConfirmPasswordValidation = () => {
    if (
      formData.confirmPassword !== '' &&
      formData.password !== formData.confirmPassword
    ) {
      setValidation({ ...validation, checkConfirmPassword: true });
      setErrorMsg({
        ...errorMsg,
        confirmPasswordMsg: 'Passwords do not match!',
      });
    } else {
      setValidation({ ...validation, checkConfirmPassword: false });
      setErrorMsg({ ...errorMsg, confirmPasswordMsg: '' });
    }
  };

  useEffect(() => {
    if (formData.phoneNo !== '') {
      handlePhoneValidation();
    }
  }, [formData.phoneNo]);

  useEffect(() => {
    if (formData.email) {
      handleEmailValidation();
    }
  }, [formData.email]);

  useEffect(() => {
    if (formData.confirmPassword) {
      handleConfirmPasswordValidation();
    }
  }, [formData.confirmPassword]);

  useEffect(() => {
    if (formData.password) {
      handlePasswordValidation();
    }
  }, [formData.password]);

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    let interval;
    if (showOtpInput && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }

    return () => clearInterval(interval);
  }, [showOtpInput, timer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSendOtp = async () => {
    // Show loader toast before sending OTP
    toast.info('Please wait...', {
      autoClose: false,  // Keep it open until login is complete
      toastId: 'sendingOtpLoader', // Unique ID to control this toast
    });
    setIsLoading(true); // Set loading state

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/email/sendOtp`, { email: formData.email });
      if (response.data.success) {
        setIsOtpSent(true);
        setNewOtp(response.data.otp);
        setTimer(30);
        setCanResend(false);
        setShowOtpInput(true); // Show OTP input after sending OTP
        toast.dismiss('sendingOtpLoader'); // Remove the loader
        toast.success('OTP sent to your email!');
      } else {
        toast.dismiss('sendingOtpLoader'); // Remove the loader
        toast.error('Failed to send OTP. Try again.');
      }
    } catch (error) {
      toast.dismiss('sendingOtpLoader'); // Remove the loader
      toast.error('Error sending OTP. Please try again.');
      console.error('Error sending OTP:', error);
    } finally {
      setIsLoading(false); // Stop loading state
    }
  };


  const handleVerifyOtpAndRegister = () => {
    if (isOtpSent) {
      if (otp.length > 0 && newOtp.length > 0 && otp === newOtp) {
        toast.success('OTP verified successfully!');
        setShowOtpInput(false);
        setShowSendOtpButton(false);

        return true;
      } else {
        toast.error('Invalid OTP. Please try again.');
      }

    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.countryResiding || !formData.membershipType) {
      toast.error('Please fill in all required fields!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/user/register`,
        formData
      );

      if (response.status === 200) {
        const data = response.data;

        if (data.success) {
          showSuccessMessage();
          setTimeout(() => {
            navigate('/login');
          }, 1000);
        } else {
          showFailedMessage();
        }
      }
    } catch (error) {
      console.error('Error during registration:', error);
      showFailedMessage();
    }


  };

  const googleAuth = () => {
    window.open(
      `${import.meta.env.VITE_API_BASE_URL}/auth/verifyGoogle/`,
      '_self'
    );
  };


  const showSuccessMessage = () => {
    toast.success('Successfully registered!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showFailedMessage = () => {
    toast.error('User already exists or invalid credentials!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };


  return (
      <div>
        <NavBar />
        <div className='flex min-h-[90vh] flex-col justify-start px-6 lg:px-8 mt-2 lg:mt-0 overflow-hidden bg-gray-100 w-full'>
          <div className='bg-white h-auto mx-auto py-6 px-10 rounded-xl mt-10 shadow-2xl sm:w-[33rem] w-[100%] flex flex-col items-center'>
            <img src={logo} alt='logo' className='w-[8rem]' />
            <Button
              onClick={googleAuth}
              color='white'
             className='mt-10 w-full h-[8vh] border-[1px] border-solid border-[#c2c8d0] text-black rounded-md text-left pl-4 flex items-center justify-start gap-6'
            >
              <img src={Glogo} alt='' className='w-10' />
              Continue with Google
            </Button>
            <div className='flex justify-between items-center mt-4 w-full mb-4'>

              <div className='w-[40%] h-[1px] bg-[#c2c8d0]'></div>
              <span className='text-base text-[#9a9a9a]'>OR</span>
              <div className='w-[40%] h-[1px] bg-[#c2c8d0]'></div>
            </div>
            <Typography variant='h3' color='gray'>
              Create Account
            </Typography>
            <div className='mt-6 w-full'>
              <form className='flex flex-col justify-center gap-2'>
                <div className='flex justify-between items-center mt-1 gap-4 flex-wrap sm:flex-nowrap '>
                  <Input
                    label='First name'
                    id='firstName'
                    type='text'
                    name='firstName'
                    required
                    size='lg'
                    value={formData.firstName}
                    onChange={handleChange}
                    className='focus:shadow-lg'
                    color='blue'
                  />
                  <Input
                    id='lastName'
                    type='text'
                    required
                    label='Last name'
                    name='lastName'
                    size='lg'
                    value={formData.lastName}
                    onChange={handleChange}
                    className='focus:shadow-lg'
                    color='blue'
                  />
                </div>

                <div className='mt-1 flex flex-col justify-between'>
                  <div className='flex items-start space-x-2'>
                    <div className='flex-grow'>
                      <Input
                        label='Email'
                        id='email'
                        type='email'
                        name='email'
                        size='lg'
                        value={formData.email}
                        onChange={handleChange}
                        required={!isOtpSent && otp.length === 0 && newOtp.length === 0}
                        className='focus:shadow-lg w-full sm:max-w-[300px] '
                        color='blue'
                        disabled={isOtpSent && otp === newOtp}
                        containerProps={{ className: 'w-full sm:max-w-[300px]' }}
                      />
                      {validation.checkEmail && errorMsg.emailMsg && (
                        <p className='text-[12px] text-red-400 mt-1'>
                          {errorMsg.emailMsg}
                        </p>
                      )}
                    </div>
                    {!isOtpSent && (
                      <Button
                        onClick={handleSendOtp}
                        className='bg-[#1e3ea7] w-32 h-11  text-white flex items-center justify-center p-2 m-0 whitespace-nowrap'
                        disabled={validation.checkEmail || formData.email.length === 0}
                      >
                        Verify
                      </Button>
                    )}
                  </div>
                </div>

                <div className='mt-1 flex flex-col items-start'>
                  <Input
                    id='phone'
                    type='number'
                    label='Phone No'
                    name='phoneNo'
                    size='lg'
                    value={formData.phoneNo}
                    onChange={handleChange}
                    className='focus:shadow-lg'
                    required
                    color='blue'
                  />
                  {validation.checkPhoneNo && errorMsg.phoneNoMsg && (
                    <p className='text-[12px] text-red-400 -mt-1'>
                      {errorMsg.phoneNoMsg}
                    </p>
                  )}
                </div>

                <div className='mt-1 flex flex-col items-start'>
                  <Input
                    id='password'
                    type={passwordVisible ? 'text' : 'password'}
                    label='Password'
                    name='password'
                    required
                    size='lg'
                    value={formData.password}
                    onChange={handleChange}
                    className='focus:shadow-lg'
                    color='blue'
                  />
                  {validation.checkPassword && errorMsg.passwordMsg && (
                    <p className='text-[12px] text-red-400 -mt-1'>
                      {errorMsg.passwordMsg}
                    </p>
                  )}
                </div>

                <div className='mt-1 flex flex-col items-start'>
                  <Input
                    id='confirmPassword'
                    required
                    type={confpasswordVisible ? 'text' : 'password'}
                    label='Confirm Password'
                    name='confirmPassword'
                    size='lg'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className='focus:shadow-lg'
                    color='blue'
                  />
                  {validation.checkConfirmPassword && errorMsg.confirmPasswordMsg && (
                    <p className='text-[12px] text-red-400 -mt-1'>
                      {errorMsg.confirmPasswordMsg}
                    </p>
                  )}
                </div>

                <div className='mt-1 flex flex-col items-start'>
                  <Select
                    label='Country Residing'
                    id='countryResiding'
                    required
                    name='countryResiding'
                    value={formData.countryResiding}
                    onChange={(value) => setFormData({ ...formData, countryResiding: value })}
                    className='focus:shadow-lg'
                  >
                    <Option value='India'>India</Option>
                    <Option value='France'>France</Option>
                    {/* Add more options as needed */}
                  </Select>
                </div>

                <div className='mt-1 flex flex-col items-start'>
                  <Select
                    required
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
                </div>

                <div className='flex justify-start items-center gap-2 mt-4'>
                  <input
                    type='checkbox'
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxChange}
                    className='text-black'
                  />
                  <span>
                    By creating an account, you agree to our{' '}
                    <Link to='/' className='text-blue-800'>Terms of Service</Link> and{' '}
                    <Link to='/' className='text-blue-800'>Privacy Policy</Link>
                  </span>
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={
                    showSendOtpButton ||
                    !isCheckboxChecked ||
                    validation.checkPhoneNo ||
                    validation.checkEmail ||
                    validation.checkPassword ||
                    validation.checkConfirmPassword ||
                    !formData.countryResiding ||
                    !formData.membershipType
                  }
                  className='mt-4 flex w-full justify-center px-4 py-6 items-center rounded-md bg-[#1e3ea7] text-base h-14 text-md font-semibold leading-6 text-white shadow-sm hover:bg-[#1E40AF] mb-4'
                  size='lg'
                >
                  Register
                </Button>
                {showOtpInput && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-[320px] flex flex-col items-center">
                      <h2 className="text-lg sm:text-xl font-semibold mb-4">Enter OTP</h2>
                      <div className="flex justify-center w-full">
                        <Input
                          type="text"
                          label="OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="focus:shadow-lg mb-4 text-center"
                          containerProps={{ className: "w-36" }}
                        />
                      </div>

                      <Button
                        onClick={handleVerifyOtpAndRegister}
                        color="blue"
                        className="mt-3 w-full sm:w-auto px-6 py-2"
                      >
                        Verify OTP
                      </Button>
                      {canResend ? (
                        <Button
                          onClick={handleSendOtp}
                          color="blue"
                          className="mt-3 w-full sm:w-auto px-6 py-2"
                        >
                          Resend OTP
                        </Button>
                      ) : (
                        <p className="mt-3 text-sm text-gray-600">
                          Resend OTP in {timer} seconds
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </form>
              <div className='flex justify-center gap-1 mt-4'>
                <span className='text-sm'>Already have an account?</span>
                <Link to='/login' className='text-blue-800'>Login here</Link>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          className="!w-fit !max-w-[90%] md:!max-w-none !left-auto !top-2 text-sm md:text-base"
        />
      </div>
  

  );
};

export default Register;
