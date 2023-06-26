import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

export const AnalogClock = ({ timeZone, setAnalog}) => {

  return (
      <div className='clockRender' onClick={() => setAnalog(false)}>
        <Clock
          value={timeZone}
          size={"6vw"}
          renderMinuteMarks={false}
          hourHandWidth={2}
          renderNumbers={true}
        />
      </div>
  )
}