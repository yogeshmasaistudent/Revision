import React, { useEffect, useState } from "react";
// This is most ask in interview question Please explain it proper manner . 
function Timer2() {
  const [timer, SetTimer] = useState(0);
  const [CurrentPhase, SetPhase] = useState("Mounting");
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const Interval = setInterval(() => {
      if (isRunning) {
        SetTimer((pre) => pre + 1);
        SetPhase("Updating");
      }
    }, 1000);

    // Here it will unmount phase 
    return () => {
      clearInterval(Interval);
    };
  },[isRunning]);

  function handleUnmount() {
    setIsRunning(false);
    SetPhase("UnMounted");
  }

  return (
    <div>
      <div> Time: {timer}</div>
      <div>CurrentPhase :{CurrentPhase}</div>
      <button onClick={handleUnmount}>Unmount</button>
    </div>
  );
}
export default Timer2;
