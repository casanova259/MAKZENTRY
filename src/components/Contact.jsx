import React from 'react'
import Button from './Button';
import ImageClipBox from './ImageClip';
const Contact = () => {
    return (
        <section id="contact" className="my-20 w-screen px-10">
            {/*yeh dive hume provide krrta h padding basically */}
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">

                {/* Ab hume ek div legega left ke liye */}
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox
                        src="img/contact-1.webp"
                        clipClass="contact-clip-path-1"
                    />
                    <ImageClipBox
                        src="img/contact-2.webp"
                        clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
                    />

                </div>

                {/* ek div legega right images ke liye */}

                <div className="absolute left-20 -top-40 w-60 sm:top-0.5 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox
                        src="img/swordman-partial.webp"
                        clipClass="absolute md:scale-125"
                    />
                    <ImageClipBox
                        src="img/swordman.webp"
                        clipClass="sword-man-clip-path md:scale-125"
                    />
                </div>

                {/* aur ek div lgega hume heading ke liye jo center me rehti h */}
                <div className="relative z-10 flex flex-col items-center text-center">
                    <p className='font-general uppercase text-[10px]'>Join US</p>
                    <p className="special-font m-10 md:w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
                        let's b<b>u</b>ild the <br /> new era of <br />g<b>a</b>ming t<b>o</b>gether
                    </p>
                    <Button
                        title="contact us"
                        containerClass="font-general "
                    />
                </div>
            </div>
        </section>
    )
}

export default Contact;