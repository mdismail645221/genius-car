import React from 'react';
import img1  from '../../../assets/about1.png'
import img2  from '../../../assets/about2.png'

const About = () => {
    return (
        <div className="hero bg-base-200 py-32">
            <div className="hero-content flex flex-col-reverse  md:flex-row w-4/5 mx-auto items-center justify-between">
                <div className='relative w-full lg:w-3/5'>
                    <div>
                     <img src={img1} className=" rounded-lg shadow-2xl" style={{width: "460px", height: "473px"}} />
                    </div>
                    <div className='absolute right-0 top-1/2'>
                        <img src={img2} className=" rounded-lg shadow-2xl w-2/3" style={{width: "327px", height: "332px"}}/>
                    </div>
                </div>
                <div className='w-full lg:w-2/5'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;