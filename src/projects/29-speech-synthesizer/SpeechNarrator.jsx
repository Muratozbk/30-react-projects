import React from 'react'
import { AiFillRobot, AiOutlineRobot } from "react-icons/ai"

export default function SpeechNarrator({ text }) {
    const robotStyle = {
        fontSize: 100,
        padding: 0,
        cursor: "pointer"
    }
    return (
        <div className='container d-flex flex-column '
            style={{ gap: 30, margin: "3rem 0" }}>
            <h1>SpeechNarrator</h1>
            <AiFillRobot style={robotStyle} className='text-primary' />
            <AiOutlineRobot style={robotStyle} />
            {/* HighlightedText */}
            <div className="form-group">
                <label>Rate: {'rateValue'} </label>
                <input type="range" step="0.1"
                    max="2" min=".5"
                    value={"rateValue"} />
            </div>
        </div>
    )
}
