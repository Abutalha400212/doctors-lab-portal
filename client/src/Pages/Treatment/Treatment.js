import React from 'react';
import treatment from '../../assets/images/treatment.png'
const Treatment = () => {
    return (
        <div className="hero my-40">
        <div className="hero-content flex-col lg:flex-row justify-around">
          <img src={treatment} className="max-w-md lg:max-w-sm rounded-lg shadow-2xl " alt='' />
          <div className='lg:w-2/5 text-black'>
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Treatment;