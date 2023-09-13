import React from 'react';
import chair from '../../../assets/images/chair.png'
import './banner.css'
const Banner = () => {
    return (
<div className="hero text-black bg-img">
  <div className="hero-content flex-col lg:flex-row-reverse " >
    <img src={chair} className="rounded-lg shadow-2xl  lg:w-1/2" alt=''/>
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;