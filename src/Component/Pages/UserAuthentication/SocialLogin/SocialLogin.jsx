import React from 'react';
import auth from '../../../../Firebase/firebase.init'
import { useSignInWithFacebook, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SocialLogin = () => {


  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)

  const [signInWithFacebook, facebookUser, FacebookLoading, FacebookError] = useSignInWithFacebook(auth);

  const location = useLocation()
  let from = location.state?.from?.pathname || "/";

  if (googleError || FacebookError) {

    toast.error(<>{googleError?.message}, {FacebookError?.message}</>)
  }

  if (googleLoading || FacebookLoading) {
    return <Loading></Loading>
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

      <ToastContainer />
    </div>
  );
};

export default SocialLogin;