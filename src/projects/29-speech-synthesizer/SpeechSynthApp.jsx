import { useState } from 'react'
import SpeechNarrator from './SpeechNarrator'

export default function SpeechSynthApp() {
    const [text, setText] = useState("text")
    return (
        <div className='container d-flex flex-column'>

            <SpeechNarrator text={text} />
            <textarea cols={"30"} rows={"10"}
                value={text}
                onChange={e => setText(e.target.value)}>

            </textarea>
        </div>
    )
}
