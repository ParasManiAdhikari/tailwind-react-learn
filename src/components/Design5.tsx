import { motion } from "framer-motion"
import { useState } from 'react';

interface SplitTextProps {
    text: string
    className?: string
}

export default function Design5() {

    // SplitText Component
    function SplitText({ text = "Split Text Animation", className = "" }: SplitTextProps) {
        // Split text into an array of characters
        const characters = text.split("")

        // Animation configuration for each character
        const containerVariants = {
            hidden: { opacity: 0 },
            visible: (i = 1) => ({
                opacity: 1,
                transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
            }),
        }

        const childVariants = {
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 200,
                },
            },
            hidden: {
                opacity: 0,
                y: 20,
                transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 200,
                },
            },
        }

        return (
            <motion.h1
                className={`text-4xl font-bold tracking-tight ${className}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {characters.map((character, index) => (
                    <motion.span key={index} variants={childVariants} className="inline-block">
                        {character === " " ? "\u00A0" : character}
                    </motion.span>
                ))}
            </motion.h1>
        )
    }

    const [inputValue, setInputValue] = useState<string>('Split Text Animation');
    const [displayValue, setDisplayValue] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = () => {
        setDisplayValue(inputValue);
        setSubmitted(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setSubmitted(false);
    };

    // App Component with SplitText usage
    return (
        <div className="min-h-screen min-w-screen font-title">
            <div className="bg-[#b4b440] p-5 h-screen flex flex-col justify-between">
                <div className="flex justify-between">
                    <span>PEHSECHS</span>
                    <span>PAJAX</span>
                </div>

                <h1 className="text-9xl text-center justify-center">
                    <div className="flex flex-col justify-center items-center">
                        {!submitted && (
                            <SplitText text='. .' className="text-white text-8xl" />
                        )}

                        {submitted && (
                            <SplitText text={displayValue} className="text-white font-synco text-8xl" />
                        )}

                        <div className="flex flex-row text-4xl mt-20">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Enter something"
                                className="p-4 border-2 rounded-md"
                            />
                            <button onClick={handleSubmit} className="rounded-lg p-4 ml-2 bg-amber-200">
                                Play</button>
                        </div>
                    </div>
                </h1>

                <div className="flex justify-between">
                    <span>PAGE X</span>
                    <span>PSX</span>
                </div>
            </div>
        </div>
    )
}