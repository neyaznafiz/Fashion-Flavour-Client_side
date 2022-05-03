import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../../Firebase/firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

    const navigate = useNavigate()

    if (error) {
        toast.success(<p>Error: {error.message}</p>)
    }

    if (loading) {
        return <Loading></Loading>
    }

    const handleSignUp = async event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        await createUserWithEmailAndPassword(email, password)
navigate('/')


    }


    return (
        <div className=' w-full h-screen bg-yellow-600 border-8 border-yellow-600'>
            <section className="h-100 h-custom" style={{ backgroundColor: '1' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-5 col-xl-5">
                            <div className="card form-shadow">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                                    className="w-100 rounded-t-lg" style={{ borderTopLeftRadius: '.3rem' }, { borderTopRightRadius: '.3rem' }}
                                    alt="Sample photo" />
                                <div className="card-body">
                                    <h3 className="mb-4 pb-2  text-2xl font-bold font-serif">SignUp Here</h3>

                                    <form onSubmit={handleSignUp} className="px-md-2" >

                                        <div className="form-outline mb-4 form-shadow">
                                            {/* <input type="text" id="form3Example1q" className="form-control" /> */}
                                            <input type="text" name="name" id="form3Example1q" className='form-control' required />
                                            <label className="form-label fixed-top font-semibold px-2 text-white-50 text-sm" for="form3Example1q">NAME</label>
                                        </div>

                                        <div className="row">
                                            <div className=" mb-4">
                                                <div className="form-outline datepicker form-shadow">
                                                    {/* <input type="email" className="form-control" id="exampleDatepicker1" /> */}
                                                    <input type="email" name="email" id="exampleDatepicker1" className='form-control' required />
                                                    <label for="exampleDatepicker1" className="form-label font-semibold px-2 text-white-50 text-sm">TYPE YOUR EMAIL</label>
                                                </div>
                                            </div>
                                            <div className=" mb-4">
                                                <div className="form-outline datepicker form-shadow">
                                                    {/* <input type="password" name="password" className="form-control" id="exampleDatepicker1" /> */}
                                                    <input type="password" name="password" id="exampleDatepicker1" className='form-control' required />
                                                    <label for="exampleDatepicker1" className="form-label font-semibold px-2 text-white-50 text-sm">TYPE YOUR PASSWORD</label>
                                                </div>
                                            </div>

                                            <div className=" mb-4">
                                                <div className="form-outline datepicker form-shadow">
                                                    {/* <input type="password" className="form-control" id="exampleDatepicker1" /> */}
                                                    <input type="password" name="confirm-password" id="exampleDatepicker1" className='form-control' required />
                                                    <label for="exampleDatepicker1" className="form-label font-semibold px-2 text-white-50 text-sm">COMFIRM YOUR PASSWORD</label>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='flex items-center justify-between'>
                                            <button type="submit" className="btn btn-lg mb-3 btn-shadow text-gray-300">Sign Up</button>

                                            <p className='text-gray-200 font-semibold'>Already have an account ? <Link to='/login' className='hover:text-white hover:border-b-2'>Log In</Link></p>
                                        </div>

                                    </form>

                                    <div>
                                        <SocialLogin></SocialLogin>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <ToastContainer />
        </div>

    );
};

export default SignUp;