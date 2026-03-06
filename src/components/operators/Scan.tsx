import { useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";

export default function Scan() {
    const [marbleInput, setMarbleInput] = useState(0);
    const [marbleOutput, setMarbleOutput] = useState(0);
    const [accumulator, setAccumulator] = useState(0);

    const handleAdd = () => {
        const v = marbleInput + 1;
        const newAcc = accumulator + v;
        setMarbleInput(v);
        setAccumulator(newAcc);
        setMarbleOutput(newAcc);
    };

    return (
        <>
            <OperatorDescription
                name="scan"
                tagline="Accumulate values over time."
                description="Applies an accumulator function on each emission, carrying state forward from one value to the next. Like Array.reduce(), but it emits the running result after every value — not just at the end. Here it keeps a running sum."
            />
            <div className="marble-container">
                <button className="add-button" onClick={handleAdd}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marbleInput.toString()} />
            </div>
            <OperatorLabel expression={'scan((acc, x) => acc + x, 0)'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput.toString()} />
            </div>
        </>
    );
}
