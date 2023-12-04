import React from 'react';
import { events } from "../data/eventData";
import EventCard from './EventCard';

const Events = () => {
  return (
    <div>
      <h1 className='bg-green-500 p-2 md:p-5 rounded text-white text-4xl md:text-6xl'>Etkinlik Takvimi</h1>

      <div className='max-w-3xl'>

        <div id='altı'>
        <h2 className='mt-10 underline text-xl'>6 Aralık Çarşamba</h2>
        {
          events.map((event, i) => {
            if (event.day === "6 Aralık - Çarşamba") {
              return (
                <EventCard key={i} event={event}  />
              )
            }
            return (<></>);
          })       
        }

        <div className='w-full bg-green-300 h-10 rounded'></div>
        </div>

        <div id='yedi'>
        <h2 className='mt-8 underline text-xl'>7 Aralık Perşembe</h2>
        {
          events.map((event, i) => {
            if (event.day === "7 Aralık - Perşembe") {
              return (
                <EventCard key={i} event={event}  />
              )
            }
            return (<></>);
          })       
        }

        <div className='w-full bg-green-300 h-8 rounded'></div>
        </div>

      </div>
    </div>
  )
}

export default Events