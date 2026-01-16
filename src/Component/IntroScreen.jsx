import { useEffect, useState } from "react";

export default function IntroScreen({ onStart }) {
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = 'Welcome to Foram\'s  Portfolio';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 80);

        const cursorBlink = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => {
            clearInterval(timer);
            clearInterval(cursorBlink);
        };
    }, []);

    return (
        <div className="h-screen w-screen bg-black flex items-center justify-center p-4">
            <div className="text-center space-y-8 max-w-3xl">
                <div className="text-xl md:text-3xl lg:text-4xl font-bold text-green-400 font-mono mb-8 flex items-center justify-center">
                    <span className="mr-2">$</span>
                    <span>{text}</span>
                    <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
                </div>
                <p className="text-green-400/70 text-sm md:text-base mb-8">
                    Press START to initialize system...
                </p>
                <button
                    onClick={onStart}
                    className="px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 
                     rounded-none hover:bg-green-400/10 transition-all duration-300 font-mono text-base md:text-lg
                     hover:shadow-lg hover:shadow-green-400/50 relative group overflow-hidden"
                >
                    <span className="relative z-10">[ START SYSTEM ]</span>
                    <div className="absolute inset-0 bg-green-400/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
                <div className="mt-8 text-green-400/50 text-xs md:text-sm animate-pulse">
                    ▸ Loading kernel modules...
                </div>
            </div>
        </div>
    );
}