import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import React from 'react'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {



    //CLIP ANIMATION +TIMELINE ONSCROLL
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            //TIMELINE-Creates a timeline to orchestrate animations sequentially or in parallel. Here it's used with ScrollTrigger to control the animation based on scroll position.
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",//trigger 800 px after is passes the center
                scrub: 0.5,//hiw animation work on scroll
                pin: true,
                pinSpacing: true

            }
        });


        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });
    })
    return (
        <div id='about' className='min-h-screen w-screen'>
            <div className='relative mb-8 mt-20 flex flex-col items-center gap-5'>
                <h2 className='font-general text-2xl uppercase md:text-[10px]'>Welcome to Game Mode</h2>
                <AnimatedTitle
                    title="Disc<b>o</b>ver the world's<br/>l<b>a</b>rgest shared adventure"
                    containerClass="mt-5 !text-black text-center"
                />

                <div className='about-subtext font-circular'>
                    <p>The Game of Games begins—your life, now an epic MMORPG</p>
                    <p className='text-gray-500'>Valo unites every player from countless games and platforms, both digital and physical, into a unified Play Economy</p>
                </div>
            </div>

            <div className='h-dvh w-screen' id='clip'>
                <div className='mask-clip-path about-image'>
                    <img src="img/about.webp" alt="" className='absolute top-0 left-0 size-full object-cover object-center' />
                </div>
            </div>
        </div>
    )
}

export default About