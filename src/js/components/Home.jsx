import React, { useState, useEffect } from "react";
import Flipclock from "../components/Flipclock.jsx";

const Home = () => {
    const [seconds, setSeconds] = useState(0);
	const [isRunning, setRunning] = useState(true);

    useEffect(() => {
		console.log("useEffect ejecutado", isRunning);

		if (!isRunning) { 
			console.log("contador detenido");
			return;
		} 

		console.log("contador iniciado");
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => {
			console.log("limpieza ejecutada");
			clearInterval(interval);
			};
    }, [isRunning]);

	const handleStop = () => setRunning(false)	
	const handleResume = () => setRunning(true)
	const handleReset = () => {
		setRunning(false);
		setSeconds(0);
	};

    return (
        <div className="counter-wrapper">
        	<Flipclock seconds={seconds}/>
        	<div className="d-flex gap-3">
        	    <button className="btn btn-danger" onClick={handleStop} disabled={!isRunning}>Stop</button>
        	    <button className="btn btn-success" onClick={handleResume} disabled={isRunning}>Resume</button>
        	    <button className="btn btn-warning" onClick={handleReset}>Reset</button>
        	</div>
   		</div>

    );
};

export default Home;