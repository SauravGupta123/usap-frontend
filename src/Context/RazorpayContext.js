// src/context/RazorpayContext.js

import React, { createContext, useContext, useState, useEffect } from "react";

// Initialize the context
const RazorpayContext = createContext();

// Custom hook to access the context
export const useRazorpay = () => useContext(RazorpayContext);

export const RazorpayProvider = ({ children }) => {
  const [rzp, setRzp] = useState(null);

  useEffect(() => {
    // Initialize Razorpay here with your key
    const options = {
      key: import.meta.env.RAZORPAY_KEY,
    };

    const razorpayInstance = new window.Razorpay(options);
    setRzp(razorpayInstance);

    // Clean up the instance on unmount
    return () => {
      rzp && rzp.destroy();
    };
  }, []);

  return (
    <RazorpayContext.Provider value={rzp}>{children}</RazorpayContext.Provider>
  );
};
