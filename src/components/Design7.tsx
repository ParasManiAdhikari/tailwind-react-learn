import { useEffect } from "react";
import Pic1 from './utils/bg2.jpg'
import Lenis from "lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { div, main } from "framer-motion/client";

export default function Design7() {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })

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
            <Section1 scrollYProgress={scrollYProgress} />
            <Section2 scrollYProgress={scrollYProgress} />
        </main>
    );
}

const Section1 = ({ scrollYProgress }: { scrollYProgress: any }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])

    return (
        <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen bg-[#c72626] text-[3.5vw] flex flex-col items-center
        justify-center text-white pb-[10vh] rounded-md">
            <p>Parallax Section Transition</p>
            <div className="flex gap-4">
                <p>Section</p>
                <div>
                    <img src={Pic1} alt="" className="object-cover rounded-lg" width={120} />
                </div>
                <p>Transition</p>
            </div>
        </motion.div>
    )
}

const Section2 = ({ scrollYProgress }: { scrollYProgress: any }) => {
    return (
        <div className="relative h-screen">
            <div>
                <img src={Pic1} alt="" className="object-cover rounded-lg" />
            </div>
            <h1 className='text-white'>Section 2</h1>
        </div>
    )
}