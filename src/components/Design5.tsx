import { useState } from 'react';
import SplitText from './utils/SplitText'; // Import the SplitText component

export default function Design5() {
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

    return (
        <div className="min-h-screen min-w-screen font-title text-white">
            <div className="bg-[#b4b440] p-5 h-screen flex flex-col justify-between">
                <div className="flex justify-center border-b-2 border-white p-2 text-2xl">
                    <span>Split Text Animation Showcase</span>
                </div>

                <h1 className="text-9xl text-center justify-center">
                    <div className="flex flex-col justify-center items-center">
                        {!submitted && (
                            <div className="flex justify-center items-center space-x-2">
                                <div className="w-24 h-24 bg-white rounded-full animate-bounce"></div>
                            </div>
                        )}

                        {submitted && (
                            <SplitText text={displayValue + "!"} className="font-synco text-8xl" />
                        )}

                        <div className="flex flex-row text-4xl mt-20">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Enter something"
                                className="p-4 border-2 rounded-md bg-[#b4b440] placeholder-yellow-200 outline-none"
                            />
                            <button
                                onClick={handleSubmit}
                                className="rounded-lg p-4 ml-2 border-2 border-white hover:bg-[#3e3e10] transition-transform transform hover:scale-100 active:scale-90 cursor-pointer"
                            >
                                Play
                            </button>
                        </div>
                    </div>
                </h1>

                <div className="flex justify-center border-t-2 border-white p-2 text-2xl">
                    <span>PA⑥</span>
                </div>
            </div>
        </div>
    );
}
