import React from "react";
import axios from "axios";

const GoogleAuth = () => {
  const handleGoogleLogin = async () => {
    try {
      // Send a request to your server to initiate Google OAuth authentication
      const response = await axios.get("/auth/google");

      // Redirect to the Google OAuth login page
      window.location.href = response.data.authUrl;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <button onClick={handleGoogleLogin}></button>
    </div>
  );
};

export default GoogleAuth;
