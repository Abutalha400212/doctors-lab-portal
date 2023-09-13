import React, { useState } from 'react';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import Header from '../Header/Header';

const Appointment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date())
    return (
        <div>
            <Header selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            <AvailableAppointment selectedDate={selectedDate}/>
        </div>
    );
};

export default Appointment;