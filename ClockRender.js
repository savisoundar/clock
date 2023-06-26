import React, { useEffect, useState } from 'react';
import { AnalogClock } from './AnalogClock';
import { DigitalClock } from './DigitalClock';
import { ChooseTimeZone } from './ChooseTimeZone.';

export const ClockRender = ({ timeZones, setModify, allTimeZones }) => {

  const [timeZoneOne, timeZoneTwo, timeZoneThree, timeZoneFour] = [...timeZones]

  const [valueClockOne, setValueClockOne] = useState();

  const [valueClockTwo, setValueClockTwo] = useState();

  const [valueClockThree, setValueClockThree] = useState();

  const [valueClockFour, setValueClockFour] = useState();

  const [analog, setAnalog] = useState(true);

  const changeTimezone = (date, ianatz) => {
    var invdate = new Date(
      date.toLocaleString("en-US", {
        timeZone: ianatz,
      })
    );

    var diff = date.getTime() - invdate.getTime();

    return new Date(date.getTime() - diff);
  };

  useEffect(() => {
    const intervalClockOne = setInterval(() =>
      setValueClockOne(changeTimezone(new Date(), timeZoneOne), 1000)
    );

    const intervalClockTwo = setInterval(() =>
      setValueClockTwo(changeTimezone(new Date(), timeZoneTwo), 1000)
    );

    const intervalClockThree = setInterval(() =>
      setValueClockThree(changeTimezone(new Date(), timeZoneThree), 1000)
    );

    const intervalClockFour = setInterval(() =>
      setValueClockFour(changeTimezone(new Date(), timeZoneFour), 1000)
    );

    return () => {
      clearInterval(intervalClockOne);
      clearInterval(intervalClockTwo)
      clearInterval(intervalClockThree)
      clearInterval(intervalClockFour)
    };

  }, [timeZoneOne, timeZoneTwo, timeZoneThree, timeZoneFour]);

  return (
    <div className="clockContainer">
      <>
        <div className='clock'>
          {analog ?
            <AnalogClock timeZone={valueClockOne} setAnalog={setAnalog} />
            : <DigitalClock time={valueClockOne} setAnalog={setAnalog} ></DigitalClock>
          }<ChooseTimeZone setModify={setModify} index={0} timeZone={timeZoneOne} allTimeZones={allTimeZones} />
        </div>
        <div className='clock'>
          {analog ?
            <AnalogClock timeZone={valueClockTwo} setAnalog={setAnalog} />
            : <DigitalClock time={valueClockTwo} setAnalog={setAnalog} ></DigitalClock>
          }<ChooseTimeZone setModify={setModify} index={1} timeZone={timeZoneTwo} allTimeZones={allTimeZones} />
        </div>
        <div className='clock'>
          {analog ?
            <AnalogClock timeZone={valueClockThree} setAnalog={setAnalog} />
            : <DigitalClock time={valueClockThree} setAnalog={setAnalog}></DigitalClock>
          }<ChooseTimeZone setModify={setModify} index={2} timeZone={timeZoneThree} allTimeZones={allTimeZones} />
        </div>
        <div className='clock'>
          {analog ?
            <AnalogClock timeZone={valueClockFour} setAnalog={setAnalog} />
            : <DigitalClock time={valueClockFour} setAnalog={setAnalog} ></DigitalClock>
          }
          <ChooseTimeZone setModify={setModify} index={3} timeZone={timeZoneFour} allTimeZones={allTimeZones} />
        </div>
      </>
    </div>
  );
};
