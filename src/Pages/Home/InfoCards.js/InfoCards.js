import React from 'react';
import clock from '../../../Assets/icons/clock.svg';
import marker from '../../../Assets/icons/marker.svg';
import phone from '../../../Assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [

        {
            id: 1,
            title: 'Opening Hour',
            description: '10.00 am to 6.00 pm',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            title: 'Visite Our Location',
            description: 'Farmgate, Dhaka-1215',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            title: 'Contact Us',
            description: '01911-209322',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]

    return (
        <div className='grid gap-6 text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <InfoCard 
                key = {card.id} 
                card = {card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;