import { useState } from "react";
import OperatorLabel from "../OperatorLabel";
import Stream from "../Stream";

export default function Filter() {
    const [marbleInput, setMarbleInput] = useState(0);
    const [marbleOutput, setMarbleOutput] = useState(0);

    const handleAdd = () => {
        const v = marbleInput + 1;
        setMarbleInput(v);
        if (v % 2 === 0) {
            setMarbleOutput(v);
        }
    }
    
    return (
        <>
            <div className="marble-container">
                <button id="myButton" className="add-button" onClick={handleAdd}><span className="material-symbols-outlined">add</span></button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marbleInput.toString()} />
            </div>
            <OperatorLabel expression={'filter(x => x % 2 === 0)'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput.toString()} />
            </div>
        </>
    )
}