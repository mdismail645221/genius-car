import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/login.png'
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {


    const {createUser, upProfile} = useContext(AuthContext)


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password) 
        createUser(email, password)
        .then(result=> {
            const user = result.user;
            console.log(user)
            updateProfileName(name)
        })
        .catch((error)=> {
            console.error(error.message)
        })
    }

    const updateProfileName = (name) => {
        const profile = {
            displayName: name
        }
        upProfile(profile)
            .then(result=> {
                const user = result.user;
                console.log(user)
            })
            .catch((error)=>{
                console.log(error)
            })
    }



    return (
        <div className="hero min-h-screen bg-base-200 py-32">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-x-20 items-center">
                <div className="text-center lg:text-left w-full">
                    <img src={loginImg} alt="loginImg" style={{ width: "459px", height: "502px" }} />
                </div>
                <div className="card w-full shadow-2xl bg-base-100 py-16">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn" style={{ background: "#FF3811" }}>Register</button>
                        </div>
                        <div className="form-control mt-6">
                            <p>Already have an account? <Link to='/login' className='font-bold hover:underline' style={{ color: "#FF3811" }}>Login</Link></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;