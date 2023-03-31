import React, { useState } from "react";

export default function Align() {
    const [alignment, setAlignment] = useState("center");
    return (
        <div className="alignMe">
            <h3 style={{ textAlign: alignment}}>align Me!</h3>

            <div className="buttons">
                <button onClick={() => setAlignment("left")}>Left</button>
                <button onClick={() => setAlignment("center")}>Center</button>
                <button onClick={() => setAlignment("right")}>Right</button>
            </div>
        </div>
    );
}