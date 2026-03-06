import { useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";

const TAKE_COUNT = 3;

export default function Take() {
    const [marbleInput, setMarbleInput] = useState(0);
    const [marbleOutput, setMarbleOutput] = useState(0);
    const [taken, setTaken] = useState(0);

    const completed = taken >= TAKE_COUNT;

    const handleAdd = () => {
        if (completed) return;
        const v = marbleInput + 1;
        setMarbleInput(v);
        setMarbleOutput(v);
        setTaken(t => t + 1);
    };

    return (
        <>
            <OperatorDescription
                name="take"
                tagline="Take only the first N values, then stop."
                description="Lets through a set number of values and then completes the stream, ignoring everything after. The button disables once the limit is reached, mirroring how a completed observable stops emitting."
            />
            <div className="marble-container">
                <button className="add-button" onClick={handleAdd} disabled={completed}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marbleInput.toString()} />
            </div>
            <OperatorLabel expression={`take(${TAKE_COUNT})`} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput.toString()} />
            </div>
        </>
    );
}
