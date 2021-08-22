import React, { useEffect, useState } from 'react'
import { showTime } from '../../pure-JS/MyTime';

const Clock = () => {

    const [clock, setClock] = useState("")

    useEffect(() => {
        const intervalClock = setInterval(() => setClock(showTime()), 1000);
        return () => clearInterval(intervalClock);
    }, []);

    const han = () => {
        document.documentElement.style.setProperty(`--my-1st-color`, `blue`)
    }

    return (
        <div onClick={() => han} id="clock">{clock ? clock : showTime()}</div>
    )
}

export default Clock
