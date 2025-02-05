import { useState } from "react"

const BoxCard = ({ result, children }) => {
    const [show, setShow] = useState(true)

    return (
        <div className={show ? "" : "hidden"}>
            <div className={`box ${result}`}>
                {children}
                <button className="trigger" onClick={() => setShow(!show)}>HIDE</button>
            </div>
        </div>
    )
}

export default BoxCard