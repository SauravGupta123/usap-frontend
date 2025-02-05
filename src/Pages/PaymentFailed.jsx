import React from 'react';
import { Link } from 'react-router-dom';

const PaymentFailed = () => {
  return (
    <div class=' h-screen'>
      <div class='bg-white p-6  md:mx-auto'>
        <svg
          viewBox='0 0 24 24'
          class='text-white bg-red-600 w-16 h-16 mx-auto my-6 rounded-full p-2'
        >
          <path
            fill='currentColor'
            d='M18.364 5.636a1 1 0 0 0-1.414 0L12 10.586 7.05 5.636a1 1 0 0 0-1.415 1.414L10.586 12l-4.95 4.95a1 1 0 1 0 1.415 1.414L12 13.414l4.95 4.95a1 1 0 0 0 1.415-1.414L13.414 12l4.95-4.95a1 1 0 0 0 0-1.414z'
          ></path>
        </svg>
        <div class='text-center'>
          <h3 class='md:text-2xl text-base text-gray-900 font-semibold text-center'>
            Payment Failed!
          </h3>
          <p class='text-gray-600 my-2'>
            Unfortunately, the transaction has failed.
          </p>
          <p>
            {' '}
            Please check your payment details and try again. If the issue
            persists, contact customer support.{' '}
          </p>
          <div class='py-10 text-center '>
            <Link
              to={'/'}
              class='px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3'
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
