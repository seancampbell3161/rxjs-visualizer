import { useEffect, useRef, useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";

export default function Delay() {
    const [marbleInput, setMarbleInput] = useState(0);
    const [marbleOutput, setMarbleOutput] = useState(0);
    const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

    useEffect(() => () => timersRef.current.forEach(clearTimeout), []);

    const handleAdd = () => {
        const v = marbleInput + 1;
        setMarbleInput(v);
        const id = setTimeout(() => {
            setMarbleOutput(v);
        }, 1000);
        timersRef.current.push(id);
    };

    return (
        <>
            <OperatorDescription
                name="delay"
                tagline="Shift every emission forward in time."
                description="Delays each value by a fixed duration before passing it downstream. The values and their order stay the same — they just arrive later. Watch the 1-second gap between input and output marbles."
            />
            <div className="marble-container">
                <button className="add-button" onClick={handleAdd}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marbleInput.toString()} />
            </div>
            <OperatorLabel expression={'delay(1000)'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput.toString()} />
            </div>
        </>
    );
}
