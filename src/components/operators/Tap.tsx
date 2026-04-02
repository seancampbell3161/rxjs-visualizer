import { useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";

export default function Tap() {
    const [marbleInput, setMarbleInput] = useState(0);
    const [marbleOutput, setMarbleOutput] = useState(0);
    const [logCount, setLogCount] = useState(0);

    const handleAdd = () => {
        const v = marbleInput + 1;
        setMarbleInput(v);
        setLogCount(c => c + 1);
        setMarbleOutput(v);
    };

    return (
        <>
            <OperatorDescription
                name="tap"
                tagline="Peek at values without changing them."
                description="Runs a side effect for every emission but passes the value through untouched. Useful for logging or debugging. Notice the counter below increments on each click, but output values are identical to input values."
            />
            <div className="marble-container">
                <button className="add-button" onClick={handleAdd}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marbleInput.toString()} />
            </div>
            <OperatorLabel expression={'tap(x => console.log(x))'} />
            <p className="tap-log">console.log called <strong>{logCount}</strong> time{logCount !== 1 ? 's' : ''}</p>
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput.toString()} />
            </div>
        </>
    );
}
