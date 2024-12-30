import { useEffect } from "react";
import Pic1 from './utils/bg2.jpg'
import Lenis from "lenis";

export default function Design7() {
    useEffect(() => {
        const lenis = new Lenis()
        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <main className='relative h-[200vh]'>
            <Section1 />
            <Section2 />
        </main>
    );
}

const Section1 = () => {
    return (
        <div className="sticky top-0 h-screen bg-[#c72626] text-[3.5vw] flex flex-col items-center
        justify-center text-white pb-[10vh]">
            <p>Scroll Perspective</p>
            <div className="flex gap-4">
                <p>Section</p>
                <div>
                    <img src={Pic1} alt="" className="object-cover rounded-lg" width={200} />
                </div>
                <p>Transition</p>
            </div>
        </div>
    )
}

const Section2 = () => {
    return (
        <div className="relative h-screen">
            <div>
                <img src={Pic1} alt="" className="object-cover rounded-lg" />
            </div>
            <h1 className='text-white'>Section 2</h1>
        </div>
    )
}