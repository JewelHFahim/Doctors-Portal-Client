import React from 'react';
import fluoride from '../../../Assets/images/fluoride.png';
import cavity from '../../../Assets/images/cavity.png';
import whitening from '../../../Assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const serviceData = [
        {
            id: 1,
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride
        },
        {
            id: 2,
            title: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        },
        {
            id: 3,
            title: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening
        },
    ]

    return (
        <div className='my-12'>
        <div  className='text-center'>
            <h1 className='text-xl font-bold text-primary'>Our Services</h1>
            <h1 className='text-4xl'>Services We Provide</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center'>
            {
                serviceData.map(service => <Service
                 key = {service.id} 
                 service = { service } ></Service>)
            }
        </div>
            
        </div>
    );
};

export default Services;