import React from 'react';
// import bg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
const Header = ({selectedDate,setSelectedDate}) => {

    return (
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div className='text-black'>
      <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      />
    </div>
  </div>
</div>
    );
};

export default Header;