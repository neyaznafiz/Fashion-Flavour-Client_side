import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../Firebase/firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const LogIn = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)

    const navigate = useNavigate()

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    // if (user) {
    //     return (
    //         <div>
    //             <p>Signed In User: {user.email}</p>
    //         </div>
    //     );
    // }

    const handleLogIn = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        signInWithEmailAndPassword(email, password)
        navigate('/')
    }

    return (
        <div className=' w-full h-screen bg-yellow-600 border-8 border-yellow-600 grid grid-cols-1 lg:grid-cols-1'>
            <section className="h-100 h-custom" style={{ backgroundColor: '1' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-5 col-xl-5">
                            <div className="card form-shadow">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                                    className="w-100 rounded-t-lg" style={{ borderTopLeftRadius: '.3rem' }, { borderTopRightRadius: '.3rem' }}
                                    alt="Sample photo" />
                                <div className="card-body">
                                    <h3 className="mb-4 pb-2  text-2xl font-bold font-serif">LogIn Here</h3>

                                    <form onSubmit={handleLogIn} className="px-md-2" >

                                        <div className="row">
                                            <div className=" mb-4">
                                                <div className="form-outline datepicker form-shadow">
                                                    <input type="email" name="email" id="exampleDatepicker1" className='form-control py-2' required />
                                                    <label for="exampleDatepicker1" className="form-label font-semibold px-2 text-white-50 text-sm">TYPE YOUR EMAIL</label>
                                                </div>
                                            </div>
                                            <div className=" mb-4">
                                                <div className="form-outline datepicker form-shadow">
                                                    <input type="password" name="password" id="exampleDatepicker1" className='form-control py-2' required />
                                                    <label for="exampleDatepicker1" className="form-label font-semibold px-2 text-white-50 text-sm">TYPE YOUR PASSWORD</label>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='lg:flex lg:items-center lg:justify-between grid grid-cols-1'>
                                            <button type="submit" className=" btn btn-lg mb-3 btn-shadow text-gray-300">Log In</button>

                                            <p className='text-gray-200 font-semibold lg:flex grid justify-center '>Are you new here ? <Link to='/signup' className='hover:text-white hover:border-b-2 lg:mx-2 mx-auto'>Sign Up</Link></p>
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

        </div>

    );
};

export default LogIn;