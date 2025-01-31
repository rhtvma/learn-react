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

    return (
        <div className="App">
            <div className="box">
                <p> count - {count}</p>
                <button onClick={handleAdd} className="add">
                    ADD
                </button>
                <button onClick={handleSub} className="sub">
                    SUB
                </button>
            </div>
        </div>
    );
}

export default App