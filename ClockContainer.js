import { ClockRender } from "./ClockRender";
import React, { useEffect, useState } from 'react';

export const ClockContainer = () => {

  const [timeZones, setTimeZones] = useState(['Asia/Calcutta', 'Asia/Jakarta', 'America/New_York', 'Australia/Hobart'])

  const [allTimeZones, setAllTimeZones] = useState(['Asia/Calcutta', 'Asia/Jakarta', 'America/New_York', 'Australia/Hobart', 'Europe/Andorra', 'Asia/Dubai', 'Asia/Kabul', 'Europe/Tirane', 'Asia/Yerevan', 'Antarctica/Casey', 'Antarctica/Davis', 'Antarctica/DumontDUrville', 'Antarctica/Mawson', 'Antarctica/Palmer', 'Antarctica/Rothera', 'Antarctica/Syowa'])

  const [modify, setModify] = useState({ userAction: false, index: 0, newZone: '' });

  useEffect(() => {
    if (modify.userAction) {
      console.log(modify.newZone)
      setTimeZones([...allTimeZones.slice(modify.index, 0, modify.newZone)])
    }
  }, [modify.newZone])

  return (
    <div>
      {/* <Toggle /> */}
      <ClockRender timeZones={timeZones} setModify={setModify} allTimeZones={allTimeZones} />
    </div>
  );
};
