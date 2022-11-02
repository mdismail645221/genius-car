import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/login.png'
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {

    const {logIn} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // firebase login athentication
        logIn(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch((error)=> {
            console.error(error.message)
        })
    }



    return (
        <div className="hero min-h-screen bg-base-200 py-32">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-x-20 items-center">
                <div className="text-center lg:text-left w-full">
                    <img src={loginImg} alt="loginImg" style={{ width: "459px", height: "502px" }} />
                </div>
                <div className="card w-full shadow-2xl bg-base-100 py-16">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input  name='email' type="email" placeholder="email" className="input input-bordered"  required/>
                        </div>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered"  required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn" style={{background: "#FF3811"}}>Login</button>
                        </div>
                        <div className="form-control mt-6">
                            <p>Have an account  <Link to='/register' className='font-bold hover:underline' style={{color: "#FF3811"}}>Sign Up</Link></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;