import React, { useEffect } from "react";

const GoogleSignIn = () => {
  useEffect(() => {
    const handleCredentialResponse = (response) => {
      // Handle the credential response here
      console.log("Credential response:", response);
    };

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      const gIdOnload = document.getElementById("g_id_onload");
      gIdOnload.dataset.client_id =
        "269752483384-oq06edd11cvfm2l4qj2lt2er8jov2con.apps.googleusercontent.com";
      gIdOnload.dataset.callback = "handleCredentialResponse";

      const gIdSignin = document.createElement("div");
      gIdSignin.className = "g_id_signin";
      gIdSignin.dataset.type = "standard";

      // Append the g_id_onload and g_id_signin elements to the document body
      document.body.appendChild(gIdOnload);
      document.body.appendChild(gIdSignin);
    };

    document.body.appendChild(script);

    return () => {
      // Clean up the script and elements when the component unmounts
      document.body.removeChild(script);
      const gIdOnload = document.getElementById("g_id_onload");
      const gIdSignin = document.querySelector(".g_id_signin");
      if (gIdOnload) document.body.removeChild(gIdOnload);
      if (gIdSignin) document.body.removeChild(gIdSignin);
    };
  }, []);

  return <div>Google Sign-In Component</div>;
};

export default GoogleSignIn;
