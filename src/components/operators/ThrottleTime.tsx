import { useRef, useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";

export default function ThrottleTime() {
    const [marbleInput, setMarbleInput] = useState(0);
    const [marbleOutput, setMarbleOutput] = useState(0);
    const throttledRef = useRef(false);

    const handleAdd = () => {
        const v = marbleInput + 1;
        setMarbleInput(v);
        if (!throttledRef.current) {
            setMarbleOutput(v);
            throttledRef.current = true;
            setTimeout(() => {
                throttledRef.current = false;
            }, 1000);
        }
    };

    return (
        <>
            <OperatorDescription
                name="throttleTime"
                tagline="Emit the first value, then ignore for a time window."
                description="Lets the first value through immediately, then silences the stream for a set duration. Any values arriving during the silence window are dropped. Compare with debounceTime, which waits for a pause instead. Try clicking rapidly — only one click per second gets through."
            />
            <div className="marble-container">
                <button className="add-button" onClick={handleAdd}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marbleInput.toString()} />
            </div>
            <OperatorLabel expression={'throttleTime(1000)'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput.toString()} />
            </div>
        </>
    );
}
