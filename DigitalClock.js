import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

export const DigitalClock = ({ time, setAnalog }) => {

    console.log(time)

    return (
        <div className='digitalClockRender' onClick={() => setAnalog(true)}>
            <div className='digitalClockTime'><h3>{time.toLocaleTimeString()}</h3></div>
            <div className='digitalClockDate'><h5>{time.toLocaleDateString()}</h5></div>
        </div>
    )
}