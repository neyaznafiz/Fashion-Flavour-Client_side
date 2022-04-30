import React from 'react';
import auth from '../../../../Firebase/firebase.init'
import { useSignInWithFacebook, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';


const SocialLogin = () => {

    
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)

    const [signInWithFacebook, facebookUser, FacebookLoading, FacebookError] = useSignInWithFacebook(auth);

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (googleError || FacebookError) {
        return (
          <div>
            <p>Error: {googleError.message}</p>
          </div>
        );
      }

      if (googleLoading || FacebookLoading) {
        return <p>Loading...</p>;
      }

      if (googleUser || facebookUser) {
        return (
          <div>
            <p>Signed In User: {googleUser.email}</p>
          </div>
        );
      }


    return (
        <div>
            <div className='coustom-shadow py-14 px-4 grid h-72 w-72'>

                <div>
                    <button onClick={() => signInWithGoogle()} className=''> <AiFillGoogleCircle className='mt-1 mr-2'></AiFillGoogleCircle> Continue witth google</button>
                </div>

                <div>
                    <button onClick={() => signInWithFacebook()} className=' '> <BsFacebook className='mt-1 mr-2'></BsFacebook> Continue witth Facebook</button>
                </div>

            </div>
        </div>
    );
};

export default SocialLogin;