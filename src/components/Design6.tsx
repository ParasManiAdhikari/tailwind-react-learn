import './design6.css'
import bg from './utils/bg2.jpg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

export default function Design6() {
    const bg1 = useRef(null)
    const imgContainer = useRef(null)
    const img = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: bg1.current,
                pin: bg1.current,
                pinSpacing: false,
                start: "top top",
                endTrigger: ".last",
                end: "bottom bottom",
                markers: true,
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: imgContainer.current,
                    pin: imgContainer.current,
                    scrub: 1,
                    start: "0% 0%",
                },
            })
                .to(img.current, { transform: "translateZ(2200px)" });
        })
        return () => ctx.revert();
    }, []);

    return (
        <div className='relative'>
            <div
                ref={bg1}
                className="bg bg-black font-title absolute h-screen w-screen z-[-1]"
            ></div>
            <section className='bg-black'>
                <div ref={imgContainer} className="img-container perspective flex items-center justify-center h-screen">
                    <img ref={img} className="image" src={bg} alt='' />
                    <div className='text-white absolute flex flex-col items-center justify-center'>
                        <h1 className='text-[180px]'>
                            <span className='text-stroke'>Outlook</span> above
                        </h1>
                        <p className='opacity-50 w-48 text-[13px] text-center'>A showcase of the world' best aerial photography</p>
                    </div>
                </div>

                <div className='h-screen flex justify-center items-center'>
                    <p className='text-9xl last text-white'>PA6</p>
                </div>
            </section>
        </div>
    )
}
