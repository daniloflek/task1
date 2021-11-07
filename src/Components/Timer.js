import React, {useEffect, useState} from "react";

export const Timer = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const parsTime = () => {
        const timeToPars = new Date().toLocaleTimeString()
        return timeToPars
    };

    useEffect(()=>{
        const systemTimeOut = setInterval(()=>{
            setTime(parsTime());
            console.log('go')
        }, 1000);
        return (()=>clearInterval(systemTimeOut));
    },[]);

    return (<h1>
        {time}
    </h1>);
}
