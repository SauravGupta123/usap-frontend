import React, { useEffect, useState } from 'react';
import logo from '../Assets/logo.png';
import {
  Button,
  Checkbox,
  Input,
  Option,
  Select,
  Typography,
} from '@material-tailwind/react';
import CartComponent from '../Components/CartComponent';
import CountryState from './CountryState';
import { months } from '../utils/data';
import { useContextValue } from '../Context';
import axios from 'axios';

const ApplicationPage = ({ setPage, setAddres }) => {
  const date = Array.from({ length: 31 }, (_, i) => i + 1);
  const startYear = 2023;
  const endYear = 1923;
  const years = Array.from(
    { length: startYear - endYear + 1 },
    (_, i) => startYear - i
  );

  const [addressdata, setAddressdata] = useState({
    homeAddress: '',
    city: '',
    state: '',
    pin: '',
    country: '',
  });
  const [isdiasbled, setisDisabled] = useState(true);
  const { state, dispatch } = useContextValue();
  const [formData, setFormDate] = useState('abc');

  const getPackageInformation = async () => {
    try {
      const response = await axios.post(
        'https://qaapis.largestagroresearch.org/member/register-member',
        addressdata
      );
      // console.log(response);
    } catch (error) {
      console.error('Error during posting package information:', error);
    }
  };
  const clickHandler = () => {
    setPage(2);
    setAddres(() => {
      const concatenatedAddress = Object.values(addressdata).join(', ');
      return concatenatedAddress;
    });
    // getPackageInformation();
  };
  useEffect(() => {
    if (
      addressdata.homeAddress &&
      addressdata.city &&
      addressdata.state &&
      addressdata.pin &&
      addressdata.country
    ) {
      setisDisabled(false);
    }
  }, [addressdata]);

  return (
    <div className=''>
      {/* <div className='w-full h-10 bg-black'></div> */}
      <div className='flex items-center justify-between mx-4 py-2 border-b-[2px] border-gray-300'>
        <Typography variant='h2' color='green'>
          Membership Application
        </Typography>
        <img src={logo} alt='logo' className='w-[8rem]' />
      </div>
      <div className='w-full h-[3rem] bg-gray-100 flex items-center justify-between px-4 py-2'>
        <Typography
          variant='h5'
          className='font-normal active text-white px-2 py-1 rounded-md'
        >
          Contact Information
        </Typography>
        <Typography variant='h5' className='font-normal'>
          Profile Summary
        </Typography>
        <Typography variant='h5' className='font-normal'>
          Cart
        </Typography>
        <Typography variant='h5' className='font-normal'>
          Payment
        </Typography>
        <Typography variant='h5' className='font-normal'>
          Review Order
        </Typography>
        <Typography variant='h5' className='font-normal'>
          Order Confirmation
        </Typography>
      </div>
      <div className='flex items-start justify-between w-full h-[6rem]'>
        <div className='flex items-center justify-between mx-4 py-5 border-b-[2px] border-gray-300 w-[72%]'>
          <Typography variant='h3' color='green' className='font-normal'>
            Contact Information
          </Typography>
        </div>
        <CartComponent setPage={setPage} />
      </div>
      <Typography variant='h5' className='mx-4 '>
        Welcome ,{/* {state.user ? state.user.split(' ')[0] : 'na'} */}
      </Typography>
      <Typography className='mx-4 w-[72%] tracking-wider'>
        Thank you for your interest in membership. Your selected membership(s)
        have been added to your cart. You can{' '}
        <span className='underline text-green-500'>
          review qualifications for different ISA-F Member grades
        </span>
        .
      </Typography>
      <Typography
        variant='h5'
        className='mx-4 my-2 border-b-[2px] border-gray-300 pb-4 w-[72%]'
      >
        Contact and profile information
      </Typography>
      <Typography className='mx-4 w-[72%] tracking-wider'>
        Your primary address will be used for membership mailings,
        subscriptions, and local section assignment. Please note that primary
        address changes, such as country, could affect availability of some
        products and services.
      </Typography>
      <div className='w-[55%] h-auto mx-4 mb-[4rem] '>
        <form
          action=''
          className='my-4 flex flex-col items-center justify-center gap-4 ml-4'
        >
          <div className='w-full xl:flex items-center justify-center gap-4 '>
            <Select
              label={<>Birth Month</>}
              className='focus:shadow-lg'
              color='green'
              size='lg'
            >
              {months.length > 0 &&
                months.map((list, index) => (
                  <Option
                    key={index}
                    value={list}
                    className='flex items-center gap-2'
                  >
                    {list}
                  </Option>
                ))}
            </Select>
            <Select
              label={<>Birth Day</>}
              className='focus:shadow-lg'
              color='green'
              size='lg'
            >
              {date.length > 0 &&
                date.map((list, index) => (
                  <Option
                    key={index}
                    value={list}
                    className='flex items-center gap-2'
                  >
                    {list}
                  </Option>
                ))}
            </Select>
            <Select
              label={<>Birth Year</>}
              className='focus:shadow-lg'
              color='green'
              size='lg'
            >
              {years.length > 0 &&
                years.map((list, index) => (
                  <Option
                    key={index}
                    value={list}
                    className='flex items-center gap-2'
                  >
                    {list}
                  </Option>
                ))}
            </Select>
          </div>
          <div className='w-full flex items-center justify-between gap-4'>
            <div className='w-full relative flex items-center justify-center gap-2 pb-2'>
              <Input
                label='Telephone number'
                className='focus:shadow-lg'
                color='green'
                size='lg'
              />
              <Input
                label='Gender'
                className='focus:shadow-lg'
                color='green'
                size='lg'
              />
              <Typography
                color='gray'
                className='text-[12px] absolute top-11 left-2 text-gray-400'
              >
                Include '+' and country code. Example: +1 xxx xxx xxxx
              </Typography>
            </div>
          </div>
          <CountryState
            setAddressdata={setAddressdata}
            addressdata={addressdata}
          />
          {/* <Input
            label={<>Organization/dept name</>}
            className='focus:shadow-lg'
            color='green'
            size='lg'
          /> */}
          <div className='w-full flex items-center justify-start'>
            <Typography className='mx-2 text-gray-600'>
              Address type<span className='text-red-400'>*</span>
            </Typography>
            <div className='flex items-start justify-center w-[70%]'>
              <Checkbox color='teal' label='Home' />
              <Checkbox color='teal' label='Work' />
              <Checkbox color='teal' label='University/College' />
              <Checkbox color='teal' label='Other' />
            </div>
          </div>
          <Input
            label={
              <>
                Address Line 1 <span className='text-red-400'>*</span>
              </>
            }
            onChange={(e) =>
              setAddressdata({ ...addressdata, homeAddress: e.target.value })
            }
            className='focus:shadow-lg'
            color='green'
            size='lg'
          />

          <Input
            label={
              <>
                City/Locality<span className='text-red-400'>*</span>
              </>
            }
            onChange={(e) =>
              setAddressdata({ ...addressdata, city: e.target.value })
            }
            className='focus:shadow-lg'
            color='green'
            size='lg'
          />

          <Input
            label={
              <>
                PIN code<span className='text-red-400'>*</span>
              </>
            }
            onChange={(e) =>
              setAddressdata({ ...addressdata, pin: e.target.value })
            }
            className='focus:shadow-lg'
            color='green'
            size='lg'
          />
        </form>
        <span className='text-red-600 mt-4 mx-4'>* required fields</span>
      </div>
      <div className='w-[55%] border-b-[2px] border-gray-300 mb-5 ml-8'></div>
      <Button
        variant='gradient'
        color='green'
        className='w-40 rounded-2xl mx-8 mb-10'
        onClick={clickHandler}
      >
        Continue
      </Button>
    </div>
  );
};

export default ApplicationPage;
