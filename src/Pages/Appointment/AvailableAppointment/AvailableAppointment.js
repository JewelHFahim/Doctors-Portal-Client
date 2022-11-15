import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({selectedDate}) => {
    const [ appointmentOption, setAppointmentOption] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/appointmentoptions')
        .then(res => res.json())
        .then(data => setAppointmentOption(data))
    },[])


    return (
        <div className='mt-20'>
            <p className='text-secondary font-bold text-center '>Available Appointments on {format(selectedDate, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12' >
                {
                    appointmentOption.map(option => <AppointmentOptions 
                    key ={option._id} 
                    option = {option}
                    setTreatment = {setTreatment}
                     ></AppointmentOptions>)
                }
            </div>
            {
                treatment && 
                <BookingModal treatment = {treatment} setTreatment = {setTreatment} selectedDate = {selectedDate} ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;