import React, { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const [phase, setPhase] = useState("Mounting"); // Initialize phase as Mounting
  const [isRunning, setIsRunning] = useState(true); // Track if the timer is running

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setTimer((prev) => prev + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      setPhase("Unmounting");
    };
  }, [isRunning]); // Include isRunning in the dependency array

  useEffect(() => {
    setPhase("Updating");
    console.log("Updating Phase: Timer value changed to", timer);
  }, [timer]); // Dependency array watches for changes in the timer state

  const handleUnmount = () => {
    setIsRunning(false); // Stop the timer when unmounted or button clicked
  };

  return (
    <div>
      <div>Timer: {timer}</div>
      <div>Current Phase: {phase}</div>
      <button onClick={handleUnmount}>Unmount Timer</button>
    </div>
  );
}

export default Timer;
