import React, { useEffect, useState } from "react";

const App = () => {
    const [time, setTime] = useState('');
    const [showTimer, setShowTimer] = useState(true);
    const parsTime = () => {
        const timeToPars = new Date().toLocaleTimeString()
        return timeToPars
    }

    useEffect(()=>{
        const systemTimeOut = setInterval(()=>{
            setTime(parsTime());
        }, 1000);
        return (()=>clearTimeout(systemTimeOut));
    },[])
    
    return (<div>
        {
            showTimer && <h1>{time}</h1>
        }
        <button onClick={()=>setShowTimer(showTimer=>!showTimer)}>Show Timer</button>
    </div>);
}

export default App;