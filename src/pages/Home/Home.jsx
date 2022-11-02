import React from 'react';
import About from './Shared/About';
import Services from './Shared/Services';
import Slider from './Shared/Slider';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;