import React, { useRef, useState } from 'react'

export function BentoTilt({children,className=""})
{
    console.log(className);
    console.log("MKC")

    const [transformStyle,setTransformStyle]=useState("");
    //ref banayege us element ka using use ref
    const cardRef=useRef(null);

    function handleMouseMove(e){

        //this determines which card we are currently on or what we are 
        //targeting 
        if(!cardRef.current) return ;


        //getting the propertuies and find the current ref of the card
        const {left,top,width,height}=cardRef.current.getBoundingClientRect();

        //getBoundingClientRect:The Element.getBoundingClientRect() method in JavaScript is used to get the size and position of an HTML element relative to the viewport (the visible area of the browser window). 

        //POSITION RELATIVE TO CURSOR
        //this is for the card relative to the cursor
        const relativeX=(e.clientX-left)/width;
        const relativeY=(e.clientY-top)/height;

        //first we calculate the relative difference between the mousr cursor and the card

        //now we calculate the tilt of the card
        const tiltX=(relativeY-0.5)*5;
        const tiltY=(relativeX-0.5)*-5;

        const newTransform=`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95,.95,.95)`;
        setTransformStyle(newTransform);
    }

    function handleMouseLeave()
    {
        setTransformStyle("");
    }

    return(
        <div 
        className={className}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{transform:transformStyle}}
        >
            {children}
        </div>
    )
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