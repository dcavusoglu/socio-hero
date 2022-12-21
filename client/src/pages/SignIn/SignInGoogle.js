import React, { useState, useEffect } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
const clientId= "385605561876-5f24l0kjs4p8stuniqovj5uir8gfp9ta.apps.googleusercontent.com";

const SCOPE = "https://www.googleapis.com/auth/cloud-platform"




const SignInGoogle = (props) => {

  const { profile, setProfile } = props;

  useEffect(() => {
    const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: SCOPE
            });
        };
        gapi.load('client:auth2', initClient);
    });


  const onSuccess = (res) => {
        setProfile(res.profileObj);
        console.log('success', res.profileObj);
        window.location.replace("http://localhost:3000/dashboard");
    };
    const onFailure = (err) => {
        console.log('failed', err);
    };

    //  const logOut = () => {
      //     setProfile(null);
      // };


      return (
        <div>
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        </div>
  )
}

export default SignInGoogle
