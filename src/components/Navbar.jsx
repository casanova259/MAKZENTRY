import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
// import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { ScrollTrigger } from 'gsap/all';

import { TiLocationArrow } from 'react-icons/ti';

const Navbar = () => {
    const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
    const [IsAudioPlaying, SetIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);


    const {y:currentScrollY}=useWindowScroll();

    useEffect(()=>{
        if(currentScrollY===0)
        {
            //if the user scroll is nothing then
            setIsNavVisible(true);
            navContainerRef.current.classList.remove("floating-nav")
        }
        else if(currentScrollY>lastScrollY)
        {
            setIsNavVisible(false);
            navContainerRef.current.classList.add("floating-nav")
        }
        else if(currentScrollY<lastScrollY)
        {
            setIsNavVisible(true);
            navContainerRef.current.classList.add("floating-nav")
            
        }

        setLastScrollY(currentScrollY)
    },[currentScrollY,lastScrollY])

    useEffect(()=>{
        gsap.to(navContainerRef.current,{
            y:isNavVisible?0:-100,
            opacity:isNavVisible?1:0,
            duration:0.2,
        })
    },[isNavVisible])


    function toggleAudioIndicator()
    {
        //basically reverse ther state that whether the audio is playing or not
        SetIsAudioPlaying((audio)=>!audio)
        setIsIndicatorActive((active)=>!active)
    }

    useEffect(()=>{
        if(IsAudioPlaying)
        {
            audioElementRef.current.play()
        }
        else
        {
            audioElementRef.current.pause()
        }
    },[IsAudioPlaying])
    return (
        <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
            <header className='absolute top-0.5 w-full -translate-y-0.5'>
                <nav className='flex size-full items-center justify-between p-2.5'>
                    {/* now ended the left part of the NAVBar */}
                    <div className='flex items-center gap-7'>
                        <img src="/img/logo.png" alt="logo" className='w-10' />\
                        <Button
                            id="product-button"
                            title="Products"
                            rightIcon={<TiLocationArrow />}
                            containerClass="bg-blue-50 md:flex hidden items.center justify-center gap-1"
                        />
                    </div>


                    {/* now here we make the right part of the navbar */}
                    <div className='flex h-full items-center'>
                        <div className="hidden md:block">
                            {navItems.map((item) => {
                                // console.log(item.toLowerCase)
                                // console.log(item.lowercase)

                                return (
                                    <a href={`#${item.toLowerCase}`} className='nav-hover-btn' key={item}>
                                        {item}
                                    </a>
                                )

                            })}
                        </div>

                        <button onClick={toggleAudioIndicator} className="ml-10 flex items-center space-x-0.5 cursor-pointer">
                            <audio ref={audioElementRef} src='/audio/loop.mp3' className='hidden' loop />
                            {[1, 2, 3, 4].map((bar) => {
                                return (
                                    <div key={bar} className={`indicator-line ${isIndicatorActive?"active":""} `}
                                        style={{animationDelay:`${bar*0.1}s`}}
                                    />
                                )
                            })}
                        </button>
                    </div>


                </nav>
            </header>
        </div>
    )
}

export default Navbar