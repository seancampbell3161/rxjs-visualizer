import { useRef, useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";

export default function DebounceTime() {
    const [marbleInput, setMarbleInput] = useState(0);
    const [marbleOutput, setMarbleOutput] = useState(0);
    const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const handleAdd = () => {
        const v = marbleInput + 1;
        setMarbleInput(v);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setMarbleOutput(v);
        }, 1000);
    };

    return (
        <>
            <OperatorDescription
                name="debounceTime"
                tagline="Wait for a pause before emitting."
                description="Delays emitting a value until the source has been silent for a specified duration. If a new value arrives before the timer expires, the timer resets. Try clicking rapidly — only the last click emits after a 1-second pause."
            />
            <div className="marble-container">
                <button className="add-button" onClick={handleAdd}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marbleInput.toString()} />
            </div>
            <OperatorLabel expression={'debounceTime(1000)'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput.toString()} />
            </div>
        </>
    );
}
