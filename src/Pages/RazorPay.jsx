// import React, { useState, useEffect } from 'react';
// import logo from '../Assets/logo.png';
// import { useContextValue } from '../Context';

// const RazorpayPayment = ({ packageType, packagePrice }) => {
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [paymentError, setPaymentError] = useState(null);

//   const { state, dispatch } = useContextValue();
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";

//     script.async = true;
//     script.onload = () => {
//       initializeRazorpay();
//     };
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const initializeRazorpay = async () => {
//     const response = await fetch('http://localhost:5000/payment/create-order', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         amount: state.amount * 100, // Convert packagePrice to the smallest currency unit
//         currency: 'INR', // Replace with the desired currency code
//       }),
//     });

//     if (response.ok) {
//       const order = await response.json();

//       const razorpay = new window.Razorpay({
//         key: 'rzp_test_gBTQuJgWNpmYE2',
//         order_id: order.id, // Use the order ID from the response
//         handler: function (response) {
//           // Handle payment success
//           setPaymentSuccess(true);
//           console.log('Payment ID:', response.razorpay_payment_id);

//           // Send the payment ID and order ID to your backend for payment capture
//           capturePayment(response.razorpay_payment_id, order.id);
//         },
//         // ... (rest of the Razorpay configuration)
//       });

//       document.getElementById('pay-button').onclick = function () {
//         razorpay.open();
//       };
//     } else {
//       // Handle the error from the server (e.g., payment creation error)
//       const errorData = await response.json();
//       setPaymentError(errorData.error);
//     }
//   };

//   // Add a function to capture payment
//   const capturePayment = async (paymentId, orderId) => {
//     const response = await fetch(
//       'http://localhost:5000/payment/capturePayment',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           paymentId: paymentId,
//           orderId: orderId,
//         }),
//       }
//     );

//     if (response.ok) {
//       // Payment capture was successful
//     } else {
//       // Handle the error from the server
//       const errorData = await response.json();
//       console.log('Payment capture error: ', errorData);
//     }
//   };
//   return (
//     <div>
//       {' '}

//   const initializeRazorpay = () => {
//     const razorpay = new window.Razorpay({
//       key: "rzp_test_gBTQuJgWNpmYE2", // Replace with your Razorpay API key
//       amount: packagePrice * 100, // Convert packagePrice to smallest currency unit
//       currency: "INR", // Replace with the desired currency code
//       name: "ISA-F",
//       description: "Purchase Description",
//       image: { logo }, // URL of your company's logo
//       order_id: "order_Mk5EPmW9U1OrD6", // Replace with a valid Razorpay order ID
//       handler: function (response) {
//         setPaymentSuccess(true);
//         console.log("Payment ID:", response.razorpay_payment_id);
//       },
//       prefill: {
//         name: "John Doe", // Pre-fill customer's name (optional)
//         email: "john@example.com", // Pre-fill customer's email (optional)
//         contact: "9876543210", // Pre-fill customer's contact number (optional)
//       },
//       notes: {
//         address: "Customer Address", // Add any additional notes here (optional)
//       },
//       theme: {
//         color: "#F37254", // Customize the color theme (optional)
//       },
//     });

//     document.getElementById("pay-button").onclick = function () {
//       razorpay.open();
//     };
//   };

//   return (
//     <div>

//       {paymentSuccess ? (
//         <p>Payment Successful!</p>
//       ) : (
//         <>

//           {' '}
//           {paymentError && <p>Error: {paymentError}</p>}{' '}
//           <button id='pay-button'>Pay Now for {packageType}</button>{' '}
//         </>
//       )}{' '}

//           {paymentError && <p>Error: {paymentError}</p>}
//           <button id="pay-button">Pay Now for {packageType}</button>
//         </>
//       )}

//     </div>
//   );
// };

// export default RazorpayPayment;

import React from "react";
import Razorpay from "razorpay";
import httptl from "axios"; // Assuming you are using Axios for making HTTP requests
// import { API_ENDPOINTS_TL } from "your-api-endpoints"; // Import your API endpoints
// import { initializeRazorpay } from "your-razorpay-initialization"; // Import your Razorpay initialization function

function initializeRazorpay() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      initializeRazorpay();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
}
const RazorpayPayment = () => {
  const handlePay = async () => {
    await initializeRazorpay(); // Ensure Razorpay is initialized properly
    console.log("Payment has been processing...");

    const input = {
      orderid: "12345",
      paymentMethod: "razerpay", // Note: Typo, it should be 'razorpay'
      total: 1000,
    };

    try {
      const base_url = import.meta.env.NEXT_PUBLIC_TL_REST_API_ENDPOINT;
      const api_url = `${base_url}${API_ENDPOINTS_TL.RAZORPAY_ORDER}`;

      // Make a POST request to the specified API endpoint
      const response = await httptl.post(api_url, input);
      console.log("Response from Razorpay payment gateway", response.data);

      const options = {
        key: "rzp_test_gBTQuJgWNpmYE2", // Your Razorpay test key
        name: "Techland",
        currency: response.data.currency,
        amount: response.data.amount,
        order_id: response.data.id,
        description: "Payment for your order",
        image:
          "https://tech-land.in/_next/image?url=%2FHome%20Page%20Images%2FNavBar%20Images%2FTech_Logo.png&w=256&q=75",
        handler: function (response) {
          console.log("Response from Razorpay payment gateway", response);

          // Send the user to the order page with order data
          alert(
            "Payment has been done, and your order will process after confirmation"
          );
        },
        prefill: {},
      };

      // Create the Razorpay payment object and open the payment modal
      const paymentObject = new Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error(error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <button onClick={handlePay}>Pay with Razorpay</button>
    </div>
  );
};

export default RazorpayPayment;
