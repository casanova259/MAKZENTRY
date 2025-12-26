import React from 'react'

export function BentoTilt()
{
    
}
const BentoCard = ({src,title,description}) => {
  return (
    <div className="relative size-full">
        {/* Video */}
        <video
        src={src}
        loop
        muted
        autoPlay
        className='absolute left-9 top-0 size-full object-cover object-center'
        />

        {/* TEXT */}

        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
            <div>
                <h1 className='bento-title special-font'>
                    {title}
                    {description&&(
                        <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>
                    )}
                </h1>
            </div>
        </div>
    </div>
  )
}

export default BentoCard