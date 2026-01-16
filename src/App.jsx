import { useState, useEffect } from "react";
import IntroScreen from "./Component/IntroScreen";
import Portfolio from "./Component/portfolio";
import Pointer from "./Pointer";

export default function App() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Listen for the closeTerminal event
    const handleCloseTerminal = () => {
      setStarted(false);
    };

    window.addEventListener('closeTerminal', handleCloseTerminal);

    return () => {
      window.removeEventListener('closeTerminal', handleCloseTerminal);
    };
  }, []);

  return (
    <div className="h-screen w-screen  text-green-400 font-mono overflow-hidden cursor-none z-10">
      <Pointer/>
      {started ? (
        <Portfolio/>
      ) : (
        <IntroScreen onStart={() => setStarted(true)} />
      )}
    </div>
  );
}