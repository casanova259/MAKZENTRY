import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'


//step1 : detsructuring the props that are coming from the about section
const AnimatedTitle = ({ title, containerClass }) => {

    const containerRef = useRef(null);
    //now we build the animation

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: containerRef.current,
    //                 start: "100 bottom",
    //                 end: "center bottom",
    //                 toggleActions: "play none none reverse"

    //                 //- Determines how the linked animation is controlled at the 4 distinct toggle places - onEnter, onLeave, onEnterBack, and onLeaveBack, in that order. The default is play none none none
    //             }
    //         });

    //         titleAnimation.to(".animated-word", {
    //             opacity: 1,
    //             tranform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
    //             ease: "power2.inOut",
    //             stagger: 0.02
    //         })
    //     }, containerRef)

    useEffect(() => {
    const ctx = gsap.context(() => {
        const titleAnimation = gsap.timeline({
            scrollTrigger : {
                trigger : containerRef.current,
                start : "100 bottom",
                end : "center bottom",
                toggleActions : "play none none reverse"
            }
        });

        titleAnimation.to(".animated-word" , {
        opacity : 1,
        transform : 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
        ease : "power2.inOut",
        stagger : 0.02
        })

    }, containerRef);

    return() => ctx.revert();
  }, []);

   


        return (
            <div ref={containerRef} className={`animated-title ${containerClass}`}>
                {title.split("<br/>").map((line, index) => {
                    return (
                        <div key={index} className='flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'>
                            {line.split(" ").map((word, i) => {
                                //i is the index for each word 
                                return (
                                    <span key={i} className='animated-word special-font' dangerouslySetInnerHTML={{ __html: word }} />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
// import gsap from 'gsap'
    export default AnimatedTitle