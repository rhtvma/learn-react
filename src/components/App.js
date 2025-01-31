import { useState } from "react";

import "./App.css"
const App = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSub = () => {
    setCount(count - 1)
    }

    const handleReset = ()=> {
        setCount(0)
    }

    return (
        <div className="App">
            <div className="box">
                <p> {count}</p>
                <button onClick={handleAdd} className="add">
                    ADD
                </button>
                {/* <button onClick={()=>{setCount(count + 1)}} className="add">
                    ADD direct calling
                </button> */}
                <button onClick={handleSub} className="sub">
                    SUB
                </button>
                <button onClick={handleReset} className="reset">
                    RESET
                </button>
            </div>
        </div>
    );
}

export default App