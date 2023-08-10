import React, { useState, useEffect } from 'react';

function Timer(){

        const [seconds, setSeconds] = useState(0);
        const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
      let interval;
      
      if (isRunning) {
      interval = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
    } else {
        clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [isRunning]);
  
  const startTimer = () => {
      setIsRunning(true);
    };
    
    const stopTimer = () => {
        setIsRunning(false);
    };
    
    const resetTimer = () => {
        setIsRunning(false);
        setSeconds(0);
    };
    
    return (
        <div className='timer'>
        <h1>hello Timer</h1>
    
      <p>Seconds: {seconds}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    
            </div>
        )
    }

export default Timer;