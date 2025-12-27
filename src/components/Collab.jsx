import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)
const Collab = () => {

    //thefirst step is to create the reference
    const containerRef = useRef(null);

    useGSAP(() => {
        //the first step is to create a timeline :makes us run multiple animations simultaneously
        const Tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,//it is the element whcih is gonna have the animation
                start: "top top", //humara animation jo h woh top se start hoga
                end: "+=1200",
                scrub: 0.5,
                pin: true
            }
        })

        //now timeline banane ke baad
        //we need to set the cards for the animation
        gsap.set("#cards", { perspective: 1000 })
        //basically what this code does is to give the cards a 3d environment and sets them up for animation


        //now we can simply create the animation
        Tl.to(".bottom-r", {
            xPercent: +90,
            yPercent: 100,
            opacity: 0,
            scale: 1.1,
            ease: "power1.inOut"
        }, 0)
        Tl.to(".bottom-l", {
            xPercent: -90,
            yPercent: 100,
            opacity: 0,
            scale: 1.1,
            ease: "power1.inOut"
        }, 0)

        Tl.to(".bento-item-1", {
            xPercent: 120,
            yPercent: 0,
            scale: 0.8,
            opacity: 0.9,
            ease: "power1.inOut"
        }, 0)
        Tl.to(".bento-item-2", {
            xPercent: -120,
            yPercent: 0,
            scale: 0.8,
            opacity: 0.9,
            ease: "power1.inOut"
        }, 0)


        Tl.to(".bento-hero", {
            xPercent: 0,
            yPercent: 0,
            scale: 1.1,
            ease: "power1.inOut"
        }, 0)

        // Tl.to(".title",{

        // })
    },{ scope: containerRef })
    return (
        <section id="vault" className="h-auto w-screen bg-black p-10">
            <div ref={containerRef} className='relative h-screen text-blue-50 flex flex-col items-center justify-evenly mb-40'>

                {/* THE TITLE */}
                <div className='relative z-20 sm:text-center special-font text-[6rem]   '>
                    <p>Ze<b>n</b>try at a glan<b>c</b>e</p>
                </div>


                {/* CARDS */}
                <div id="cards" className="relative  h-auto w-full  flex gap-1 flex-wrap items-center justify-center">
                    <div className="absolute top-10 left-120 z-1">
                        <div className="bento-item-1">
                            <img src="img/gallery-2.webp" alt="" className="object-cover object-center card" />
                        </div>
                    </div>



                    <div className="relative z-10 h-[65vh] w-[25vw]">
                        <div className="bento-hero">
                            <img
                                src="img/HERO.png"
                                className="object-cover object-center rounded-md bg-violet-300"
                            />
                        </div>
                    </div>


                    <div className="absolute z-5 bottom-10 left-80">
                        <div className="bottom-l">
                            <img
                                src="img/gallery-3.webp"
                                className="object-cover card object-center"
                            />
                        </div>
                    </div>

                    <div className="absolute top-10 right-120 z-1">
                        <div className="bento-item-2">
                            <img
                                src="img/gallery-4.webp"
                                className="object-cover card object-center"
                            />
                        </div>
                    </div>
                    <div className="absolute z-5 bottom-10 right-80">
                        <div className="bottom-r">
                            <img
                                src="img/gallery-5.webp"
                                className="object-cover card object-center"
                            />
                        </div>
                    </div>
                </div>

                {/* PARAH */}
                <div className="bento-text relative w-200 text-center font-circular mt-40">
          <p>
            Join us in molding the Nova Universe! Engage in governance and make
            your voice heard as we collaboratively build a dynamic world limited
            only by our collective creativity.
          </p>
        </div>
            </div>
        </section>
    )
}

export default Collab