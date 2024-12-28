import { motion } from "framer-motion";

interface SplitTextProps {
    text: string;
    className?: string;
}

export default function SplitText({ text, className }: SplitTextProps) {
    const characters = text.split("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

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
    };

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
    );
}