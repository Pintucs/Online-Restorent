import React, { useState, useEffect } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ color: "brown" }}>
      <h1>{currentTime.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;
