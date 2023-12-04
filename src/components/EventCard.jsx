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
                        <div key={i} className='my-4 ml-8 flex items-center'>
                            <img className='h-24' src={speaker.img} alt="speaker" />
                            <div className='ml-2'>
                                <h3 className='font-bold'>{speaker.name}</h3>
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