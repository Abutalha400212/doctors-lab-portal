import React from 'react';
import appoinment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'
const MakeAppointment = () => {
    return (
        <div className="hero my-32" style={{background: `url(${appoinment})`}}>
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} className="w-1/2 rounded-lg shadow-2xl -mt-40 scale-175 hidden lg:block" alt='' />
          <div className='lg:w-1/2 '>
            <h4 className='text-primary font-bold text-xl'>Appointment</h4>
            <h1 className="text-5xl font-bold">Make an appointment Today</h1>
            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default MakeAppointment;