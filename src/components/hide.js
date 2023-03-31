import React, { useState } from "react";

export default function Hide() {
    const [visibility, setVisibility] = useState("block");
    const [btnText, SetBtnText] = useState("Hide Me");
    const handleClick = () => {
        setVisibility(visibility === "block" ? "none" : "block" ),
            SetBtnText(btnText === "Hide Me" ? "Show Me" : "Hide Me");
    };
    return (
        <div className="hideMe">
            <h2 style={{ display: visibility }}>Hide Me!</h2>

            <div className="buttons">
                <button onClick={handleClick}>{btnText}</button>
            </div>

        </div>
    )
}