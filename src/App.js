import React, { useEffect, useState } from "react";

import { Timer } from "./Components/Timer";

const App = () => {
    const [showTimer, setShowTimer] = useState(true);

    return (<div>
        { showTimer && <Timer /> }
        <button onClick={()=>setShowTimer(showTimer=>!showTimer)}>Show Timer</button>
    </div>);
}

export default App;