import { useState } from "react"
import OperatorLabel from "../OperatorLabel"
import OperatorDescription from "../OperatorDescription"
import Stream from "../Stream"

export default function Map() {
    const [marbleInput, setMarbleInput] = useState(0);
    const [marbleOutput, setMarbleOutput] = useState(0);

    const handleAdd = () => {
        const v = marbleInput + 1;
        setMarbleInput(v);
        setMarbleOutput(v * 10);
    }

    return (
        <>
            <OperatorDescription
                name="map"
                tagline="Transform each value."
                description="Applies a function to every value emitted by the source and passes the result downstream. Works just like Array.map(), but for streams of events over time."
            />
            <div className="marble-container">
            <button id="myButton" className="add-button" onClick={handleAdd}><span className="material-symbols-outlined">add</span></button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marbleInput.toString()} />
            </div>
            <OperatorLabel expression={'map(x => x * 10)'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput.toString()} />
            </div>
        </>
    )
}