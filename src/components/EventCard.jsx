import React from 'react'

const EventCard = ({ event }) => {
  return (
    <div className='border-2 border-black/20 rounded my-2 p-3'>

        <div className='flex justify-between'>
            <h2 className='font-bold'>{event.name}{event.speakers.length !== 0 ? ":" : ""}</h2>
            <p className='text-lg text-green-700'>{event.time}</p>
        </div>

        <div>
            {
                event.speakers.map((speaker, i) => {
                    return (
                        <div key={i} className='my-4 ml-8 items-center grid grid-cols-3'>
                            <div className='w-24 h-24 rounded-full flex justify-center items-center cover border-4 border-red-500 overflow-hidden'>
                                <img className='pointer-events-none' src={speaker.img} alt="speaker" />
                            </div>
                            <div className='ml-2 col-span-2'>
                                <h3 className='font-bold'>{speaker.name}</h3>
                                <h3 className='font-light text-sm'>{speaker.title}</h3>
                                <h3 className={speaker.name !== "" ? `font-light text-sm` : `font-bold`}>{speaker.organization}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default EventCard