import './design6.css'
import bg from './utils/bg2.jpg'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);
export default function Design6() {
    const bg1 = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger:bg1.current,
                pin: bg1.current,
                pinSpacing: false,
                start:"top top",
                endTrigger:".last",
                end:"bottom bottom"
            })
        })
    })

    return (
        <div className='relative'>
            <div className="font-title absolute h-screen w-screen">
                <section className='bg-black'>
                    <div className="img-container flex items-center justify-center h-screen">
                        <img className="image" src={bg} alt='' />
                        <div className='text-white absolute flex flex-col items-center justify-center'>
                            <h1 className='text-[180px]'>
                                <span className='text-stroke'>Outlook</span> above
                            </h1>
                            <p className='opacity-50 w-48 text-[13px] text-center'>A showcase of the world' best aerial photography</p>
                        </div>
                    </div>
 
                    <div className='h-screen'>
                        <p className='text-9xl last'>PA6</p>
                    </div>
                </section>
            </div>
        </div>
    )
}
