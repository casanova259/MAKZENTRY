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
    {/*What it does: References the navbar container div
    Role:

    Target for GSAP animations
    CSS class manipulation (adding/removing floating-nav)
    Why it's there: Need direct DOM access for:

    classList.add/remove("floating-nav")
    GSAP's gsap.to(navContainerRef.current, {...}) */
    }
    const audioElementRef = useRef(null);
    //     What it does: References the <audio> HTML element
    // Role: Control audio playback programmatically
    // Why it's there: Need to call .play() and .pause() methods
    // Used in:
    // javascriptif (IsAudioPlaying) {
    //     audioElementRef.current.play()
    // } else {
    //     audioElementRef.current.pause()
    // }


    const { y: currentScrollY } = useWindowScroll();

    //extracting the cuureent scroll uysing react use library
    //obejct returns with x and y properties 
    //detsructuring it and extracting the values of y and renaming it to current scroll y
    //everytime when user scrolls the value changes

    // SCROLL DIRECTION LOGIC
    useEffect(() => {
        if (currentScrollY === 0) {
            //if the user scroll is nothing then
            //when user is at the top and havent scrolled yet
            setIsNavVisible(true);
            navContainerRef.current.classList.remove("floating-nav")
        }
        else if (currentScrollY > lastScrollY) {

            //when user scrolls down cz the currscrioll is higher than the last
            //hide navbar
            setIsNavVisible(false);
            //add the class to navbar
            navContainerRef.current.classList.add("floating-nav")
        }
        else if (currentScrollY < lastScrollY) {

            //now when user scrolls up
            setIsNavVisible(true);
            navContainerRef.current.classList.add("floating-nav")

        }

        setLastScrollY(currentScrollY)
        //also updating the current scroll so that it stores the curr position for
        //next scroll
    }, 
    //dependencies - means runs whenever the scroll position changes 
    //detects the direction and update the navbar state
    [currentScrollY, lastScrollY])


    //THE GSAP ANI 
    useEffect(() => {
        //properties
        gsap.to(navContainerRef.current, {
            //normal y-0 y:-100 moves upto 100 px 
            //role-slideAnimation
            //why-100 navbar moves above the viewport
            y: isNavVisible ? 0 : -100,
            //opacity fade effect dalta h
            opacity: isNavVisible ? 1 : 0,
            //animation completes in 0.2 secoinds
            duration: 0.2,
        })
    }, 
    
    //dependencies : runs whenever the isnavVisible changes
    [isNavVisible])   


    function toggleAudioIndicator() {
        //basically reverse ther state that whether the audio is playing or not
        SetIsAudioPlaying((audio) => !audio)
        setIsIndicatorActive((active) => !active)
    }

    useEffect(() => {
        if (IsAudioPlaying) {
            audioElementRef.current.play()
        }
        else {
            audioElementRef.current.pause()
        }
    }, 
    
    //dependencies basically runs when audio state changes
    [IsAudioPlaying])
    return (
        <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
            <header className='absolute top-0.5 w-full -translate-y-0.5'>
                <nav className='flex size-full items-center justify-between p-2.5'>
                    {/* now ended the left part of the NAVBar */}
                    <div className='flex items-center gap-7'>
                        <img src="/img/logo.png" alt="logo" className='w-10' />
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
                                    <a href={`#${(item.toLowerCase())}`} className='nav-hover-btn' key={item}>
                                        {item}
                                    </a>
                                )

                            })}
                        </div>

                        <button onClick={toggleAudioIndicator} className="ml-10 flex items-center space-x-0.5 cursor-pointer">
                            <audio ref={audioElementRef} src='/audio/loop.mp3' className='hidden' loop />
                            {[1, 2, 3, 4].map((bar) => {
                                return (
                                    <div key={bar} className={`indicator-line ${isIndicatorActive ? "active" : ""} `}
                                        style={{ animationDelay: `${bar * 0.1}s` }}
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