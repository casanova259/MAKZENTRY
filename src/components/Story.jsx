import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import Button from './Button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Story = () => {

    //use as the ref to that img element 
    //gives us the direct DOM access
    const frameRef = useRef(null);

    const handleMouseLeave = () => {

        //this si the function which runs when mouse leaves the image
        const element = frameRef.current;
        gsap.to(element, {
            //itne time me img apne real size pe wapis aati h
            duration: 0.3,
            //this basically removes the rotations
            rotateX: 0, rotateY: 0,
            // transformPerspective:500,
            ease: 'power1.inOut'
        })
    }


    //THIS IS THE CORE OF THE 3D EFFECT LOGIC
    const handleMouseMove = (e) => {
        //getting the hieghts:get the mouse positions
        const { clientX, clientY } = e;
        //for saftey check if there's no element we return 
        const element = frameRef.current;

        if (!element) return;
        
        //this returns an object whcih is then desturctured and left top everything
        const rect = element.getBoundingClientRect();
        //rect.left-distance from left edge of the viewportt
        //this calculates mouse position relative to the image
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        //what this does is basically coverts thwe viewport coordinates to image-local cordinates
        //this helps us know where  the mouse is within the image boundary
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        //this calculates the center poiunt of the image


        //now we rotate it to relative position to the cursor 

        //THE TILT :
        //here y-center =distance from the center Vertically
        //why we divided it to normalise to -1 to +1 range
        //-10 scale to degrees and invert
        //if the mouse is at the top the image tilts up 
        //if the mouse is at down it tils dow
        const rotateX = ((y - centerY) / centerY) * -10;
        //same as for the horizontal tilt 
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut'
        })

        //now comes the animation part
        //we know each of this but what it Transformperspective:500 
        //distance from the viewer to the Z=0 plane
    }


    //SCROLL ANIMATION
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#prologue",
                start: "center center",
                end: "+=400 center",
                scrub: 1,
            },
        });

        clipAnimation.to("#prologue", {
            backgroundColor: "#edff66",
        });

        clipAnimation.to("#realm-btn", {
            backgroundColor: "black",
            color: "white",
        }, "<");  // as same time as story animation start

        clipAnimation.to("#story-text p", {
            color: "black",
        }, "<");
    });
    return (
        <section id='prologue' className="min-h-dvh bg-black w-screen text-blue-50">
            <div className="size-full flex flex-col items-center py-10 pb-24">
                <p className='font-general text-sm uppercase md:text-[10px]'>the multiversal ip world</p>

                <div className="relative size-full">
                    <AnimatedTitle
                        title="the st<b>o</b>ry of<br/>a hidden real<b>m</b>"
                        sectionId="#story"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />
                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img src="img/entrance.webp" className='object-contain' alt=""

                                    onMouseLeave={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    onMouseUp={handleMouseLeave}

                                    onMouseEnter=
                                    //why on mouse enterEnsures image is flat when mouse first enters
                                    // Prevents weird starting positions
                                    //Creates consistent experience
                                    {handleMouseLeave}
                                    ref={frameRef}

                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="story-text" className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                            Where realms converge, lies Fun and the boundless pillar.
                            Discover its secrets and shape your fate amidst infinite
                            opportunities.
                        </p>

                        <Button
                            id="realm-btn"
                            title="discover prologue"
                            containerClass="mt-5 text-black"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story